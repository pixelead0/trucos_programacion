# Validación de Direcciones IP

## ¿Qué es una Dirección IP?
Una dirección IP (Internet Protocol) es un número que identifica de manera única a un dispositivo en una red. En IPv4, se representa como cuatro números separados por puntos (ejemplo: 192.168.1.1).

## Validación Básica

### Usando el Módulo ipaddress
```python
import ipaddress

def validar_ip(ip):
    try:
        ipaddress.IPv4Address(ip)
        return True
    except ipaddress.AddressValueError:
        return False
```

### Validación Manual
```python
def validar_ip_manual(ip):
    # Dividir la IP en octetos
    octetos = ip.split('.')

    # Verificar que hay 4 octetos
    if len(octetos) != 4:
        return False

    # Verificar cada octeto
    for octeto in octetos:
        try:
            numero = int(octeto)
            if not (0 <= numero <= 255):
                return False
        except ValueError:
            return False

    return True
```

## Ejemplos de Uso

### Validación Simple
```python
# IPs válidas
print(validar_ip("192.168.1.1"))  # True
print(validar_ip("10.0.0.1"))     # True

# IPs inválidas
print(validar_ip("256.1.2.3"))    # False
print(validar_ip("192.168.1"))    # False
print(validar_ip("192.168.1.1.1")) # False
```

### Validación con Mensajes de Error
```python
def validar_ip_con_mensaje(ip):
    try:
        ipaddress.IPv4Address(ip)
        return True, None
    except ipaddress.AddressValueError:
        return False, "IP inválida: debe ser una dirección IPv4 válida"
```

## Validación Avanzada

### Rangos de IP
```python
def ip_en_rango(ip, rango_inicio, rango_fin):
    try:
        ip_obj = ipaddress.IPv4Address(ip)
        inicio = ipaddress.IPv4Address(rango_inicio)
        fin = ipaddress.IPv4Address(rango_fin)
        return inicio <= ip_obj <= fin
    except ipaddress.AddressValueError:
        return False
```

### Validación de Red
```python
def ip_en_red(ip, red):
    try:
        return ipaddress.IPv4Address(ip) in ipaddress.IPv4Network(red)
    except (ipaddress.AddressValueError, ipaddress.NetmaskValueError):
        return False
```

## Ejemplo Práctico
```python
def validar_ips_en_archivo(archivo):
    ips_validas = []
    ips_invalidas = []

    with open(archivo, 'r') as f:
        for linea in f:
            ip = linea.strip()
            if validar_ip(ip):
                ips_validas.append(ip)
            else:
                ips_invalidas.append(ip)

    return ips_validas, ips_invalidas
```

## Consejos
1. Usa el módulo `ipaddress` para validaciones robustas
2. Considera el contexto de uso (red local, internet, etc.)
3. Valida tanto el formato como los rangos de valores
4. Proporciona mensajes de error claros

## Recursos Adicionales
- [Documentación de ipaddress](https://docs.python.org/3/library/ipaddress.html)
- [RFC 791 - Internet Protocol](https://tools.ietf.org/html/rfc791)
- [IPv4 Address Space](https://www.iana.org/assignments/ipv4-address-space/ipv4-address-space.xhtml)
