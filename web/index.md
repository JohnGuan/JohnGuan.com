---
layout: false
title: 管宁川
titleTemplate: "John Guan"
navbar: false
sidebar: false
aside: false
prev: false
next: false
footer: false
---

<script setup lang="ts">
import { useData } from 'vitepress'

const { locales } = useData().site.value
</script>

<div class="flex flex-col items-center justify-center w-full h-vh gap-10">
  <div class="flex flex-col items-center justify-center gap-4">
    <h1 class="text-5xl" lang="zh-CN">管宁川</h1>
    <h1 class="text-5xl" lang="en-US">John Guan</h1>
  </div>
  <div class="flex flex-col items-center justify-center gap-4 *:transition-all hover:*:text-blue-500 *:duration-500 font-serif  hover:*:scale-110 hover:*:before:content-['-_'] hover:*:after:content-['_-']">
    <a class="text-2xl" lang="zh-CN" href="/zh/">中文</a>
    <a class="text-2xl" lang="en-US" href="/en/">English</a>
  </div>
</div>
