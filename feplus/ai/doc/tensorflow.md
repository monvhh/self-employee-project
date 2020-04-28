## TensorFlow

TensorFlow 是一个端到端开源机器学习平台。它拥有一个包含各种工具、库和社区资源的全面灵活生态系统，可以让研究人员推动机器学习领域的先进技术的发展，并让开发者轻松地构建和部署由机器学习提供支持的应用。

### 基础概念
+ 张量（Tensors）：张量是向量和矩阵向更高维度的推广。简单粗暴来讲，多维数组（三体：整个宇宙都是各种维度的……）
+ 模型（model）：带有可训练参数的函数。简单粗暴来讲：输入到输出的函数。

### 构建模型
+ 高阶 Keras API 构建和训练模型
+ Eager Execution 进行快速迭代和直观的调试
+ 对于大型机器学习训练任务，Distribution Strategy API 在不同的硬件配置上进行分布式训练

### 机器学习生产
+ 完整的生产型及机器学习流水线：TensorFlow Extended (TFX)
+ 移动设备和边缘设备：TensorFlow Lite


### TensorFlow.js
TensorFlow.js 是一个 JavaScript 库，用于在浏览器和 Node.js 训练和部署机器学习模型。
