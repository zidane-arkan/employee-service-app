# 1. Jelaskan apa itu normalisasi database dan berikan contoh tabel sebelum dan sesudah dinormalisasi
# Normalisasi Database – Kasus: Aplikasi ESS (Employee Self Service)

## Apa itu Normalisasi Database?

Normalisasi adalah proses menyusun struktur tabel dalam database agar data tidak duplikat, lebih rapi, dan mudah dikelola. Dalam konteks aplikasi ESS (Employee Self Service), normalisasi membantu memisahkan data karyawan, jabatan, dan divisi agar lebih fleksibel dan konsisten.

Terdapat 3 Tahap yang sering digunakan yaitu :
* **1NF (First Normal Form):** Aturan pertama adalah memastikan setiap kolom di tabel hanya berisi **satu nilai tunggal**. Tidak boleh ada daftar nilai atau data berulang dalam satu sel. Diibiratkan, setiap "kotak" di tabel cuma boleh diisi satu informasi.
* **2NF (Second Normal Form):** Setelah memenuhi 1NF, pastikan semua kolom yang bukan kunci utama **sepenuhnya bergantung** pada seluruh kunci utama tabel. Kalau ada kolom yang cuma bergantung pada sebagian dari kunci utama (terutama pada kunci komposit), kolom itu harus dipisahkan ke tabel baru.
* **3NF (Third Normal Form):** Ini tahap lanjutan dari 2NF. Di sini, kita pastikan enggak ada kolom non-kunci yang **bergantung pada kolom non-kunci lainnya**. Artinya, semua informasi di tabel harus langsung berkaitan dengan kunci utamanya, bukan melalui perantara kolom lain.

---

## Contoh Tabel Sebelum Normalisasi

Contoh Tabel Awal sebagai berikut:

| ID_Karyawan | Nama_Karyawan  | Divisi     | Jabatan        | Gaji      |
|-------------|----------------|------------|----------------|---------- |
| 1           | Mei            | IT         | Frontend Dev   | 7.000.000 |
| 2           | Jupei          | IT         | Backend Dev    | 7.500.000 |
| 3           | Vira           | HRD        | HR Specialist  | 6.000.000 |
| 4           | Nano           | IT         | Frontend Dev   | 7.000.000 |

> **Masalah:**
- Nama divisi dan jabatan sering diulang
- Gaji untuk jabatan yg sama juga diulang
- Susah dikelola jika ada perubahan jabatan atau gaji

---

## Contoh Setelah Normalisasi (hingga 3NF)

### 1️⃣ Tabel `Karyawan`

| ID_Karyawan | Nama_Karyawan | ID_Divisi | ID_Jabatan |
|-------------|----------------|-----------|-------------|
| 1           | Andi           | 1         | 1           |
| 2           | Budi           | 1         | 2           |
| 3           | Sari           | 2         | 3           |
| 4           | Rina           | 1         | 1           |

---

### 2️⃣ Tabel `Divisi`

| ID_Divisi | Nama_Divisi |
|-----------|--------------|
| 1         | IT           |
| 2         | HRD          |

---

### 3️⃣ Tabel `Jabatan`

| ID_Jabatan | Nama_Jabatan   | Gaji      |
|------------|----------------|-----------|
| 1          | Frontend Dev   | 7.000.000 |
| 2          | Backend Dev    | 7.500.000 |
| 3          | HR Specialist  | 6.000.000 |

---

## Keuntungan Normalisasi:
- Data lebih konsisten (tidak duplikat)
- Gaji cukup diubah di tabel jabatan, tidak di banyak baris
- Struktur rapi dan siap untuk dikembangkan ke sistem ESS

---


# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).