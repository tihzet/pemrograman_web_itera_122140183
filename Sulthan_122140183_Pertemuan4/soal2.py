from tabulate import tabulate

class Mahasiswa:
    def __init__(self, nama, nim, nilai_uts, nilai_uas, nilai_tugas):
        self.nama = nama
        self.nim = nim
        self.nilai_uts = nilai_uts
        self.nilai_uas = nilai_uas
        self.nilai_tugas = nilai_tugas
        self.nilai_akhir = self.hitung_nilai_akhir()
        self.grade = self.tentukan_grade()

    def hitung_nilai_akhir(self):
        return round(0.3 * self.nilai_uts + 0.4 * self.nilai_uas + 0.3 * self.nilai_tugas, 2)

    def tentukan_grade(self):
        if self.nilai_akhir >= 80:
            return 'A'
        elif self.nilai_akhir >= 70:
            return 'B'
        elif self.nilai_akhir >= 60:
            return 'C'
        elif self.nilai_akhir >= 50:
            return 'D'
        else:
            return 'E'

class ManajemenNilai:
    def __init__(self):
        self.daftar_mahasiswa = []

    def tambah_mahasiswa(self, mahasiswa):
        self.daftar_mahasiswa.append(mahasiswa)

    def tampilkan_semua(self):
        headers = ["Nama", "NIM", "UTS", "UAS", "Tugas", "Nilai Akhir", "Grade"]
        table = [[
            m.nama, m.nim, m.nilai_uts, m.nilai_uas, m.nilai_tugas,
            f"{m.nilai_akhir:.1f}", m.grade
        ] for m in self.daftar_mahasiswa]
        print(tabulate(table, headers=headers, tablefmt="fancy_grid"))

    def tampilkan_tertinggi_terendah(self):
        tertinggi = max(self.daftar_mahasiswa, key=lambda m: m.nilai_akhir)
        terendah = min(self.daftar_mahasiswa, key=lambda m: m.nilai_akhir)

        print("\nMahasiswa Nilai Tertinggi:")
        print(f"{tertinggi.nama:<10} ({tertinggi.nim}) Nilai : {tertinggi.nilai_akhir:.1f}, Grade : {tertinggi.grade}")

        print("\nMahasiswa Nilai Terendah:")
        print(f"{terendah.nama:<10} ({terendah.nim}) - Nilai : {terendah.nilai_akhir:.1f}, Grade : {terendah.grade}")

def main():
    manajemen = ManajemenNilai()

    manajemen.tambah_mahasiswa(Mahasiswa("Bram", "122140001", 80, 92, 83))
    manajemen.tambah_mahasiswa(Mahasiswa("Imad", "122140002", 65, 89, 78))
    manajemen.tambah_mahasiswa(Mahasiswa("Aceng", "122140003", 40, 88, 85))
    manajemen.tambah_mahasiswa(Mahasiswa("Sambo", "122140004", 55, 80, 50))
    manajemen.tambah_mahasiswa(Mahasiswa("Sulthan", "122140005", 45, 70, 40))

    manajemen.tampilkan_semua()
    manajemen.tampilkan_tertinggi_terendah()

if __name__ == "__main__":
    main()