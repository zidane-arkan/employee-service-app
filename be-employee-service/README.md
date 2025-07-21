# 🛠️ Backend – `be-employee-service`

## ⚙️ Spesifikasi

* **Framework**: Strapi v5.18.1
* **Database**: PostgreSQL
* **Autentikasi**: JWT (Users & Permissions plugin)
* **Seed Data**: Ya
* **Struktur Tabel**: Sudah dinormalisasi

## 📂 Struktur Database Hasil Normalisasi

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

* `employee`
* `division`
* `position`

Relasi: Employee memiliki foreign key ke division dan position.

## 🔧 Cara Menjalankan Backend

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

## 📂 Ekspor File SQL (Opsional)

Hasil normalisasi dalam bentuk file SQL:

```bash
pg_dump -U your_postgres_user -d employee-service-db -f db_employee_service.sql
```


# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project including [Strapi Cloud](https://cloud.strapi.io). Browse the [deployment section of the documentation](https://docs.strapi.io/dev-docs/deployment) to find the best solution for your use case.

```
yarn strapi deploy
```

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>
