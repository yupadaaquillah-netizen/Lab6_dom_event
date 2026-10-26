# Lab6Web — Praktikum Pemrograman Web: JavaScript DOM & Event Handling

> **Mata Kuliah:** Pemrograman Web  
> **Topik:** Document Object Model (DOM) & Event Handling  
> **Repository:** `Lab6Web`  
> **Mahasiswa:** Afdal *(Silakan lengkapi NIM & Kelas)*  

---

## 📋 Daftar Isi
1. [Tujuan Praktikum](#1-tujuan-praktikum)
2. [Struktur Proyek](#2-struktur-proyek)
3. [Cara Menjalankan](#3-cara-menjalankan)
4. [Rincian Langkah Kerja & Implementasi Fitur](#4-rincian-langkah-kerja--implementasi-fitur)
   - [A. Modul Praktikum (Latihan 1–6)](#a-modul-praktikum)
   - [B. Eksperimen Mandiri (G.1–G.5)](#b-eksperimen-mandiri)
   - [C. Mini Project: Form Pendaftaran Workshop (F)](#c-mini-project-form-pendaftaran-workshop)
5. [Skenario Pengujian Validasi Form](#5-skenario-pengujian-validasi-form)
6. [Jawaban Pertanyaan Evaluasi (H.1–H.7)](#6-jawaban-pertanyaan-evaluasi)
7. [Panduan Git & Pengumpulan (I.1–I.6)](#7-panduan-git--pengumpulan)
8. [Dokumentasi & Screenshot](#8-dokumentasi--screenshot)

---

## 1. Tujuan Praktikum
1. Memahami konsep dasar **Document Object Model (DOM)** sebagai representasi pohon objek dari dokumen HTML.
2. Menguasai cara menyeleksi elemen HTML menggunakan metode DOM seperti `getElementById()`, `querySelector()`, dan `querySelectorAll()`.
3. Memanipulasi properti, konten teks (`textContent`), dan gaya visual (`classList.toggle()`) elemen HTML secara dinamis.
4. Menerapkan **Event Handling** modern menggunakan `addEventListener()` pada berbagai tipe event (`click`, `input`, `change`, `submit`, `reset`).
5. Mengimplementasikan validasi form front-end interaktif serta mencegah perilaku default form submission menggunakan `event.preventDefault()`.
6. Membangun halaman web mini project berstandar industri dengan antarmuka yang modern, estetis, dan responsif di desktop maupun perangkat mobile.

---

## 2. Struktur Proyek

Proyek ini telah dipisahkan secara modular ke dalam folder latihan praktikum dan mini project dengan pemisahan struktur (HTML), gaya (CSS), dan logika (JavaScript):

```text
Lab6Web/
├── Praktikum/
│   ├── index.html     # Halaman latihan praktikum (Latihan 1–6 & Eksperimen 4)
│   ├── style.css      # Styling latihan praktikum dan daftar tugas responsif
│   └── script.js      # Logika DOM manipulasi, validasi, dan To-do List
│
├── Mini_projeck/
│   ├── index.html     # Halaman Form Pendaftaran Workshop interaktif
│   ├── style.css      # Styling modern (CSS Grid, Flexbox, Glassmorphism, Responsive)
│   ├── script.js      # Logika validasi multi-input, live counter, live summary, reset
│   └── main.js        # Entry point / forwarder ke script.js
│
└── README.md          # Dokumentasi lengkap, laporan praktikum, & jawaban evaluasi
```

---

## 3. Cara Menjalankan

### Opsi 1: Menggunakan Ekstensi VS Code Live Server (Direkomendasikan)
1. Buka folder `Lap6_dom_event` atau `Lab6Web` di Visual Studio Code.
2. Pastikan ekstensi **Live Server** (oleh Ritwick Dey) sudah terinstal di VS Code.
3. Klik kanan pada file `Mini_projeck/index.html` atau `Praktikum/index.html`, lalu pilih **"Open with Live Server"**.
4. Halaman akan terbuka otomatis pada URL browser lokal (contoh: `http://127.0.0.1:5500/Mini_projeck/index.html`).

### Opsi 2: Buka Langsung di Web Browser
1. Navigasikan ke folder proyek melalui File Explorer.
2. Klik ganda (double-click) file `Mini_projeck/index.html` atau `Praktikum/index.html`.
3. File akan langsung dibuka di browser default (Google Chrome, Microsoft Edge, Firefox, dll).

---

## 4. Rincian Langkah Kerja & Implementasi Fitur

### A. Modul Praktikum
Halaman `Praktikum/index.html` mengimplementasikan 6 latihan utama:
1. **Latihan 1 — Seleksi & Manipulasi Teks:** Mengakses elemen `#judul` dan `#pesan` melalui `document.getElementById()`, kemudian mengubah isinya menggunakan properti `.textContent`.
2. **Latihan 2 — Event Click:** Mendaftarkan event listener `click` pada `#tombolAksi` untuk menampilkan timestamp waktu real-time (`new Date().toLocaleTimeString()`).
3. **Latihan 3 — Manipulasi Gaya CSS:** Menggunakan `classList.toggle("highlight")` dan `classList.toggle("teks-besar")` pada `#teksGaya` ketika tombol diklik.
4. **Latihan 4 — Live Character Counter:** Mendengarkan event `input` pada elemen `<input id="namaInput">` untuk menghitung dan memperbarui jumlah karakter secara real-time pada `#jumlahKarakter`.
5. **Latihan 5 — Validasi Form Sederhana:** Memvalidasi input nama (min. 3 karakter), format email menggunakan Regular Expression (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`), dan validasi usia (bilangan bulat antara 17–100 tahun).
6. **Latihan 6 — To-Do List Interaktif:** Menambahkan item tugas baru (`<li>`), menandai tugas selesai (`.selesai` dengan garis coret), dan tombol hapus item.

---

### B. Eksperimen Mandiri

| No | Eksperimen Mandiri | Implementasi & Penjelasan Teknis |
|:--:|:---|:---|
| **G.1** | **Tombol Hapus pada To-do List** | Ditambahkan elemen `<button>` hapus pada setiap item list di `Praktikum/script.js`. Saat tombol diklik, dipanggil method `item.remove()` untuk menghapus node elemen dari pohon DOM secara dinamis. |
| **G.2** | **Validasi Nama Minimal 3 Karakter** | Pada validasi form (`Praktikum/script.js` & `Mini_projeck/script.js`), dilakukan pengecekan kondisi `if (nama.length < 3)`. Jika karakter kurang dari tiga, form submission ditolak dan dimunculkan pesan kesalahan. |
| **G.3** | **Event `change` Dropdown Sesi Workshop** | Pada dropdown `<select id="sesi">`, dipasang `addEventListener("change", ...)`. Saat opsi diganti oleh user, teks sesi terpilih langsung ditampilkan pada elemen `#infoSesi` serta diperbarui pada tabel ringkasan langsung (`#ringkasanSesi`). |
| **G.4** | **Tombol Sembunyikan & Tampilkan Paragraf** | Dibuat section khusus dengan tombol `#tombolSembunyi` dan paragraf `#paragrafSembunyi`. Menggunakan `paragrafSembunyi.classList.toggle("tersembunyi")` yang menerapkan rule CSS `display: none;`, sekaligus memperbarui teks tombol ("Sembunyikan Paragraf" / "Tampilkan Paragraf"). |
| **G.5** | **Analisis Script di `<head>` Tanpa `defer`** | **Eksperimen & Hasil Analisis:**<br>Jika tag `<script src="script.js"></script>` diletakkan di dalam `<head>` tanpa atribut `defer` atau `async`, browser akan mengeksekusi JavaScript saat parser HTML baru mencapai baris tersebut dan elemen `<body>` belum dibuat.<br>**Masalah yang Muncul:** Pemanggilan `document.getElementById("nama")` menghasilkan `null`. Saat kode memanggil method `.addEventListener()`, browser melemparkan runtime error: `Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')` dan seluruh fungsionalitas interaktif terhenti.<br>**Solusi:** Gunakan atribut `defer` pada tag `<script>`, letakkan script tepat sebelum tag penutup `</body>`, atau bungkus script di dalam handler event `DOMContentLoaded`. |

---

### C. Mini Project: Form Pendaftaran Workshop
Folder `Mini_projeck/` dirancang dengan estetika modern berstandar industri:
- **Validasi Multi-Field Komprehensif:**
  - **Nama Lengkap:** Wajib diisi dan minimal 3 karakter.
  - **Alamat Email:** Wajib diisi dan harus memenuhi pola format email standar (`nama@domain.com`).
  - **Sesi Workshop:** Wajib memilih salah satu opsi jadwal sesi workshop yang tersedia.
- **Penghitung Karakter Real-Time:** Menghitung jumlah karakter input nama secara dinamis (`0 / 60 karakter`). Dilengkapi transisi warna (normal, *warning* saat mendekati 60 karakter, dan *limit alert* jika mencapai batas).
- **Ringkasan Input Langsung (Live Summary):** Komponen ringkasan interaktif yang menampilkan data Nama, Email, dan Sesi secara real-time saat pengguna mengetik (`input`) dan mengubah pilihan (`change`).
- **Pesan Umpan Balik (Alert Feedback):**
  - Kotak pesan error dinamis berwarna merah dengan ikon penanda kesalahan dan fokus otomatis (*auto-focus*) ke field yang keliru.
  - Kotak pesan sukses berwarna hijau emerald saat data valid, menampilkan rincian konfirmasi pendaftaran.
- **Tombol Reset:** Mengembalikan form ke kondisi *initial state* (mengosongkan nilai input, mereset counter ke `0 / 60`, mengembalikan ringkasan ke tanda `-`, serta membersihkan seluruh pesan status).
- **Antarmuka Responsif (Mobile-Friendly):** Dibangun menggunakan CSS Flexbox & CSS Grid dengan breakpoint media query sehingga tampilan rapi dan proporsional baik pada layar laptop/desktop maupun smartphone.

---

## 5. Skenario Pengujian Validasi Form

Berikut adalah matriks pengujian validasi input pada Mini Project Form Pendaftaran Workshop:

| ID Pengujian | Skenario Pengujian | Data Input (Nama / Email / Sesi) | Ekspektasi Hasil | Status |
|:---:|:---|:---|:---|:---:|
| **TC-01** | Form dikirim dalam keadaan kosong | Nama: `""`<br>Email: `""`<br>Sesi: `""` | Muncul pesan error: *"Nama lengkap wajib diisi."*, border input nama berubah merah, kursor fokus ke input nama. | **LULUS (Valid)** |
| **TC-02** | Nama kurang dari 3 karakter | Nama: `"Al"`<br>Email: `"al@gmail.com"`<br>Sesi: `"Sesi Pagi"` | Muncul pesan error: *"Nama lengkap minimal terdiri dari 3 karakter."*, feedback error di bawah input nama. | **LULUS (Valid)** |
| **TC-03** | Format email tidak valid (tanpa `@`) | Nama: `"Afdal Pratama"`<br>Email: `"afdalpratama.com"`<br>Sesi: `"Sesi Pagi"` | Muncul pesan error: *"Format email tidak valid (contoh: nama@domain.com)."*, input email disorot merah. | **LULUS (Valid)** |
| **TC-04** | Format email tanpa domain | Nama: `"Afdal Pratama"`<br>Email: `"afdal@"`<br>Sesi: `"Sesi Pagi"` | Muncul pesan error format email tidak valid, pengiriman dibatalkan. | **LULUS (Valid)** |
| **TC-05** | Sesi workshop belum dipilih | Nama: `"Afdal Pratama"`<br>Email: `"afdal@gmail.com"`<br>Sesi: `""` (*-- Pilih Jadwal Sesi --*) | Muncul pesan error: *"Silakan pilih sesi workshop yang tersedia."*, dropdown disorot merah. | **LULUS (Valid)** |
| **TC-06** | Seluruh data diisi dengan benar & valid | Nama: `"Afdal Pratama"`<br>Email: `"afdal@kampus.ac.id"`<br>Sesi: `"Sesi Siang (13.00 - 15.30 WIB)"` | Muncul kotak alert sukses hijau: *"Pendaftaran Workshop Berhasil!"*, nama dan sesi terkonfirmasi di layar. | **LULUS (Valid)** |
| **TC-07** | Pengujian tombol Reset | Input terisi data, lalu klik tombol **Reset Form** | Semua field terhapus, counter nama kembali ke `0 / 60`, ringkasan kembali ke `-`, alert pesan tersembunyi. | **LULUS (Valid)** |

---

## 6. Jawaban Pertanyaan Evaluasi

### 1. Apa yang dimaksud dengan DOM dan apa manfaatnya?
**Jawaban:**  
**DOM (Document Object Model)** adalah antarmuka pemrograman (API) standar yang merepresentasikan dokumen HTML atau XML sebagai struktur pohon objek (*tree structure*), di mana setiap elemen, atribut, dan teks di dalam HTML menjadi sebuah *node* (simpul objek).  
**Manfaat DOM:**
- Memungkinkan bahasa pemrograman seperti JavaScript untuk mengakses, membaca, menambah, mengubah, atau menghapus elemen dan atribut HTML secara dinamis tanpa perlu me-reload halaman.
- Memungkinkan penambahan interaktivitas tinggi, animasi, dan manipulasi gaya tampilan (CSS) secara langsung sesuai aksi pengguna.
- Menjadi jembatan antara struktur markup dokumen dengan logika interaktif aplikasi web.

---

### 2. Apa perbedaan `getElementById()`, `querySelector()`, dan `querySelectorAll()`?
**Jawaban:**

| Metode | Parameter Seleksi | Nilai Kembalian (*Return Value*) | Performa / Karakteristik |
|:---|:---|:---|:---|
| **`getElementById()`** | ID elemen tanpa tanda pagar (contoh: `"nama"`) | Satu elemen tunggal (`Element`) yang memiliki ID cocok, atau `null` jika tidak ditemukan. | Paling cepat karena browser mengindeks ID secara langsung dan unik. |
| **`querySelector()`** | Selector CSS apa pun (contoh: `"#nama"`, `".btn-primary"`, `"div > p:first-child"`) | **Elemen pertama** yang cocok dengan selector CSS yang diberikan, atau `null`. | Sangat fleksibel untuk query CSS spesifik. |
| **`querySelectorAll()`** | Selector CSS apa pun (contoh: `".menu-item"`, `"input[type='text']"`) | Koleksi semua elemen yang cocok dalam bentuk objek **`NodeList`** statis. | Mendukung iterasi langsung (seperti `.forEach()`). |

---

### 3. Apa fungsi `addEventListener()` dan sebutkan tiga contoh event?
**Jawaban:**  
**Fungsi `addEventListener()`** adalah method bawaan JavaScript yang digunakan untuk mendaftarkan sebuah fungsi penangan (*event listener* / *callback function*) ke suatu elemen HTML tertentu, sehingga ketika event yang ditentukan terjadi pada elemen tersebut, fungsi tersebut akan dieksekusi. Keunggulannya adalah memungkinkan mendaftarkan lebih dari satu listener untuk event yang sama pada satu elemen tanpa menimpa listener sebelumnya.

**Tiga Contoh Event:**
1. **`click`:** Terjadi saat pengguna mengklik elemen mouse (misalnya pada tombol submit atau tombol hapus tugas).
2. **`input`:** Terjadi secara langsung setiap kali nilai pada elemen `<input>` atau `<textarea>` mengalami perubahan karakter (digunakan pada penghitung karakter dan live preview).
3. **`change`:** Terjadi saat nilai elemen form selesai diubah dan kehilangan fokus, atau saat opsi baru pada dropdown `<select>` dipilih.

---

### 4. Mengapa `event.preventDefault()` digunakan pada event submit form?
**Jawaban:**  
Secara default, ketika form HTML dikirim (*submit*), browser memiliki perilaku standar (*default action*) yaitu mengirimkan data via HTTP GET/POST ke URL action dan melakukan **reload / refresh seluruh halaman**.  
Dengan memanggil `event.preventDefault()` di dalam event handler `submit`, kita **menghentikan tindakan default tersebut**. Hal ini memungkinkan kita untuk:
- Melakukan validasi front-end terlebih dahulu melalui JavaScript di browser.
- Menampilkan pesan kesalahan atau pesan sukses secara instan di halaman yang sama tanpa reload (*seamless user experience*).
- Mengirim data form di latar belakang menggunakan AJAX atau Fetch API bila diperlukan.

---

### 5. Apa perbedaan `textContent` dan `innerHTML` dari sisi penggunaan dan keamanan?
**Jawaban:**

| Aspek | `textContent` | `innerHTML` |
|:---|:---|:---|
| **Penggunaan** | Mengambil atau mengatur konten teks murni (*plain text*) dari suatu node beserta seluruh keturunannya. Jika dimasukkan tag HTML (seperti `<b>Teks</b>`), tag tersebut akan dirender sebagai teks biasa. | Mengambil atau mengatur konten dalam bentuk markup HTML. Tag HTML di dalamnya akan diurai (*parsed*) dan dirender sebagai elemen DOM yang nyata. |
| **Keamanan** | **Sangat Aman.** Karena teks diperlakukan sebagai teks murni, browser tidak akan mengeksekusi tag `<script>` atau atribut inline seperti `onerror=...`. Kebal terhadap serangan XSS. | **Beresiko Rentan Keamanan.** Jika menggunakan `innerHTML` untuk merender data yang berasal langsung dari input pengguna tanpa sanitasi ketat, aplikasi rentan terhadap serangan **Cross-Site Scripting (XSS)**. |
| **Rekomendasi** | Gunakan untuk menampilkan data input pengguna, angka, label, atau teks biasa. | Gunakan hanya bila memang perlu merender struktur tag HTML baru yang sumber datanya terpercaya. |

---

### 6. Bagaimana `classList.toggle()` membantu mengubah tampilan elemen?
**Jawaban:**  
Method `classList.toggle("nama-class")` bekerja dengan cara memeriksa keberadaan suatu class CSS pada elemen:
- Jika class tersebut **sudah ada**, maka method akan **menghapusnya**.
- Jika class tersebut **belum ada**, maka method akan **menambahkannya**.

**Manfaat untuk Tampilan Elemen:**
- Menyederhanakan logika kode tanpa perlu menulis percabangan manual `if (element.classList.contains(...)) { remove(...) } else { add(...) }`.
- Memudahkan implementasi fitur interaktif seperti membuka/menutup menu navigasi (*accordion*), mengaktifkan mode gelap (*dark mode*), menandai item selesai (coret teks), dan menyembunyikan/menampilkan elemen dengan class utilitas (seperti `.tersembunyi { display: none; }`).

---

### 7. Sebutkan minimal tiga skenario pengujian validasi form!
**Jawaban:**
1. **Skenario Form Kosong (*Empty Fields Test*):** Mengirimkan form tanpa mengisi input nama, email, dan belum memilih sesi workshop. Hasil yang diharapkan: form menolak pengiriman dan menampilkan notifikasi kesalahan field wajib.
2. **Skenario Format Data Tidak Sesuai (*Invalid Format & Boundary Test*):** Mengisi nama dengan karakter kurang dari panjang minimal (misalnya hanya 1 atau 2 karakter), atau mengisi format email yang salah (seperti tidak menyertakan tanda `@` atau nama domain). Hasil yang diharapkan: form menampilkan pesan error spesifik sesuai field yang tidak valid.
3. **Skenario Data Lengkap dan Valid (*Happy Path / Valid Submission Test*):** Mengisi seluruh field sesuai ketentuan (nama $\ge$ 3 karakter, email format `user@domain.com`, sesi workshop terpilih). Hasil yang diharapkan: form berhasil diproses, memunculkan notifikasi sukses, dan memperbarui ringkasan pendaftaran.

---

## 7. Panduan Git & Pengumpulan

Berikut adalah langkah-langkah untuk membuat repository Git lokal dan mengunggahnya ke GitHub/GitLab:

```bash
# 1. Buka terminal di folder proyek Lab6Web
cd c:/Lap6_dom_event

# 2. Inisialisasi repository Git lokal
git init

# 3. Tambahkan seluruh file proyek ke staging area
git add .

# 4. Buat commit pertama
git commit -m "feat: complete Lab6Web practical exercises and workshop registration mini project"

# 5. Ganti nama branch utama menjadi main
git branch -M main

# 6. Hubungkan dengan remote repository GitHub yang telah dibuat (ganti URL sesuai akun Anda)
git remote add origin https://github.com/USERNAME_ANDA/Lab6Web.git

# 7. Push source code ke repository remote
git push -u origin main
```

> **Pengumpulan:** Salin tautan URL repository GitHub Anda (contoh: `https://github.com/USERNAME_ANDA/Lab6Web`) dan kumpulkan pada e-learning / ecampus kampus sesuai arahan dosen pengampu.

---

## 8. Dokumentasi & Screenshot

*Tambahkan tangkapan layar (screenshot) hasil pengujian halaman di browser pada bagian ini sebelum pengumpulan final:*

### 1. Praktikum DOM (Latihan 1–6)
*(Tempatkan screenshot halaman Praktikum/index.html yang menampilkan tombol klik, ubah gaya, penghitung karakter, validasi form, dan to-do list)*

### 2. Mini Project — Kondisi Awal & Responsive View
*(Tempatkan screenshot halaman Mini_projeck/index.html pada tampilan Desktop dan Mobile)*

### 3. Mini Project — Kondisi Error / Tidak Valid
*(Tempatkan screenshot saat validasi nama < 3 karakter, email salah, atau sesi kosong)*

### 4. Mini Project — Kondisi Sukses / Valid
*(Tempatkan screenshot saat form berhasil diisi lengkap dan muncul alert pendaftaran sukses)*

### 5. Mini Project — Kondisi Reset
*(Tempatkan screenshot setelah tombol Reset diklik)*