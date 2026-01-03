# 第 1 週：CSS 入門與基礎語法
## 踏入網頁樣式設計的世界

**課程目標：** 理解 CSS 的作用和基本語法結構  
**時數：** 3 小時  
**適用對象：** 大一初學者  
**最後更新：** 2025 年 9 月 7 日

---

## 🎯 本週學習目標

### 主要目標
1. **理解 CSS 概念**：了解 CSS 的作用和重要性
2. **掌握基本語法**：學會 CSS 的基本語法結構
3. **學會引入方式**：掌握三種 CSS 引入方法
4. **建立良好習慣**：學習 CSS 編寫的最佳實踐

### 具體成果
- 能夠解釋 CSS 的作用和工作原理
- 能夠撰寫基本的 CSS 規則
- 能夠選擇合適的 CSS 引入方式
- 建立良好的程式碼撰寫習慣

---

## 📚 理論知識

### 1.1 什麼是 CSS？

**CSS（Cascading Style Sheets）** 是一種樣式表語言，用於描述 HTML 文件的外觀和格式。

#### CSS 的作用
```
HTML = 網頁的結構和內容 （Document Object Model）
CSS = 網頁的外觀和樣式
JavaScript = 網頁的行為和互動
```

#### 為什麼需要 CSS？
1. **分離關注點**：將內容與樣式分離
2. **提高效率**：一個 CSS 檔案可以控制多個網頁
3. **易於維護**：集中管理網站的視覺風格
4. **增強體驗**：創造美觀且一致的使用者介面

### 1.2 CSS 的歷史與發展

```timeline
1994年：Håkon Wium Lie 提出 CSS 概念
1996年：CSS1 正式發布
1998年：CSS2 發布，增加定位和媒體類型
2001年：CSS3 開始開發（模組化設計）
2011年：CSS3 主要模組完成
現在：CSS4 部分功能已實現
```

### 1.3 CSS 語法結構

#### 基本語法
```css
選擇器(Selector) {
    屬性名(color): 屬性值(blue);
    屬性名: 屬性值;
}
```

#### 語法組成部分
1. **選擇器（Selector）**：指定要套用樣式的 HTML 元素
2. **宣告區塊（Declaration Block）**：用大括號 `{}` 包圍
3. **屬性（Property）**：要改變的樣式特性
4. **屬性值（Value）**：屬性的具體設定
5. **分號（;）**：分隔不同的屬性宣告

#### 範例解析
```css
h1 {
    color: blue;
    font-size: 24px;
    text-align: center;
}
```

**解析：**
- `h1`：選擇器，選擇所有 h1 元素
- `color: blue;`：設定文字顏色為藍色
- `font-size: 24px;`：設定字體大小為 24 像素
- `text-align: center;`：設定文字置中對齊

---

## 💻 實作教學

### 2.1 CSS 引入方式

#### 方式一：內聯樣式（Inline Styles）
直接在 HTML 元素的 `style` 屬性中撰寫 CSS。

```html
<!DOCTYPE html>
<html>
<head>
    <title>內聯樣式範例</title>
</head>
<body>
    <h1 style="color: red; font-size: 28px;">這是紅色標題</h1>
    <p style="color: blue; font-family: Arial;">這是藍色段落</p>
</body>
</html>
```

**優點：**
- 優先級最高
- 適合快速測試

**缺點：**

- 難以維護
- 無法重複使用
- 違反分離原則

#### 方式二：內部樣式表（Internal Stylesheet）
在 HTML 文件的 `<head>` 區域使用 `<style>` 標籤。

```html
<!DOCTYPE html>
<html>
<head>
    <title>內部樣式表範例</title>
    <style>
        h1 {
            color: green;
            font-size: 32px;
            text-align: center;
        }
        
        p {
            color: #333;
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
        }
        
        .highlight {
            background-color: yellow;
            padding: 10px;
        }
    </style>
</head>
<body>
    <h1>歡迎來到我的網站</h1>
    <p>這是一個段落文字。</p>
    <p class="highlight">這是一個高亮顯示的段落。</p>
</body>
</html>
```

**優點：**
- 樣式集中在一個檔案中
- 可以使用選擇器
- 適合單頁面應用

**缺點：**
- 無法在多個頁面間共享
- 增加 HTML 檔案大小

#### 方式三：外部樣式表（External Stylesheet）
將 CSS 寫在獨立的 `.css` 檔案中，然後在 HTML 中引入。

**styles.css**
```css
/* 這是 CSS 註解 */
body {
    font-family: 'Helvetica', Arial, sans-serif;
    margin: 0;
    padding: 20px;
    background-color: #f5f5f5;
}

h1 {
    color: #2c3e50;
    font-size: 36px;
    text-align: center;
    margin-bottom: 30px;
}

p {
    color: #34495e;
    font-size: 16px;
    line-height: 1.8;
    margin-bottom: 15px;
}

.container {
    max-width: 800px;
    margin: 0 auto;
    background-color: white;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}
```

**index.html**
```html
<!DOCTYPE html>
<html>
<head>
    <title>外部樣式表範例</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>我的部落格</h1>
        <p>歡迎來到我的個人部落格，這裡分享我的學習心得和生活感悟。</p>
        <p>透過 CSS，我們可以讓網頁變得更加美觀和專業。</p>
    </div>
</body>
</html>
```

**優點：**
- 可以在多個頁面間共享
- 便於維護和更新
- 減少 HTML 檔案大小
- 瀏覽器可以快取 CSS 檔案

**缺點：**
- 需要額外的 HTTP 請求
- 可能出現載入延遲

### 2.2 CSS 註解

CSS 註解用於解釋程式碼，不會影響樣式效果。

```css
/* 這是單行註解 */

/*
這是多行註解
可以寫很多行
用於詳細說明
*/

/* ===================
   網站主要樣式
   =================== */
body {
    font-family: Arial, sans-serif; /* 設定字體 */
    margin: 0; /* 移除預設邊距 */
}

/* 標題樣式 */
h1, h2, h3 {
    color: #333;
}
```

### 2.3 CSS 最佳實踐

#### 程式碼組織
```css
/* 1. 重置樣式 */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* 2. 基礎樣式 */
body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
}

/* 3. 佈局樣式 */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* 4. 組件樣式 */
.button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 4px;
}

/* 5. 工具類別 */
.text-center {
    text-align: center;
}

.hidden {
    display: none;
}
```

#### 命名規範
```css
/* 使用有意義的類別名稱 */
.navigation-menu { }     /* 好 */
.nav { }                 /* 可以 */
.n { }                   /* 不好 */

/* 使用連字符分隔單字 */
.main-content { }        /* 好 */
.mainContent { }         /* 不推薦 */
.main_content { }        /* 不推薦 */

/* 避免使用過於具體的名稱 */
.red-button { }          /* 不好 - 顏色可能會改變 */
.primary-button { }      /* 好 - 語義化命名 */
```

---

## 🎨 實作練習

### 練習 1：基礎樣式設定（15 分鐘）

**目標：** 練習基本的 CSS 語法和屬性

**HTML 結構：**
```html
<!DOCTYPE html>
<html>
<head>
    <title>CSS 基礎練習</title>
    <style>
        /* 在這裡撰寫 CSS */
    </style>
</head>
<body>
    <h1>我的第一個 CSS 頁面</h1>
    <h2>關於我</h2>
    <p>我是一名正在學習 CSS 的學生。</p>
    <p>我希望能夠創建美觀的網頁。</p>
    <h2>我的興趣</h2>
    <p>我喜歡程式設計、設計和音樂。</p>
</body>
</html>
```

**任務：**
1. 將 h1 標題設為藍色，字體大小 32px
2. 將 h2 標題設為綠色，字體大小 24px
3. 將段落文字設為深灰色（#333），字體大小 16px
4. 為整個頁面設定字體為 Arial
5. 為頁面添加 20px 的內邊距

**參考答案：**
```css
body {
    font-family: Arial, sans-serif;
    padding: 20px;
}

h1 {
    color: blue;
    font-size: 32px;
}

h2 {
    color: green;
    font-size: 24px;
}

p {
    color: #333;
    font-size: 16px;
}
```

### 練習 2：外部樣式表實作（20 分鐘）

**目標：** 練習使用外部樣式表

**步驟：**
1. 建立 `index.html` 檔案
2. 建立 `style.css` 檔案
3. 在 HTML 中引入 CSS 檔案
4. 設計一個簡單的個人介紹頁面

**HTML 結構（index.html）：**
```html
<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>個人介紹</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>張小明</h1>
        <p>網頁設計學習者</p>
    </header>
    
    <main>
        <section class="about">
            <h2>關於我</h2>
            <p>我是一名資訊工程系的學生，對網頁設計充滿熱情。</p>
        </section>
        
        <section class="skills">
            <h2>技能</h2>
            <ul>
                <li>HTML</li>
                <li>CSS（學習中）</li>
                <li>JavaScript（計劃學習）</li>
            </ul>
        </section>
        
        <section class="contact">
            <h2>聯絡方式</h2>
            <p>Email: zhang@example.com</p>
        </section>
    </main>
</body>
</html>
```

**CSS 樣式（style.css）：**
```css
/* 重置預設樣式 */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* 基礎樣式 */
body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #f4f4f4;
    padding: 20px;
}

/* 標題樣式 */
header {
    text-align: center;
    background-color: #2c3e50;
    color: white;
    padding: 40px 20px;
    margin-bottom: 30px;
    border-radius: 8px;
}

header h1 {
    font-size: 36px;
    margin-bottom: 10px;
}

header p {
    font-size: 18px;
    opacity: 0.9;
}

/* 主要內容 */
main {
    max-width: 800px;
    margin: 0 auto;
}

section {
    background-color: white;
    padding: 30px;
    margin-bottom: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

h2 {
    color: #2c3e50;
    font-size: 24px;
    margin-bottom: 15px;
    border-bottom: 2px solid #3498db;
    padding-bottom: 5px;
}

p {
    font-size: 16px;
    margin-bottom: 15px;
}

/* 列表樣式 */
ul {
    list-style-type: none;
}

li {
    background-color: #ecf0f1;
    padding: 10px 15px;
    margin-bottom: 8px;
    border-left: 4px solid #3498db;
    border-radius: 4px;
}

/* 聯絡區塊特殊樣式 */
.contact {
    background-color: #3498db;
    color: white;
}

.contact h2 {
    color: white;
    border-bottom-color: white;
}
```

### 練習 3：樣式優先級實驗（10 分鐘）

**目標：** 理解不同引入方式的優先級

**HTML：**
```html
<!DOCTYPE html>
<html>
<head>
    <title>優先級測試</title>
    <style>
        p {
            color: green !important;
            font-size: 18px;
        }
    </style>
    <link rel="stylesheet" href="external.css">
</head>
<body>
    <p style="color: red; font-size: 20px;">
        這段文字會是什麼顏色和大小？
    </p>
</body>
</html>
```

**external.css：**
```css
p {
    color: blue;
    font-size: 16px;
    font-weight: bold;
}
```

**思考問題：**
1. 文字會是什麼顏色？為什麼？
2. 文字會是什麼大小？為什麼？
3. 文字會是粗體嗎？為什麼？

**答案解析：**
- 顏色：綠色（內部樣式的 `!important` 優先級最高）
- 大小：20px（內聯樣式優先級高於內部樣式）
- 粗體：是（外部樣式的 `font-weight` 沒有被覆蓋）

---

## 🔧 開發工具介紹

### VS Code 設定

#### 推薦擴充套件
1. **Live Server**：即時預覽網頁
2. **CSS Peek**：快速查看 CSS 定義
3. **Auto Rename Tag**：自動重新命名標籤
4. **Prettier**：程式碼格式化

#### 實用快捷鍵
- `Ctrl + /`：註解/取消註解
- `Alt + Shift + F`：格式化程式碼
- `Ctrl + D`：選擇相同文字
- `Ctrl + Shift + L`：選擇所有相同文字

### 瀏覽器開發者工具

#### Chrome DevTools 基礎
1. **開啟方式**：F12 或右鍵 → 檢查
2. **Elements 面板**：查看和編輯 HTML/CSS
3. **Styles 面板**：查看套用的樣式
4. **Computed 面板**：查看計算後的樣式值

#### 實用技巧
```css
/* 在 DevTools 中測試樣式 */
.test-element {
    /* 可以直接在這裡編輯和測試 */
    color: red;
    font-size: 20px;
}
```

---

## 📝 作業與評估

### 本週作業：個人介紹頁面

**要求：**
1. 建立一個個人介紹網頁
2. 使用外部樣式表
3. 包含以下內容：
   - 個人基本資訊
   - 學習目標
   - 興趣愛好
   - 聯絡方式

**技術要求：**
- 使用至少 5 種不同的 CSS 屬性
- 包含適當的註解
- 程式碼格式整齊
- 檔案結構清晰

**評分標準：**
- 技術正確性（40%）
- 程式碼品質（30%）
- 視覺設計（20%）
- 創意表現（10%）

### 自我檢核清單

- [ ] 我能解釋 CSS 的作用和重要性
- [ ] 我知道三種 CSS 引入方式的差異
- [ ] 我能撰寫基本的 CSS 規則
- [ ] 我了解 CSS 註解的寫法
- [ ] 我能使用瀏覽器開發者工具查看樣式
- [ ] 我建立了良好的程式碼撰寫習慣

---

## 🎯 下週預告

### 第 2 週：選擇器深入學習

**學習重點：**
- 各種 CSS 選擇器類型
- 選擇器組合和優先級
- 屬性選擇器和偽類
- 選擇器效能考量

**預習建議：**
- 複習 HTML 元素結構
- 了解 class 和 id 的差異
- 思考如何精確選擇特定元素

---

## 📚 延伸學習資源

### 線上資源
- [MDN CSS 基礎](https://developer.mozilla.org/zh-TW/docs/Learn/CSS/First_steps)
- [CSS-Tricks](https://css-tricks.com/)
- [W3Schools CSS 教學](https://www.w3schools.com/css/)

### 實用工具
- [CSS Validator](https://jigsaw.w3.org/css-validator/)
- [Can I Use](https://caniuse.com/)
- [CSS Reference](https://cssreference.io/)

### 練習平台
- [Codepen](https://codepen.io/)
- [JSFiddle](https://jsfiddle.net/)
- [CSS Diner](https://flukeout.github.io/)

---

**講義製作：** 高級網頁設計師  
**最後更新：** 2025 年 9 月 7 日

