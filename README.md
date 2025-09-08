# employee-service-app

# 🧑‍💼 Employee Service App

Aplikasi Employee Self Service berbasis web untuk mengelola data karyawan, divisi, dan posisi dengan sistem autentikasi JWT serta visualisasi data interaktif.

---

## 🛠️ Backend – `be-employee-service`

### ⚙️ Spesifikasi

- **Framework**: Strapi v5.18.1
- **Database**: PostgreSQL
- **Autentikasi**: JWT (Users & Permissions plugin)
- **Seed Data**: Ya
- **Struktur Tabel**: Sudah dinormalisasi

### 📂 Struktur Database Hasil Normalisasi

**Sebelum Dinormalisasi (Tabel Tunggal):**

| ID_Karyawan | Nama_Karyawan | Division | Position       | Salary  |
| ----------- | ------------- | -------- | -------------- | ------- |
| 1           | Mei           | IT       | Frontend Dev   | 7000000 |
| 2           | Jupei         | IT       | Backend Dev    | 8500000 |
| 3           | Vira          | HRD      | HR Specialist  | 6000000 |
| 4           | Nano          | IT       | DevOps         | 6500000 |
| 5           | Mais          | R&D      | R&D Staff      | 5500000 |
| 6           | Pumkin        | CS       | Product Expert | 7500000 |
| 7           | Soi           | IT       | Frontend Dev   | 7000000 |
| 8           | Horik         | IT       | Backend Dev    | 8500000 |
| 9           | Vani          | R&D      | R&D Staff      | 5500000 |
| 10          | Satya         | IT       | Backend Dev    | 8500000 |

**Setelah Dinormalisasi (3 Tabel):**

- `employee`
- `division`
- `position`

Relasi: Employee memiliki foreign key ke division dan position.

### 🛠️ Cara Menjalankan Backend

1. Masuk ke folder:

```bash
cd be-employee-service
```

2. Install dependencies:

```bash
npm install
```

3. Buat file `.env` dari `.env.example`:

```bash
cp .env.example .env
```

4. Edit file `.env` dan isi:

```env
DATABASE_CLIENT=postgres
DATABASE_HOST=127.0.0.1
DATABASE_PORT=5432
DATABASE_NAME=employee-service-db
DATABASE_USERNAME=your_postgres_user
DATABASE_PASSWORD=your_postgres_password
DATABASE_SSL=false
JWT_SECRET=your_secret_key
```

5. Jalankan Strapi:

```bash
npm run develop
```

> Strapi akan berjalan di `http://localhost:1337/admin`

### 📂 Ekspor File SQL
#### File ada didalam folder db
hasil normalisasi :

```bash
pg_dump -U your_postgres_user -d employee-service-db -f db_employee_service.sql
```

---

## 💻 Frontend – `fe-employee-service`

### ⚙️ Spesifikasi

- **Framework**: Vue 3 + Vite
- **Styling**: Tailwind CSS
- **Charting**: Chart.js + vue-chartjs
- **Routing**: Vue Router
- **Auth**: JWT (localStorage)

### 📆 Cara Menjalankan Frontend

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

### 🔐 Autentikasi JWT

- Login menyimpan token JWT di `localStorage`
- Header `Authorization: Bearer <token>` digunakan untuk akses API
- Middleware router mencegah akses `/admin` tanpa token

### 📊 Dashboard Visualisasi

Tampilan `/admin` setelah login menampilkan:

- Chart karyawan per divisi
- Chart distribusi posisi
- Rata-rata gaji per divisi
- Perbandingan gaji antar posisi

Data diambil dari Strapi melalui endpoint.

### 📅 Struktur Routing (Vue Router)

```
/admin
├── employees/
├── divisions/
├── positions/
└── account
```

---

## ✅ Checklist Fitur

- [x] Database dinormalisasi
- [x] Backend menggunakan Strapi + PostgreSQL
- [x] Autentikasi JWT
- [x] CRUD untuk Employee, Division, Position
- [x] Frontend menggunakan Vue 3 + Vite
- [x] Visualisasi data dengan Chart.js

---

## 👤 Author

**Muhammad Zidane Arkan**
GitHub: [github.com/zidane-arkan](https://github.com/zidane-arkan)
Email: [zidark897@gmail.com](mailto:zidark897@gmail.com)
