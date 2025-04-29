from math_operations import area_square, perimeter_square, area_rectangle, perimeter_rectangle
import math_operations as mo
from tabulate import tabulate

def main():
    square_side = 5
    rectangle_length = 10
    rectangle_width = 4
    circle_radius = 7
    celsius_temp = 25

    results = []

    # Menggunakan impor langsung
    results.append(["Persegi", "Luas", area_square(square_side)])
    results.append(["Persegi", "Keliling", perimeter_square(square_side)])

    results.append(["Persegi Panjang", "Luas", area_rectangle(rectangle_length, rectangle_width)])
    results.append(["Persegi Panjang", "Keliling", perimeter_rectangle(rectangle_length, rectangle_width)])

    # Menggunakan alias modul
    results.append(["Lingkaran", "Luas", mo.area_circle(circle_radius)])
    results.append(["Lingkaran", "Keliling", mo.perimeter_circle(circle_radius)])

    # Konversi suhu menggunakan alias modul
    results.append(["Suhu", "Celsius ke Fahrenheit", mo.celsius_to_fahrenheit(celsius_temp)])
    results.append(["Suhu", "Celsius ke Kelvin", mo.celsius_to_kelvin(celsius_temp)])

    print(tabulate(results, headers=["Bentuk/Tipe", "Perhitungan", "Hasil"], tablefmt="grid"))

if __name__ == "__main__":
    main()
