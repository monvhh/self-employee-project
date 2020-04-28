const tf = require('@tensorflow/tfjs-core')
const posenet = require('@tensorflow-models/posenet') // pose
const regeneratorRuntime = require('regenerator-runtime')// for using async in wechat miniapp client
const POSENET_URL = 'https://www.gstaticcnapps.cn/tfjs-models/savedmodel/posenet/mobilenet/float/050/model-stride16.json'// posenet模型中国镜像地址

Page({
  async onReady () {
    const camera = wx.createCameraContext(this) // 创建camera上下文
    this.canvas = wx.createCanvasContext('pose', this) // 创建 canvas 的绘图上下文
    this.loadPosenet()
    let count = 0
    // 获取camera实时帧数据
    const listener = camera.onCameraFrame((frame) => {
      count++
      if (count === 3) {
        if (this.net) {
          this.drawPose(frame)
        }
        count = 0
      }
    })
    listener.start()
  },
  // 加载模型
  async loadPosenet () {
    this.net = await posenet.load({
      architecture: 'MobileNetV1', // MobileNetV1 | ResNet50
      outputStride: 16, // 8 | 16 | 32 缩小输入图像size的比例 how much we’re scaling down the output relative to the input image size
      inputResolution: 193, // 输入的image size，越大越精确，同时越慢
      multiplier: 0.5, // 卷积运算深度的multiplier
      modelUrl: POSENET_URL
    })
  },
  async detectPose (frame, net) {
    const imgData = { data: new Uint8Array(frame.data), width: frame.width, height: frame.height }
    /**
     * tf.tidy=>function执行完就清理内存
     * Using this method helps avoid memory leaks. In general, wrap calls to operations in tf.tidy() for automatic memory cleanup.
     *
     */
    const imgSlice = tf.tidy(() => {
      const imgTensor = tf.browser.fromPixels(imgData, 4) // Creates a tf.Tensor from an image.
      return imgTensor.slice([0, 0, 0], [-1, -1, 3])// 处理为三通道
    })
    // 检测单人pose
    const pose = await net.estimateSinglePose(imgSlice, { flipHorizontal: false })
    imgSlice.dispose()// 销毁tensor
    return pose // 带有score和position的keypoints数组
  },
  async drawPose (frame) {
    const pose = await this.detectPose(frame, this.net)
    if (pose == null || this.canvas == null) return
    if (pose.score >= 0.3) {
      // Draw circles
      for (const i in pose.keypoints) {
        const point = pose.keypoints[i]
        if (point.score >= 0.5) { // confidence score
          const { y, x } = point.position
          this.drawCircle(x, y)
        }
      }
      // Draw lines
      const adjacentKeyPoints = posenet.getAdjacentKeyPoints(pose.keypoints, 0.3) // 获取邻近点
      for (const i in adjacentKeyPoints) {
        const points = adjacentKeyPoints[i]
        this.drawLine(points[0].position, points[1].position)
      }
      this.canvas.draw()// 将之前在绘图上下文中的描述（路径、变形、样式）画到 canvas 中
    }
  },
  drawCircle (x, y) {
    const canvas = this.canvas
    canvas.beginPath()
    canvas.arc(0.54 * x, 0.58 * y, 3, 0, 2 * Math.PI)
    canvas.setFillStyle('aqua')
    canvas.fill()
  },
  drawLine (pos0, pos1) {
    const canvas = this.canvas
    canvas.beginPath()
    canvas.moveTo(pos0.x * 0.54, pos0.y * 0.58)
    canvas.lineTo(pos1.x * 0.54, pos1.y * 0.58)
    canvas.setLineWidth(2)
    canvas.setStrokeStyle('aqua')
    canvas.stroke()
  }
})
