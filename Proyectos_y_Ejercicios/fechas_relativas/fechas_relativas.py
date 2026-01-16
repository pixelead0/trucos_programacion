#!env python

import sys
import re
import datetime



# Estructuras de datos
#
# Las fechas se representan como cadenas de texto, de la forma YYYY-MM-DD:
#
#     "2020-10-07"  → significa: 7 de Octubre del 2020
#
# Las diferencias entre dos fechas se almacenan como tuplas, de la
# forma (años, meses, días). Por ejemplo:
#
#     (2, 1, 20)  → significa: hace dos años, 1 mes y 20 días.
#


def main():
    if len(sys.argv) != 2:
        print("Modo de uso:")
        print("")
        print("   python fechas_relativas.py archivo.md")
        print("")
        sys.exit(1)

    contenido = obtener_contenido_del_archivo(sys.argv[1])

    hoy = datetime.datetime.today().strftime('%Y-%m-%d')

    for linea in contenido:
        print(obtener_linea_con_tiempo_relativo(hoy, linea), end='')


def obtener_contenido_del_archivo(ruta_al_archivo):
    archivo = open(ruta_al_archivo, "rt")
    contenido = archivo.readlines()
    archivo.close()
    return contenido


def obtener_linea_con_tiempo_relativo(hoy, linea_original):
    regla = r"(\d+-\d+-\d+).*#.*"

    if re.match(regla, linea_original):
        resultado = re.search(regla, linea_original)
        fecha = resultado.group(1)

        relativo = obtener_texto_de_fecha_relativa(fecha, hoy)
        primer_parte = linea_original.split("#")[0]

        return f"{primer_parte}# {relativo}\n"
    else:
        return linea_original


def graficar_barra(diferencia):
    (_, meses, _) = diferencia
    return "■" *meses + "□" *(12-meses)


def días_en_el_mes(año, mes):
    """
    Retorna la cantidad de días que tiene un mes en particular, teniendo
    en cuenta que puede ser un año bisiesto.

    Por ejemplo:

        >> días_en_el_mes(2024, 1)
        31

    donde 31 son los días que tiene Enero del 2024.

    """

    # 1    enero        31 días
    # 2    febrero      28/29 días (28 días generalmente)/(29 en año bisiesto)
    # 3    marzo        31 días
    # 4    abril        30 dias
    # 5    Mayo         31 días
    # 6    junio        30 dias
    # 7    julio        31 días
    # 8    agosto       31 días
    # 9    septiembre   30 dias
    # 10   octubre      31 días
    # 11   noviembre    30 dias
    # 12   diciembre    31 días

    if mes in [1, 3, 5, 7, 8, 10, 12]:
        return 31
    elif mes in [4, 6, 9, 11]:
        return 30
    elif mes == 2:
        #
        # De wikipedia: 
        #
        #   ¿Cómo saber si un año es bisiesto? Todos los años bisiestos
        #   son divisibles entre 4. Aquellos años que son divisibles
        #   entre 4, pero no entre 100, son bisiestos. Los años que son
        #   divisibles entre 100, pero no entre 400, no son bisiestos.
        #
        es_año_bisiesto = (año % 4 == 0 and año % 100 != 0) or (año % 4 == 0 and año % 100 == 0 and año % 400 == 0)

        if es_año_bisiesto:
            return 29
        else:
            return 28


def obtener_diferencia(fecha_1, fecha_2):
    """
    Retorna la diferencia de años, meses y días en
    forma de tupla entre dos fechas.

    Por ejemplo:

        >> obtener_diferencia("2022-01-01", "2022-05-06")
        (0, 4, 5)

    donde 0 son la cantidad de años, 4 los meses y 5 los días.
    """
    año_1, mes_1, día_1 = (int(x) for x in fecha_1.split("-"))
    año_2, mes_2, día_2 = (int(x) for x in fecha_2.split("-"))

    años = año_2 - año_1
    meses = mes_2 - mes_1
    días = día_2 - día_1

    if días < 0:
        días += días_en_el_mes(año_1, mes_1)
        meses -= 1

    if meses < 0:
        años -= 1
        meses += 12

    return (años, meses, días)


def obtener_texto(diferencia):
    (años, meses, días) = diferencia

    # Textos
    _a = "años" if años > 1 else "año"
    _m = "meses" if meses > 1 else "mes"
    _d = "días" if días > 1 else "día"

    if años:
        if meses and días:
            return f"Hace {años} {_a}, {meses} {_m} y {días} {_d}" 
        elif meses:
            return f"Hace {años} {_a} y {meses} {_m}" 
        elif días:
            return f"Hace {años} {_a} y {días} {_d}" 
        else:
            return f"Hace {años} {_a}" 

    if meses:
        if días:
            return f"Hace {meses} {_m} y {días} {_d}" 
        else:
            return f"Hace {meses} {_m}" 

    if días:
        return f"Hace {días} {_d}" 

    if años == 0 and meses == 0 and días == 0:
        return "Hoy"

    return "??"


def obtener_texto_aniversario(fecha_de_hoy, diferencia):
    año, mes, _ = (int(x) for x in fecha_de_hoy.split("-"))
    (años, meses, días) = diferencia

    total_de_días = días_en_el_mes(año, mes)

    if meses == 0 and días == 0:
        return "hoy"

    if meses == 11:
        días_para_el_aniversario = total_de_días - días
        if días_para_el_aniversario == 1:
            return "mañana"
        else:
            return f"aniversario en {días_para_el_aniversario} días"
    else:
        return ""


def obtener_texto_de_fecha_relativa(fecha_de_hoy, fecha_del_evento):
    diferencia = obtener_diferencia(fecha_de_hoy, fecha_del_evento)
    barra = graficar_barra(diferencia)
    texto = obtener_texto(diferencia)

    aniversario = obtener_texto_aniversario(fecha_de_hoy, diferencia)

    if aniversario:
        return f"⭐️ {barra} - ({aniversario}) - {texto}"
    else:
        return f".. {barra} - {texto}"


def test():
    # Graficos
    assert graficar_barra((0, 4, 5)) == "■■■■□□□□□□□□"
    assert graficar_barra((0, 0, 5)) == "□□□□□□□□□□□□"
    assert graficar_barra((0, 9, 0)) == "■■■■■■■■■□□□"

    # Caso más simple, hoy:
    assert obtener_diferencia("2022-01-01", "2022-01-01") == (0, 0, 0)

    # Fecha pasada, cada término es positivo:
    assert obtener_diferencia("2022-01-01", "2022-05-06") == (0, 4, 5)

    # Fecha pasada, pero un término negativo en días:
    assert obtener_diferencia("2022-01-10", "2022-02-01") == (0, 0, 22) 

    # Caso especial, contenplando año bisiestos como 2024 y no bisiesto
    # como 2023:
    assert obtener_diferencia("2024-02-20", "2024-03-01") == (0, 0, 10) 
    assert obtener_diferencia("2023-02-20", "2023-03-01") == (0, 0, 9) 

    # Diferencias como fechas
    assert obtener_texto((0, 0, 0)) == "Hoy"
    assert obtener_texto((0, 1, 0)) == "Hace 1 mes"
    assert obtener_texto((0, 2, 0)) == "Hace 2 meses"
    assert obtener_texto((0, 2, 4)) == "Hace 2 meses y 4 días"
    assert obtener_texto((2, 2, 4)) == "Hace 2 años, 2 meses y 4 días"
    assert obtener_texto((6, 0, 0)) == "Hace 6 años"

    # Cerca de un aniversario
    assert obtener_texto_aniversario("2022-01-01", (0, 0, 0)) == "hoy"
    assert obtener_texto_aniversario("2022-01-01", (0, 11, 3)) == "aniversario en 28 días"
    assert obtener_texto_aniversario("2022-01-01", (0, 11, 30)) == "mañana"

    # Lejos de un aniversario
    assert obtener_texto_de_fecha_relativa("2022-01-01", "2022-05-06") == ".. ■■■■□□□□□□□□ - Hace 4 meses y 5 días"
    assert obtener_texto_de_fecha_relativa("2022-01-01", "2023-05-06") == ".. ■■■■□□□□□□□□ - Hace 1 año, 4 meses y 5 días"

    # Fechas cerca de un aniversario
    assert obtener_texto_de_fecha_relativa("2022-10-07", "2023-10-01") == "⭐️ ■■■■■■■■■■■□ - (aniversario en 6 días) - Hace 11 meses y 25 días"
    assert obtener_texto_de_fecha_relativa("2022-10-07", "2023-09-30") == "⭐️ ■■■■■■■■■■■□ - (aniversario en 8 días) - Hace 11 meses y 23 días"


# para correr los test, ejecutar esta linea:
# test()

main()
