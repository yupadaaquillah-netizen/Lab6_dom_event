// Latihan 1: memilih elemen dan mengubah teks
const judul = document.getElementById("judul");
const pesan = document.getElementById("pesan");
judul.textContent = "Belajar JavaScript DOM";
pesan.textContent = "Konten berhasil diubah oleh JavaScript.";

// Latihan 2: event click
const tombol = document.getElementById("tombolAksi");

tombol.addEventListener("click", function () {
    pesan.textContent = "Tombol diklik pada " + new Date().toLocaleTimeString();
});

// Latihan 3: mengubah class CSS
const tombolGaya = document.getElementById("tombolGaya");
const teksGaya = document.getElementById("teksGaya");

tombolGaya.addEventListener("click", function () {
    teksGaya.classList.toggle("highlight");
    teksGaya.classList.toggle("teks-besar");
});

// Eksperimen Mandiri 4: menyembunyikan dan menampilkan paragraf dengan class CSS
const tombolSembunyi = document.getElementById("tombolSembunyi");
const paragrafSembunyi = document.getElementById("paragrafSembunyi");

tombolSembunyi.addEventListener("click", function () {
    paragrafSembunyi.classList.toggle("tersembunyi");
    if (paragrafSembunyi.classList.contains("tersembunyi")) {
        tombolSembunyi.textContent = "Tampilkan Paragraf";
    } else {
        tombolSembunyi.textContent = "Sembunyikan Paragraf";
    }
});

// Latihan 4: penghitung karakter
const namaInput = document.getElementById("namaInput");
const jumlahKarakter = document.getElementById("jumlahKarakter");

namaInput.addEventListener("input", function () {
    jumlahKarakter.textContent = namaInput.value.length;
});

// Latihan 5 & Eksperimen Mandiri 2: validasi form (nama minimal 3 karakter)
const form = document.getElementById("formPendaftaran");
const pesanForm = document.getElementById("pesanForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const usiaInput = document.getElementById("usia").value;
    const usia = Number(usiaInput);
    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    pesanForm.className = "";

    // Eksperimen 2: validasi nama minimal 3 karakter
    if (nama.length < 3) {
        pesanForm.textContent = "Nama wajib diisi minimal 3 karakter.";
        pesanForm.classList.add("error");
    }

    else if (!polaEmail.test(email)) {
        pesanForm.textContent = "Masukkan email yang valid (contoh: nama@email.com).";
        pesanForm.classList.add("error");
    }

    else if (usiaInput === "" || !Number.isInteger(usia) || usia < 17 || usia > 100) {
        pesanForm.textContent = "Usia harus berupa bilangan bulat 17–100.";
        pesanForm.classList.add("error");
    }

    else {
        pesanForm.textContent = "Validasi berhasil. Form siap diproses.";
        pesanForm.classList.add("sukses");
        form.reset();
    }
});

// Latihan 6: to-do list dengan tombol selesai dan hapus
const inputTugas = document.getElementById("inputTugas");
const tambahTugas = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftarTugas");
const pesanTugas = document.getElementById("pesanTugas");

tambahTugas.addEventListener("click", function () {
    const teks = inputTugas.value.trim();
    pesanTugas.className = "";

    if (teks === "") {
        pesanTugas.textContent = "Tulis tugas terlebih dahulu.";
        pesanTugas.classList.add("error");
        return;
    }

    const item = document.createElement("li");
    const label = document.createElement("span");
    const selesai = document.createElement("button");
    const hapus = document.createElement("button");

    label.textContent = teks;
    selesai.type = "button";
    selesai.textContent = "Tandai selesai";

    selesai.addEventListener("click", function () {
        item.classList.toggle("selesai");
        selesai.textContent = item.classList.contains("selesai") ? "Batalkan selesai" : "Tandai selesai";
    });

    hapus.type = "button";
    hapus.textContent = "Hapus";

    hapus.addEventListener("click", function () {
        item.remove();
    });

    item.append(label, selesai, hapus);
    daftarTugas.appendChild(item);
    inputTugas.value = "";
    pesanTugas.textContent = "Tugas ditambahkan.";
    pesanTugas.classList.add("sukses");
    inputTugas.focus();
});