# 1. Jelaskan apa itu normalisasi database dan berikan contoh tabel sebelum dan sesudah dinormalisasi

## Apa itu Normalisasi Database?

### Kasus: Aplikasi ESS (Employee Self Service)

Normalisasi adalah merupakan sebuah proses menyusun struktur tabel dalam database agar data tidak duplikat, lebh rapi, dan mudah dikelola. Dalam konteks aplikasi ESS (Employee Self Service), normalisasi membantu memisahkan data karyawan, jabatan, dan divisi agar lebih fleksibel dan konsisten.

---

## Contoh Tabel Sebelum Normalisasi

Contoh Tabel Awal sebagai berikut:

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

> **Masalah:**

- Nama divisi dan jabatan sering diulang
- Gaji untuk jabatan yg sama juga diulang
- Sulit dikelola jika ada perubahan jabatan atau gaji

---

## Contoh Setelah Normalisasi (hingga 3NF)

### 1️⃣ Tabel `Employee`

| ID  | Name   | ID_Div | ID_Position |
| --- | ------ | ------ | ----------- |
| 1   | Mei    | 1      | 1           |
| 2   | Jupei  | 1      | 2           |
| 3   | Vira   | 2      | 4           |
| 4   | Nano   | 1      | 3           |
| 5   | Mais   | 3      | 5           |
| 6   | Pumkin | 4      | 6           |
| 7   | Soi    | 1      | 1           |
| 8   | Horik  | 1      | 2           |
| 9   | Vani   | 3      | 5           |
| 10  | Satya  | 1      | 2           |

---

### 2️⃣ Tabel `Division`

| ID  | Name |
| --- | ---- |
| 1   | IT   |
| 2   | HRD  |
| 3   | R&D  |
| 4   | CS   |

---

### 3️⃣ Tabel `Position`

| ID  | Name           | Salary  |
| --- | -------------- | ------- |
| 1   | Frontend Dev   | 7000000 |
| 2   | Backend Dev    | 8500000 |
| 3   | DevOps         | 6500000 |
| 4   | HR Specialist  | 6000000 |
| 5   | R&D Staff      | 5500000 |
| 6   | Product Expert | 7500000 |

---

## Keuntungan Normalisasi:

- Data lebih konsisten (tidak duplikat)
- Gaji cukup diubah di tabel jabatan, tidak di banyak baris

---

# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).
