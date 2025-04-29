Nama Aplikasi: Reminders Notes Daily
Aplikasi berbasis web sederhana ini dapat digunakan untuk mencatat tugas harian, menulis catatan, dan menggunakan timer fokus (Pomodoro), dengan dukungan mode gelap.

🧩 Fitur-Fitur Utama yang Ada, yaitu :
1. ✅ Manajemen Tugas Harian
Tambah Tugas → dengan input nama tugas dan tanggal deadline.
Tandai Selesai(checkbox) → akan diberi efek strikethrough hijau.
Hapus Tugas → dari daftar.
Filter Tugas → berdasarkan tanggal tertentu.
Urutkan Tugas → berdasarkan deadline.
Notifikasi Deadline → jika ada tugas yang deadline-nya besok, akan muncul alert notifikasi saat halaman dibuka.
2. 📝 Catatan (Notes)
Tulis catatan → bebas lewat textarea.
Simpan catatan → ke localStorage.
Tampilkan daftar catatan → di bawahnya.
Hapus catatan → dengan tombol per item.
3. ⏱️ Timer Fokus (Pomodoro)
Durasi default → 25 menit (1500 detik).
Tombol Mulai→ memulai countdown.
Tombol Reset → mengulang ke 25:00.
Alert ketika waktu habis: "Waktu selesai! Saatnya istirahat."
4. 🌙 Dark Mode
Tombol "Toggle Dark Mode" di header.
Mengubah warna latar belakang dan teks seluruh halaman.
Mode ini dapat diatur dengan CSS custom property (--bg, --text, dll.) dan class dark-mode.
Teknologi yang Digunakan
HTML + CSS → Struktur dan tampilan.
JavaScript → Interaksi (tambah tugas, timer, simpan data).
localStorage → Menyimpan data tugas dan catatan agar tetap ada saat reload.
Logika yang Menarik
Semua data disimpan di localStorage, jadi tidak hilang meski refresh.
Tugas dan catatan diproses dalam bentuk array, lalu dirender ulang setiap kali ada perubahan.
Notifikasi deadline mengecek apakah ada tugas yang deadline-nya besok saat halaman dimuat.