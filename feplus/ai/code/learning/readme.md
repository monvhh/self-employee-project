### TensorFlow.JS遇见小程序 - 加载模型实例

#### 准备工作

添加TensorFlow.JS插件
https://mp.weixin.qq.com/wxopen/plugindevdoc?appid=wx6afed118d9e81df9&token=1076294821&lang=zh_CN

安装Node.js
https://nodejs.org

npm安装第三方库
在项目目录下:

```
npm init
npm install @tensorflow/tfjs-core
npm install @tensorflow/tfjs-converter
npm install @tensorflow/tfjs-layers
npm install fetch-wechat
npm install regenerator-runtime
```

然后去微信小程序开发工具里面"构建npm"

第三方库的导入
```
var fetchWechat = require('fetch-wechat');
var tf = require('@tensorflow/tfjs-core');
var plugin = requirePlugin('tfjsPlugin');
```

在app.js里配置插件
```
App({
  onLaunch: function () {
    plugin.configPlugin({
      fetchFunc: fetchWechat.fetchFunc(),
      tf, canvas: wx.createOffscreenCanvas()
    })
  }
})
```

Python (2.7) 环境下将已训练好的模型转换为TF.js格式

Python 安装TensorFlow
```
pip install tensorflow
```

需要安装tensorflowjs
```
pip install tensorflowjs
```

Keras模型转换TF.js格式命令:
```
tensorflowjs_converter --input_format keras \
                        path/to/my_model.h5 \
                        path/to/tfjs_target_dir
```

其它更多格式模型的转换方法，请参考:

导入Keras模型:
https://www.tensorflow.org/js/tutorials/conversion/import_keras

导入TensorFlow SavedModel:
https://www.tensorflow.org/js/tutorials/conversion/import_saved_model

