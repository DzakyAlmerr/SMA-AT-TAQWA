# Smart School Portal

Sistem manajemen portal sekolah terintegrasi dengan backend Express.js dan database PostgreSQL. Proyek ini merupakan migrasi dari sistem Google Apps Script ke infrastruktur yang lebih modern, cepat, dan aman.

## Fitur Utama

* **Sistem Otentikasi (JWT)**: Login aman dengan pembatasan hak akses berbasis peran (Admin, Guru, Siswa).
* **Portal Siswa**: Melihat materi pelajaran, jadwal kelas, dan mengerjakan kuis dengan sistem penilaian otomatis.
* **Portal Guru**: Membuat kuis interaktif, mengelola kelas, dan mengunggah materi pelajaran.
* **Portal Admin**: Manajemen pengguna (Siswa, Guru), jadwal, dan pembuatan laporan terpusat.

## Prasyarat (Requirements)

Sebelum menjalankan aplikasi ini, pastikan sistem Anda telah memiliki perangkat lunak berikut:
1. **Node.js** (versi 18.x atau lebih baru)
2. **PostgreSQL** (versi 13.x atau lebih baru)
3. Koneksi internet (untuk mengunduh *library* NPM dan aset CDN eksternal).

## Cara Instalasi & Menjalankan Aplikasi

1. **Install Dependencies**  
   Buka terminal/Command Prompt di folder proyek ini, lalu jalankan perintah:
   ```bash
   npm install
   ```

2. **Konfigurasi Database**  
   Pastikan PostgreSQL sudah berjalan. Buka file `.env` di *root* direktori proyek dan sesuaikan `DATABASE_URL` dengan kredensial PostgreSQL Anda.  
   Contoh format:
   ```
   DATABASE_URL=postgresql://postgres:password@localhost:5432/smart_school
   ```

3. **Inisialisasi Database**  
   Buat skema tabel dan masukkan data dummy awal dengan menjalankan:
   ```bash
   npm run db:init
   npm run db:seed
   ```

4. **Jalankan Server Lokal**  
   Gunakan perintah berikut untuk memulai server pada lingkungan pengembangan (mendukung fitur *auto-restart* jika ada perubahan file):
   ```bash
   npm run dev
   ```
   Atau jika ingin menjalankan dalam mode produksi:
   ```bash
   npm start
   ```

5. **Akses Aplikasi**  
   Buka *web browser* Anda (disarankan Google Chrome atau Microsoft Edge) dan akses URL:
   ```
   http://localhost:3000
   ```

## Kredensial Login Pengujian (Testing)

Proses *seeding* database secara otomatis membuat beberapa akun pengujian. Anda dapat menggunakannya untuk mengetes berbagai fitur:

**Akun Administrator:**
* Username: `admin`
* Password: `admin123`

**Akun Guru (Teacher):**
* Username: `teacher`
* Password: `teacher123`

**Akun Siswa (Student):**
* Username: `student`
* Password: `student123`

## Catatan Rilis Terakhir
* Memperbaiki masalah sinkronisasi *dashboard* kuis ketika memuat ulang (refresh) halaman.
* Membersihkan struktur HTML (perbaikan validasi elemen dan duplikasi atribut).
* Mengamankan logika otentikasi dari *frontend* dan menjembataninya dengan *backend* PostgreSQL.

---
Dikembangkan secara khusus untuk memberikan pengalaman belajar mengajar yang lebih modern, andal, dan *scalable*.