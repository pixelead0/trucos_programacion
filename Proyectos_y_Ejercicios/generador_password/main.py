from helpers import generar_password

try:
    longitud = int(input("¿Cuántos caracteres quieres? "))
    usar_especiales = input("¿Incluir caracteres especiales? (s/n): ").lower() == "s"
    print("Tu contraseña es:", generar_password(longitud, usar_especiales))
except ValueError:
    print("Por favor, ingresa un número válido.")
