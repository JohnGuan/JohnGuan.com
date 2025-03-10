---
outline: deep
---

# 运行时 API 示例

此页面演示了 VitePress 提供的一些运行时 API 的使用方法。

主要的 `useData()` API 可用于访问当前页面的站点、主题和页面数据。它可以在 `.md` 和 `.vue` 文件中使用：

```md
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

## 结果

### 主题数据

<pre>{{ theme }}</pre>

### 页面数据

<pre>{{ page }}</pre>

### 页面前言

<pre>{{ frontmatter }}</pre>
```

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

## 结果

### 主题数据

<pre>{{ theme }}</pre>

### 页面数据

<pre>{{ page }}</pre>

### 页面前言

<pre>{{ frontmatter }}</pre>

## 更多

查看文档以获取[运行时 API 的完整列表](https://vitepress.dev/reference/runtime-api#usedata)。
