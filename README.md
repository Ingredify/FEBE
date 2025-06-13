# 🍽️ Capstone Project - FEBE

---

## 🚀 Front-End Setup (Vite + React)

1. Pindah ke folder **Ingredify-Front-End**

    ```bash
    cd ./Ingredify-Front-End
    ```

2. Install dependencies

    ```bash
    npm install
    ```

3. Jalankan aplikasi

    ```bash
    npm run dev
    ```

4. Buka browser dan akses aplikasi di:

    ```
    http://localhost:5173
    ```

---

## 🛠️ Back-End Setup (Hapi.js + Prisma)

### ▶️ Jalankan Secara Lokal (Tanpa Docker)

1. Pindah ke folder **Ingredify-Back-End**

    ```bash
    cd ./Ingredify-Back-End
    ```

2. Install dependencies

    ```bash
    npm install
    ```

3. Ubah nama file `.env.example` menjadi `.env` dan sesuaikan konfigurasi seperti port, database, dll.

4. Jika perlu testing lokal: ubah host pada file `src/server.js` menjadi `localhost`

5. Jalankan aplikasi

    ```bash
    npm run dev
    ```

---

### 🐳 Jalankan dengan Docker

1. Masuk ke folder **Ingredify-Back-End**

    ```bash
    cd ./Ingredify-Back-End
    ```

2. Ubah nama file `.env.example` menjadi `.env`, dan sesuaikan variabel berikut:

    ```env
    PORT=3000
    DATABASE_URL=your_prisma_or_postgres_url
    MODEL_URL=your_model_api_url
    CLOUD_STORAGE_URL=your_cloud_storage_url
    JWT_SECRET=your_jwt_secret
    ```

3. Build Docker image

    ```bash
    docker build -t ingredify-backend .
    ```

4. Jalankan container

    ```bash
    docker run -p 3000:3000 --env-file .env ingredify-backend
    ```

> ✅ **Note:**
> - Tidak perlu mengubah host di `src/server.js` saat menggunakan Docker (`0.0.0.0` disengaja agar bisa diakses di luar container).
> - Pastikan `.env` berada di direktori yang sama dengan `Dockerfile`.
