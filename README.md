# wxk-个人介绍

个人介绍单页 Demo。React + Vite 实现，内置三套可切换风格（页面右下角「风格」切换），文案为现代白话简历语言。

## 三套风格

| 主题 | 说明 |
| --- | --- |
| `paper` 新中式·轻雅 | 宣纸色底 + 朱砂点缀，宋体标题，横排现代版式（默认） |
| `minimal` 极简白 | 纯白底、黑体、胶囊按钮，类似 GitHub Profile 的清爽风 |
| `dark` 深色开发者 | 深色底、等宽字体标题、`>` 与 `//` 终端元素，蓝色点缀 |

选择保存在 `localStorage`（键 `wxk-theme`）；确定最终风格后可删除另外两套与切换器。

## 运行

```bash
npm install
npm run dev      # 开发预览，默认 http://localhost:5173
npm run build    # 构建产物输出到 dist/
npm run preview  # 本地预览构建产物
```

## 修改资料

页面上所有文字都集中在 **`src/data/profile.js`** 一个文件里：

- `name`：姓名（魏新科）
- 头像：`src/assets/avatar.png`（首屏圆形展示，替换文件即可换头像）
- `intro` / `bio`：首屏一句话与「关于我」段落
- `facts`：基本信息栏（年龄、学历、经验等，留空自动隐藏）
- `chips`：首屏标签
- `skills`：技能分组（6 组：Java、监控与可观测、Python、数据库、中间件与 Web 服务、前端与工具）
- `domains`：主攻方向（运维监控视角的 5 条主线）
- `cases`：解决案例（问题 → 处理 → 结果；**定性描述，具体项目名与数字请替换为真实数据**）
- `timeline`：**经历——时间为按「四年经验」的示意倒推，请按实际情况修改**
- `repos`：开源作品（抓取自 GitHub 公开主页，可增删排序）

## 目录结构

```
src/
├── data/profile.js            # 全部个人资料（唯一需要常改的文件）
├── components/
│   ├── Nav.jsx                # 顶部导航（滚动高亮）
│   ├── Hero.jsx               # 首屏：姓名 + 标题 + 标签 + 按钮
│   ├── Section.jsx            # 板块框架：编号 + 标题
│   ├── About.jsx              # 01 关于我 + 信息栏
│   ├── Skills.jsx             # 02 技能栈（6 组）
│   ├── Domains.jsx            # 03 主攻方向（运维监控主线）
│   ├── Cases.jsx              # 04 解决案例（问题 → 处理 → 结果）
│   ├── Timeline.jsx           # 05 经历年表
│   ├── Repos.jsx              # 06 开源作品列表
│   ├── Footer.jsx             # 页脚
│   └── ThemeSwitcher.jsx      # 右下角风格切换器
├── hooks/useReveal.js         # 进入视口淡入动效（带节流环境兜底）
└── styles/global.css          # 三套主题变量 + 全部样式
```
