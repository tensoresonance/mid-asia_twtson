中亞雙人旅行網站
繁體中文介面的雙人行程站。用 GitHub + Netlify + Decap CMS，女朋友可在 `/admin` 用 Google／電郵登入改資料，不必會 Git。
本機預覽
用瀏覽器直接打開 `index.html`，或任意靜態伺服器：
```bash
npx serve .
```
上線步驟（摘要）
把整個資料夾推上 GitHub repo（例如 `mid-asia-trip`）
Netlify → Import from Git → 選該 repo → Publish directory 用根目錄
Netlify Identity → Enable → Invite only → 啟用 Git Gateway
（可選）Identity → External providers → Google
打開 `https://你的網址/admin` 編輯
頁面
檔案	說明
`index.html`	首頁＋依今天日期顯示行程
`flights.html`	航班
`hotels.html`	酒店＋嵌入 Google 地圖
`stays.html`	停留晚數／轉機小時
`places.html`	景點與清單連結
`emergency.html`	緊急聯絡（港／加）
`admin/`	Decap CMS 後台
注意
不要把護照、完整證件號放進公開 repo
緊急電話出發前再向官方網站核對
