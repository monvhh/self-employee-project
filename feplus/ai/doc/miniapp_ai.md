### 一切的开端
乔治阿玛尼小程序口红试色
![image.png](https://upload-images.jianshu.io/upload_images/2969235-c04664c043234d10.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

微信：小程序基础产品能力，如摄像头帧数据能力、画布渲染能力。
阿玛尼小程序服务商：AR 试妆引擎协作、边试边买页面开发。
Modiface（欧莱雅集团）：AR 试妆引擎。
Google：Tensorflow 开源框架。

### 小程序如何实现AR
![image.png](https://upload-images.jianshu.io/upload_images/2969235-7e17e024b995ee9c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

小程序提供：Camera和WebGL画布功能
AR引擎提供图像识别等功能

Camera获取的图像实时通过AR引擎处理后通过Canvas绘制。

> [微信开发者社区](https://developers.weixin.qq.com/community/develop/doc/00004cead482c0c2c139b75fa51009?highLine=AR)
>
> [微信公开课](https://mp.weixin.qq.com/s/4_p2bAcp3OkTQizceFvMkQ)

###  Demo
微信小程序+TensorFlow

>
> [TensorFlowJS 微信小程序插件](https://mp.weixin.qq.com/wxopen/plugindevdoc?appid=wx6afed118d9e81df9&token=1076294821&lang=zh_CN)
>
> [微信小程序npm支持](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)
>
> [微信小程序Camera组件](https://developers.weixin.qq.com/miniprogram/dev/component/camera.html)
>
> [微信小程序Canvas组件](https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html)



### WeChat Mini-program plugin for TensorFlow.js
简单介绍

+ tfjs-core: 基础包
+ tfjs-converter: GraphModel 导入和执行包
+ tfjs-layers: LayersModel 创建，导入和执行包
+ tfjs-data：数据流工具包

> [TensorFlowJS 微信小程序插件 github](https://github.com/tensorflow/tfjs-wechat)

#### posenet model简介

> [example in browser](https://storage.googleapis.com/tfjs-models/demos/posenet/camera.html)
>
> [Real-time Human Pose Estimation in the Browser with TensorFlow.js](https://medium.com/tensorflow/real-time-human-pose-estimation-in-the-browser-with-tensorflow-js-7dd0bc881cd5)

### Pre-trained TensorFlow.js models

+ 图像识别
+ 语音识别
+ 人体姿态识别
+ 物体识别
+ 文字分类
+ KNN Classifier（可用于迁移学习）
    > 迁移学习：复用现有模型训练新模型。
    >
    > [what's transfer learning](https://www.tensorflow.org/js/tutorials/transfer/what_is_transfer_learning)


> [models for TensorFlow.js](https://www.tensorflow.org/js/models)
>
> [modles in github](https://github.com/tensorflow/tfjs-models)
>
> [Examples built with TensorFlow.js](https://github.com/tensorflow/tfjs-examples)


### 训练模型by yourself



### 客户端进行机器学习vs服务端
+ 保护隐私，因为没有数据上传



