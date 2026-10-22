# 项目规则

## 命名规范
所有 CSS class、id、JS 变量必须以 chen_ 开头。

## 页面注释
每个 HTML 页面顶部必须包含如下格式的注释：
```
<!--
姓名：陈弘毅
日期：yyyy-MM-dd
功能名称：<本页功能简述>
-->
```
日期使用当前编写日期。

## 技术栈
- 仅使用原生 HTML、CSS、JavaScript，不引入任何第三方 JS 库或 CSS 框架
- 图标仅使用 `font/font_5244855_fm8s0yq40te/iconfont.css`，禁止引用 Font Awesome、Lucide 等第三方图标库
- 所有资源必须本地引用，不使用任何 CDN 在线链接
- 与服务器交互统一使用 `fetch()` API

## 执行日志
所有提示词在执行前以追加方式写入 `chen_prompt.md`（不覆盖），格式：
```
yyyy-MM-dd-HH-mm
使用的模型：<模型名>
提示词内容：
<用户原始请求>
---
```

## 页脚
每个页面底部 footer 显示：学号 24001010722，姓名 陈弘毅。
