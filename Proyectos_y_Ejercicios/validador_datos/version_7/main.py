import logging
import sys
from config import cargar_configuracion
from procesador import procesar_archivo

def configurar_logging(nivel: str, formato: str):
    """
    Configura el sistema de logging.

    Args:
        nivel: Nivel de logging (DEBUG, INFO, WARNING, ERROR, CRITICAL)
        formato: Formato de los mensajes de log
    """
    logging.basicConfig(
        level=getattr(logging, nivel),
        format=formato,
        handlers=[
            logging.StreamHandler(sys.stdout),
            logging.FileHandler('validacion.log')
        ]
    )

def main():
    try:
        # Cargar configuración
        config = cargar_configuracion()

        # Configurar logging
        configurar_logging(config.nivel_log, config.validaciones.get('formato', '%(asctime)s - %(name)s - %(levelname)s - %(message)s'))

        logger = logging.getLogger(__name__)
        logger.info("Iniciando proceso de validación")

        # Procesar el archivo
        df_validos, df_invalidos, errores = procesar_archivo(config)

        # Mostrar resultados
        logger.info("\nResultados de la validación:")
        logger.info(f"Total de filas: {len(df_validos) + len(df_invalidos)}")
        logger.info(f"Filas válidas: {len(df_validos)}")
        logger.info(f"Filas inválidas: {len(df_invalidos)}")

        if errores:
            logger.warning("\nErrores encontrados:")
            for error in errores:
                logger.warning(f"\nFila {error.fila}:")
                logger.warning(f"Campo: {error.campo}")
                logger.warning(f"Valor: {error.valor}")
                logger.warning(f"Error: {error.mensaje}")

        # Guardar resultados
        if not df_validos.empty:
            df_validos.to_csv(config.archivo_validos, index=False)
            logger.info(f"\nDatos válidos guardados en '{config.archivo_validos}'")

        if not df_invalidos.empty:
            df_invalidos.to_csv(config.archivo_invalidos, index=False)
            logger.info(f"Datos inválidos guardados en '{config.archivo_invalidos}'")

    except Exception as e:
        logger.error(f"Error al procesar el archivo: {e}", exc_info=True)
        sys.exit(1)

if __name__ == "__main__":
    main()
