
const form = document.getElementById("formWorkshop");
const namaInput = document.getElementById("nama");
const emailInput = document.getElementById("email");
const sesiSelect = document.getElementById("sesi");

const hitungNama = document.getElementById("hitungNama");
const infoSesi = document.getElementById("infoSesi");
const pesanBox = document.getElementById("pesan");

const ringkasanNama = document.getElementById("ringkasanNama");
const ringkasanEmail = document.getElementById("ringkasanEmail");
const ringkasanSesi = document.getElementById("ringkasanSesi");

const groupNama = document.getElementById("group-nama");
const groupEmail = document.getElementById("group-email");
const groupSesi = document.getElementById("group-sesi");

const feedbackNama = document.getElementById("feedback-nama");
const feedbackEmail = document.getElementById("feedback-email");

const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
namaInput.addEventListener("input", function () {
    const panjang = namaInput.value.length;
    const max = namaInput.getAttribute("maxlength") || 60;
    hitungNama.textContent = `${panjang} / ${max} karakter`;

    if (panjang >= max) {
        hitungNama.className = "char-counter limit";
    } else if (panjang >= max - 10) {
        hitungNama.className = "char-counter warning";
    } else {
        hitungNama.className = "char-counter";
    }

    const namaBersih = namaInput.value.trim();
    ringkasanNama.textContent = namaBersih !== "" ? namaBersih : "-";

    if (namaBersih.length > 0 && namaBersih.length < 3) {
        groupNama.classList.add("has-error");
        groupNama.classList.remove("has-success");
        feedbackNama.textContent = "Nama minimal terdiri dari 3 karakter.";
    } else if (namaBersih.length >= 3) {
        groupNama.classList.remove("has-error");
        groupNama.classList.add("has-success");
        feedbackNama.textContent = "";
    } else {
        groupNama.classList.remove("has-error", "has-success");
        feedbackNama.textContent = "";
    }

    sembunyikanPesanUtama();
});

emailInput.addEventListener("input", function () {
    const emailBersih = emailInput.value.trim();
    ringkasanEmail.textContent = emailBersih !== "" ? emailBersih : "-";

    if (emailBersih.length > 0 && !polaEmail.test(emailBersih)) {
        groupEmail.classList.add("has-error");
        groupEmail.classList.remove("has-success");
        feedbackEmail.textContent = "Format email tidak valid (contoh: nama@domain.com).";
    } else if (polaEmail.test(emailBersih)) {
        groupEmail.classList.remove("has-error");
        groupEmail.classList.add("has-success");
        feedbackEmail.textContent = "";
    } else {
        groupEmail.classList.remove("has-error", "has-success");
        feedbackEmail.textContent = "";
    }

    sembunyikanPesanUtama();
});

sesiSelect.addEventListener("change", function () {
    const sesiTerpilih = sesiSelect.value;

    if (sesiTerpilih !== "") {
        ringkasanSesi.textContent = sesiTerpilih;
        infoSesi.textContent = `✓ Anda memilih: ${sesiTerpilih}`;
        infoSesi.className = "session-badge selected";
        groupSesi.classList.remove("has-error");
        groupSesi.classList.add("has-success");
    } else {
        ringkasanSesi.textContent = "-";
        infoSesi.textContent = "Silakan tentukan sesi yang cocok dengan jadwal Anda.";
        infoSesi.className = "session-badge hint-text";
        groupSesi.classList.remove("has-success");
    }

    sembunyikanPesanUtama();
});

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const namaValue = namaInput.value.trim();
    const emailValue = emailInput.value.trim();
    const sesiValue = sesiSelect.value;

    let pesanError = [];

    if (namaValue === "") {
        pesanError.push("Nama lengkap wajib diisi.");
        groupNama.classList.add("has-error");
        feedbackNama.textContent = "Nama tidak boleh kosong.";
    } else if (namaValue.length < 3) {
        pesanError.push("Nama lengkap minimal terdiri dari 3 karakter.");
        groupNama.classList.add("has-error");
        feedbackNama.textContent = "Minimal 3 karakter.";
    } else {
        groupNama.classList.remove("has-error");
        groupNama.classList.add("has-success");
        feedbackNama.textContent = "";
    }

    if (emailValue === "") {
        pesanError.push("Alamat email wajib diisi.");
        groupEmail.classList.add("has-error");
        feedbackEmail.textContent = "Email tidak boleh kosong.";
    } else if (!polaEmail.test(emailValue)) {
        pesanError.push("Format email tidak valid (contoh: nama@domain.com).");
        groupEmail.classList.add("has-error");
        feedbackEmail.textContent = "Format email salah.";
    } else {
        groupEmail.classList.remove("has-error");
        groupEmail.classList.add("has-success");
        feedbackEmail.textContent = "";
    }

    if (sesiValue === "") {
        pesanError.push("Silakan pilih sesi workshop yang tersedia.");
        groupSesi.classList.add("has-error");
    } else {
        groupSesi.classList.remove("has-error");
        groupSesi.classList.add("has-success");
    }

    if (pesanError.length > 0) {
        tampilkanPesanError(pesanError[0]);
        if (namaValue.length < 3) {
            namaInput.focus();
        } else if (!polaEmail.test(emailValue)) {
            emailInput.focus();
        } else {
            sesiSelect.focus();
        }
    } else {
        tampilkanPesanSukses(namaValue, emailValue, sesiValue);
    }
});

form.addEventListener("reset", function () {
    setTimeout(function () {
        hitungNama.textContent = "0 / 60 karakter";
        hitungNama.className = "char-counter";

        ringkasanNama.textContent = "-";
        ringkasanEmail.textContent = "-";
        ringkasanSesi.textContent = "-";

        infoSesi.textContent = "Silakan tentukan sesi yang cocok dengan jadwal Anda.";
        infoSesi.className = "session-badge hint-text";

        groupNama.classList.remove("has-error", "has-success");
        groupEmail.classList.remove("has-error", "has-success");
        groupSesi.classList.remove("has-error", "has-success");

        feedbackNama.textContent = "";
        feedbackEmail.textContent = "";

        sembunyikanPesanUtama();
        namaInput.focus();
    }, 10);
});

function tampilkanPesanError(pesanTeks) {
    pesanBox.className = "alert-message error";
    pesanBox.style.display = "block";
    pesanBox.innerHTML = `⚠️ <strong>Pendaftaran Gagal:</strong> ${pesanTeks}`;
    pesanBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function tampilkanPesanSukses(nama, email, sesi) {
    pesanBox.className = "alert-message success";
    pesanBox.style.display = "block";
    pesanBox.innerHTML = `
        <h4>🎉 Pendaftaran Workshop Berhasil!</h4>
        <p>Terima kasih <strong>${nama}</strong>. Konfirmasi jadwal untuk <strong>${sesi}</strong> telah dicatat ke sistem (Simulasi Front-End).</p>
        <p style="margin-top: 6px; font-size: 12px; color: var(--success-text);">Email konfirmasi akan dikirim ke: <u>${email}</u>.</p>
    `;
    pesanBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function sembunyikanPesanUtama() {
    pesanBox.className = "alert-message";
    pesanBox.style.display = "none";
    pesanBox.innerHTML = "";
}
