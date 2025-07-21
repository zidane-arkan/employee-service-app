# 💻 Frontend – `fe-employee-service`

## ⚙️ Spesifikasi

* **Framework**: Vue 3 + Vite
* **Styling**: Tailwind CSS
* **Charting**: Chart.js + vue-chartjs
* **Routing**: Vue Router
* **Auth**: JWT (localStorage)

## 🗓️ Cara Menjalankan Frontend

1. Masuk ke folder:

```bash
cd fe-employee-service
```

2. Install dependencies:

```bash
npm install
```

3. Jalankan project:

```bash
npm run dev
```

> Aplikasi tersedia di `http://localhost:5173`

## 🔐 Autentikasi JWT

* Login menyimpan token JWT di `localStorage`
* Header `Authorization: Bearer <token>` digunakan untuk akses API
* Middleware router mencegah akses `/admin` tanpa token

Contoh konfigurasi axios:

```js
import axios from "axios";

const API = "http://localhost:1337/api";

const authHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
  },
});

export const getCurrentUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export const updateUser = async (id, userData) => {
  const res = await axios.put(`${API}/users/${id}`, userData, authHeader());
  localStorage.setItem("user", JSON.stringify(res.data));
  return res.data.data;
};
```

## 📊 Dashboard Visualisasi

Tampilan `/admin` setelah login menampilkan:

* Chart karyawan per divisi
* Chart distribusi posisi
* Rata-rata gaji per divisi
* Perbandingan gaji antar posisi

Data diambil dari Strapi melalui endpoint.

## 🗜️ Struktur Routing (Vue Router)

```
/admin
├── employee/
├── division/
├── position/
└── account
```

Routing diamankan dengan `beforeEach()` di router config untuk mengecek token JWT.


# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).
