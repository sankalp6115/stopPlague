# 🛡️ stopPlague.js

> A lightweight JavaScript utility to protect your website from basic content theft actions like right-click, inspect element, keyboard shortcuts, and more.

---

## 📦 What is stopPlague?

**stopPlague.js** is a simple, plug-and-play JavaScript package that deters casual users from stealing your website’s content. It disables common developer tools shortcuts, right-click context menus, and other snooping behaviors — all while remaining easy to include via CDN or self-hosting.

While not foolproof against skilled attackers, it serves as an effective deterrent for general users.

---

## 🚀 Features

- ❌ Disable Right Click
- ⌨️ Block `F12`, `Ctrl+Shift+I`, `Ctrl+U`, etc.
- 📦 CDN-friendly, versioned, and modular
- ⚙️ Easy to include on any website

---

## 🌐 Quick Start (via jsDelivr CDN)

Add this to any webpage:

```html
<script type="module">
  import { stopPlague } from 'https://cdn.jsdelivr.net/gh/sankalp6115/stopPlague@v1.0.0/stopPlague.js';
  stopPlague();
</script>
```
## 🧠 How It Works

The script listens for certain browser actions (like right-clicks or dev tools key combos) and prevents them from working. It does not interfere with website functionality or styling.

## ⚠️ Disclaimer
This script only deters casual users. Advanced users with developer knowledge can still inspect and bypass the protection. For strong protection, use this in combination with server-side security, watermarking, and content licenses.

## 🤝 Contributions
Pull requests, feature suggestions, and issue reports are welcome!

# 📜 License
MIT License

#### Made with ❤️ by Sankalp
