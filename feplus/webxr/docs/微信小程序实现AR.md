草稿草稿

https://developers.weixin.qq.com/community/develop/doc/000040d401c0b0abead8b57835b000?highLine=AR



微信小程序实现了AR？？
No，只是实现了获取Camera 实时帧数据API：https://developers.weixin.qq.com/miniprogram/dev/api/media/camera/CameraContext.onCameraFrame.html
然后开发者自行处理实时帧数据再通过canvas绘制图像，以此达到增强现实的效果。

没有SLAM
https://www.google.com/search?q=SLAM&oq=SLAM&aqs=chrome..69i57j0l5.279j0j4&sourceid=chrome&ie=UTF-8