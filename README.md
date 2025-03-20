# 产品九宫格展示系统

## 项目概述
演示链接：https://9gongge.netlify.app/

产品九宫格展示系统是一个基于React和TypeScript开发的现代化Web应用，用于以九宫格形式展示和管理产品信息。该系统提供了直观的产品分类展示，支持网格视图和表格视图切换，并具有产品详情查看、添加、编辑和删除等功能。
![局部截取_20250321_015525](https://github.com/user-attachments/assets/a8eafeeb-5a1b-408a-b818-d1b45470f53d)

## 功能特点

### 1. 九宫格布局
- 采用响应式九宫格设计，根据视口高度自动调整大小
- 支持按产品系列（高端/专业/入门）和应用场景（商用/教育/创意）进行分类展示
- 自定义栏目名称，灵活调整分类方式

### 2. 多视图模式
- 网格视图：以九宫格形式直观展示产品
- 表格视图：以表格形式展示产品详细信息，方便批量管理
- 一键切换视图模式，点击九宫格即可显示产品具体信息
![局部截取_20250321_015608](https://github.com/user-attachments/assets/03907160-6999-457b-ba50-995925a95230)

### 3. 产品信息管理
- 添加新产品：支持填写产品名称、图片、分类、级别等信息
![局部截取_20250321_010426](https://github.com/user-attachments/assets/d17e2bee-d386-490b-90e5-ec616dbb180b)
- 编辑产品：修改现有产品的各项属性
- 删除产品：移除不需要的产品
- 产品详情：查看产品的完整规格和描述

### 4. 用户体验优化
- 信息显示控制：支持「始终显示」和「悬停显示」两种模式
- 产品标签：支持「引领产品」和「阻击产品」等特殊标记
- 操作反馈：添加、编辑、删除操作均有友好的提示信息

## 技术栈

- **前端框架**：React 18
- **开发语言**：TypeScript
- **构建工具**：Vite
- **样式解决方案**：Tailwind CSS
- **图标库**：Lucide React
- **通知组件**：React Hot Toast
- **数据存储**：Supabase (预留接口)

## 安装与使用

### 环境要求
- Node.js 16.0+ ，需要先下载安装https://nodejs.org/en/download
- npm 7.0+ （推荐）或 yarn 1.22+

### 安装步骤

1. 克隆仓库
```bash
git clone https://github.com/zlcggb/9gongge.git
cd 9gongge
```

2. 安装依赖
```bash
npm install #推荐
# 或
yarn install
```

3. 启动开发服务器
```bash
npm run dev #推荐
# 或
yarn dev
```
  ➜启动成功后，打开  Local:   http://localhost:5175/
 
  
4. 构建生产版本（可选）
```bash
npm run build #推荐
# 或
yarn build
```

## 项目结构

```
├── public/             # 静态资源
├── src/                # 源代码
│   ├── components/     # 组件
│   │   ├── AddProductModal.tsx    # 添加产品模态框
│   │   ├── ProductDetail.tsx      # 产品详情组件
│   │   ├── ProductGrid.tsx        # 九宫格网格视图
│   │   ├── TableView.tsx          # 表格视图
│   │   └── ViewToggle.tsx         # 视图切换组件
│   ├── data/           # 数据
│   │   └── products.ts # 产品数据
│   ├── App.tsx         # 应用主组件
│   ├── main.tsx        # 入口文件
│   ├── types.ts        # 类型定义
│   └── index.css       # 全局样式
├── index.html          # HTML模板
├── package.json        # 项目依赖
├── tsconfig.json       # TypeScript配置
├── vite.config.ts      # Vite配置
└── tailwind.config.js  # Tailwind CSS配置
```

## 自定义与扩展

### 添加新的产品分类
可以在`ProductGrid.tsx`中修改`topCategories`和`sideCategories`状态来添加或修改产品分类。

### 修改产品属性
在`types.ts`文件中可以调整`Product`接口定义，添加或修改产品属性。

### 连接后端API
项目已集成Supabase客户端，可以通过修改相关组件中的数据处理逻辑，连接到实际的后端API。

## 贡献指南

欢迎提交问题和功能请求！如果您想贡献代码，请遵循以下步骤：

1. Fork 仓库
2. 创建您的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交您的更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 打开一个 Pull Request

## 许可证

本项目采用 MIT 许可证 - 详情请参阅 LICENSE 文件

## 联系方式

如有任何问题或建议，请通过GitHub仓库提交issue或联系项目维护者。
