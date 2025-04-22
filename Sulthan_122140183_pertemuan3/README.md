# Aplikasi Manajemen Buku Pribadi

Aplikasi web untuk mengelola koleksi buku pribadi yang memungkinkan pengguna mencatat buku-buku yang dimiliki, sedang dibaca, atau ingin dibeli. Dibangun menggunakan React dan Tailwind CSS.

## Fitur Aplikasi

- ✅ Penambahan buku baru (judul, penulis, status: dimiliki/sedang dibaca/ingin dibeli)
- ✅ Edit dan hapus buku dari koleksi
- ✅ Filter buku berdasarkan status
- ✅ Pencarian buku berdasarkan judul atau penulis
- ✅ Penyimpanan data lokal pada browser

## Teknologi yang Digunakan

- React.js (Functional Components dengan Hooks)
- React Router untuk navigasi antar halaman
- Context API untuk state management
- Custom Hooks (`useLocalStorage`, `useFilteredBooks`)
- Tailwind CSS untuk styling
- React Testing Library untuk unit test
- PropTypes untuk type checking

## Tampilan Aplikasi

### Halaman Beranda
![image](https://github.com/user-attachments/assets/95433063-4af9-42d0-b0e5-87a2ffb771c6)

*Screenshot halaman beranda aplikasi menampilkan daftar buku dengan filter dan pencarian*

### Form Tambah/Edit Buku
![image](https://github.com/user-attachments/assets/efbed8d5-d88f-4ad6-a8bf-0494c7b01fc4)

*Screenshot form untuk menambah atau mengedit buku*

### Filter dan Pencarian
![image](https://github.com/user-attachments/assets/beef924d-6075-4174-b7f7-4d72781a9492)

*Screenshot fitur filter status dan pencarian buku*

## Cara Instalasi

1. Clone repository ini:
```bash
git clone https://github.com/tihzet/pemrograman_web_itera_122140183

cd Sulthan_122140028_pertemuan3
```

2. Install dependencies:
```bash
npm install
```

3. Jalankan aplikasi:
```bash
npm start
```

Aplikasi akan berjalan pada `http://localhost:3000`

## Menjalankan Test

Aplikasi ini dilengkapi dengan unit test untuk komponen utama.

```bash
npm test
```



## Penggunaan

1. **Beranda**: Lihat semua buku, filter berdasarkan status, dan cari buku
2. **Tambah Buku**: Klik tombol "Tambah Buku" dan isi form yang disediakan
3. **Edit Buku**: Klik tombol "Edit" pada kartu buku untuk mengubah informasi
4. **Hapus Buku**: Klik tombol "Hapus" pada kartu buku untuk menghapus dari koleksi

## Kontribusi

Kontribusi selalu diterima! Silakan fork repository ini dan buat pull request dengan fitur atau perbaikan yang Anda usulkan.
