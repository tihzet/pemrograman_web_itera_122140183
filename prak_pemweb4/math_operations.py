PI = 3.14159

def area_square(side):
    return side * side

def perimeter_square(side):
    return 4 * side

def area_rectangle(length, width):
    return length * width

def perimeter_rectangle(length, width):
    return 2 * (length + width)

def area_circle(radius):
    return PI * radius * radius

def perimeter_circle(radius):
    return 2 * PI * radius

def celsius_to_fahrenheit(celsius):
    return (celsius * 9/5) + 32

def celsius_to_kelvin(celsius):
    return celsius + 273.15
