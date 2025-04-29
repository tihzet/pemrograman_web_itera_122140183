import math
import sys

def hitung_bmi(berat: float, tinggi: float) -> float:
    """Menghitung BMI dengan rumus: berat / (tinggi * tinggi)"""
    return berat / math.pow(tinggi, 2)

def kategori_bmi(bmi: float) -> str:
    """Menentukan kategori BMI berdasarkan nilai BMI"""
    if bmi < 18.5:
        return "Berat badan kurang"
    elif 18.5 <= bmi < 25:
        return "Berat badan normal"
    elif 25 <= bmi < 30:
        return "Berat badan berlebih"
    else:
        return "Obesitas"

def tampilkan_hasil(bmi: float, kategori: str):
    """Menampilkan hasil BMI dan kategorinya"""
    print("\n=== HASIL PERHITUNGAN BMI ===")
    print(f"BMI Anda        : {bmi:.2f}")
    print(f"Kategori BMI    : {kategori}\n")

def input_angka(prompt: str) -> float:
    """Meminta input angka dari user dan validasi"""
    while True:
        try:
            nilai = float(input(prompt))
            if nilai <= 0:
                print("Nilai harus lebih dari 0. Coba lagi.")
                continue
            return nilai
        except ValueError:
            print("Input tidak valid. Masukkan angka!")

def main():
    print("=== PROGRAM PENGHITUNG BMI ===")
    while True:
        berat = input_angka("Masukkan berat badan (kg): ")
        tinggi = input_angka("Masukkan tinggi badan (m): ")

        bmi = hitung_bmi(berat, tinggi)
        kategori = kategori_bmi(bmi)
        tampilkan_hasil(bmi, kategori)

        lanjut = input("Apakah ingin menghitung lagi? (y/n): ").lower()
        if lanjut != 'y':
            print("\nTerima kasih telah menggunakan program BMI Calculator. Sampai jumpa!\n")
            sys.exit()

if __name__ == "__main__":
    main()