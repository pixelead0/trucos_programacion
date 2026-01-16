import random
import string

def generar_password(longitud=12, usar_especiales=True):
    caracteres= string.ascii_letters + string.digits
    if usar_especiales:
        caracteres +=  string.punctuation
    return ''.join(random.choice(caracteres) for _ in range(longitud))