---
title: 使用工具
description: 吳彥東目前常用的程式語言、框架、工具鏈與工程偏好。
outline: [2, 3]
---

# 使用工具 <Badge type="info" text="Uses" />

<div class="lead-panel">
  <h2>我的日常技術棧</h2>
  <p>這頁整理目前工作與個人專案中常用的語言、框架、工具與選型方式，方便快速理解我的開發習慣。</p>
</div>

[[toc]]

## 後端

<div class="skill-grid">
  <div class="skill-card">
    <strong>Go</strong>
    <span>目前主力後端語言，用於 ERP Web 化、RESTful API、資料處理與系統整合。</span>
  </div>
  <div class="skill-card">
    <strong>Echo</strong>
    <span>Go Web 框架，適合快速建立 API、中介層與後端服務。</span>
  </div>
  <div class="skill-card">
    <strong>XORM</strong>
    <span>ORM 工具，用於資料表映射、查詢封裝與維護資料存取層。</span>
  </div>
  <div class="skill-card">
    <strong>Delphi 2009</strong>
    <span>維護既有桌面系統，也作為新舊系統行為對齊的重要參考。</span>
  </div>
</div>

## 前端

<div class="skill-grid">
  <div class="skill-card">
    <strong>Vue 3</strong>
    <span>目前主力前端框架，偏好 Composition API，適合後台系統與模組化 UI。</span>
  </div>
  <div class="skill-card">
    <strong>Vite</strong>
    <span>前端建置工具，負責快速開發、熱更新與專案打包。</span>
  </div>
  <div class="skill-card">
    <strong>PrimeVue</strong>
    <span>後台系統常用 UI 元件庫，適合資料表、表單、彈窗與操作型介面。</span>
  </div>
  <div class="skill-card">
    <strong>TailwindCSS / MasterCSS</strong>
    <span>用於快速建立一致的版面、間距與響應式樣式。</span>
  </div>
</div>

## 內容與網站

| 工具 | 用途 | 備註 |
|------|------|------|
| VitePress | 個人網站與文件頁面 | 目前本站使用的 SSG |
| theojs/lumen | VitePress 主題擴充 | 保留既有風格與 GA 設定 |
| giscus | 留言系統 | 以 GitHub Discussions 作為留言來源 |
| GitHub Pages | 靜態網站部署 | 適合個人網站與文件 |

## 專案選型偏好

::: code-group

```txt [後端]
Go
Echo
XORM
RESTful API
```

```txt [前端]
Vue 3
Vite
PrimeVue
TailwindCSS
MasterCSS
```

```txt [維護]
Delphi 2009
Windows desktop
Legacy ERP
Incremental migration
```

:::

## 工作流

1. 先理解既有系統資料流與使用者操作流程。
2. 將可拆分的功能轉成 API 與前端頁面。
3. 保留可對照的舊系統行為，降低重構過程的風險。
4. 逐步整理共用元件、資料存取層與文件。

::: warning 注意
我目前的重點不是一次性重寫所有系統，而是讓既有 Delphi 系統能穩定維護，同時把適合 Web 化的功能逐步搬到 Go + Vue 架構。
:::

## 相關頁面

- [技術能力](/skills)
- [職涯歷程](/career)
- [專案作品](/projects)
