# 🚀 My Vue Boilerplate

Boilerplate Vue 3 + TypeScript + Vue Router + Pinia yang siap dipakai untuk production.

Dirancang dengan pendekatan modular dan scalable, cocok buat project kecil sampai enterprise.

---

## ✨ Features

* ⚡ Vue 3 + Composition API
* 🧠 TypeScript ready
* 🗂️ Modular router (auth & admin)
* 🔐 Auth guard (login protection)
* 🧩 Pinia store
* 🎨 Tailwind CSS
* 📄 404 Not Found page
* 🧹 Clean `.gitignore` (macOS friendly)

---

## 📁 Project Structure
```
src/
├── pages/
│   ├── auth/
│   ├── dashboard/
│   └── users/
├── layouts/
├── router/
│   ├── index.ts
│   └── modules/
│       ├── auth.ts
│       └── admin.ts
├── stores/
├── components/
└── assets/
```
---

## ⚙️ Installation

```bash
git clone https://github.com/your-username/my-vue-boilerplate.git
cd my-vue-boilerplate
npm install
```

---

## 🚀 Development

```bash
npm run dev
```

---

## 📦 Build

```bash
npm run build
```

---

## 🔐 Authentication Flow

* Route dengan `meta.requiresAuth` butuh login
* Route dengan `meta.guestOnly` hanya untuk guest
* Redirect otomatis ke login jika belum auth
* Redirect balik ke halaman tujuan setelah login

---

## 🧠 Best Practices

* Pisahkan route per module (auth, admin, dll)
* Gunakan store untuk state global
* Gunakan lazy loading untuk page
* Jangan hardcode path, gunakan route name

---

## 🔥 Future Improvements

* Role Based Access Control (RBAC)
* Dynamic sidebar dari router
* Breadcrumb otomatis
* Refresh token & auto logout

---

## 📄 License

This project is licensed under the MIT License.

---

# 📜 MIT License

Copyright (c) 2026 Angga Purnama

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
