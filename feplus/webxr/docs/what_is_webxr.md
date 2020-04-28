### what's webxr

简单来说，W3C出了一套包括但不限于WebVR/WebAR的规范。

这个W3C组织名叫Immersive Web，即沉浸式网络，非常确切的概括了WebXR想要实现的效果。

组织的目标是通过API将高性能虚拟现实（VR）和增强现实（AR）（统称为XR）引入开放式Web，以便与Web中的传感器和XR设备进行交互。简单粗暴讲就是，Native能做的事情，Web也能做。

以下是对WebXR Device API 规范的简单介绍

#### 历史

前身是[WebVR规范](https://immersive-web.github.io/webvr/)，由于AR等其他使用场景爆发，因此扩展成XR。

今天2019-07-23，最近一个版本是2019-05-21。

**这里有一个疑问点，VR和AR为什么可以合并？**

首先你得知道VR和AR的区别：

简单来说，VR是纯虚拟场景，AR是在现实场景中呈现虚拟场景。他们的区别在于一个不用考虑现实场景，一个需要。所以首先对AR来讲摄像头是必须的，其次虽然两者都需要处理用户的交互，但是VR只需反应在虚拟场景中，AR要检测当前现实场景配合用户交互做处理，而且两者的交互方式也不尽相同。

因此有很明显共通的部分：

+ 显示
+ 交互

#### 设备

|    |             头戴设备            | 手持设备，比如手机 |
|----|:---------------------------------------:|:--------------------------:|
| VR | VR Devices, previously handled by WebVR | Magic Window Behaviour     |
| AR | Mixed Reality Headsets                  | Phone AR                   |

目前支持的设备包括：

- [ARCore-compatible devices](https://developers.google.com/ar/discover/supported-devices)
- [Google Daydream](https://vr.google.com/daydream/)
- [HTC Vive](https://www.htcvive.com/)
- [Magic Leap One](https://www.magicleap.com/magic-leap-one)
- [Microsoft Hololens](https://www.microsoft.com/en-us/hololens/)
- [Oculus Rift](https://www3.oculus.com/rift/)
- [Samsung Gear VR](http://www.samsung.com/global/galaxy/gear-vr/)
- [Windows Mixed Reality headsets](https://developer.microsoft.com/en-us/windows/mixed-reality)

#### 目标

WebXR应用页面可以

* 检测XR功能是否可用
* 获取可用的XR功能
* 轮询XR设备和关联输入设备状态
* 在XR设备上以正确的帧率显示图像

以下是它不涉及的

* 规定VR/AR浏览器应该如何工作
* 暴露每一个XR设备每一个具体的特性
* 构建“[The Metaverse](https://en.wikipedia.org/wiki/Metaverse).”

#### 一个WebXR应用的生命周期

大部分WebXR应用的基本步骤如下:

 1. 查询期望的XR模式是否支持
 2. 支持的话，应用会向用户通告XR功能
 3. 响应用户交互事件，从设备发起immersive XR session请求
 4. 通过这个session，进行循环的渲染，生成在XR设备上显示的图片帧
 5. 持续产生图片帧直到用户表明他们想退出XR模式
 6. 结束XR session

#### what's more

一些示例
> <https://immersive-web.github.io/webxr-samples/>

详细规范文档
> <https://www.w3.org/TR/webxr/>

github
> <https://github.com/immersive-web/webxr>

支持WebVR的浏览器
> <https://webvr.rocks/>
