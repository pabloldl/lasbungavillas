# Validación local

Fecha: 27 de octubre de 2026. Navegador: Google Chrome headless, controlado por Chrome DevTools Protocol.

## Pruebas ejecutadas

- Capturas completas y revisión visual a 375, 768, 1440 y 1920 px. Corregidos el ajuste del nombre en móvil, el botón de menú en escritorio y el encuadre de portada. Sin desbordamiento horizontal en las mediciones finales. LAS BUGANVILLAS permanece completo, con salto entre palabras en móvil.
- Todas las imágenes decodificadas correctamente en los cuatro anchos, incluidas las diferidas al solicitar su carga. JPEG reales: 1400 × 1855 y 1600 × 1200. No hay imágenes de otras propiedades.
- Menú móvil: apertura y cierre al seguir un enlace comprobados.
- Desplegable de equipamiento: apertura comprobada.
- Ampliación fotográfica: apertura y cierre por botón comprobados.
- Copiar correo: escritura real y lectura del portapapeles en Chrome con permisos de prueba y documento enfocado. Valor obtenido: casarural.lasbuganvillas@gmail.com. Mensaje de éxito verificado. La alternativa de copia para contextos no seguros no se ha ejecutado.
- Preferencia de movimiento reducido emulada: reconocida; animación de portada desactivada.
- Enlaces internos: todos los destinos existen. Rutas locales: sin archivos ausentes. Sintaxis JavaScript validada con `node --check`. JSON-LD parseado correctamente.
- Contrastes calculados: tinta/cal 11,15:1; buganvilla/cal 4,89:1. El texto buganvilla sobre papel rosado se reserva a titulares y firma grandes; el botón usa texto cal sobre buganvilla.
- Dirección de email, asunto y consulta de Google Maps revisados en el HTML. No se ha enviado ningún email ni se ha abierto una aplicación de correo; tampoco se han probado las indicaciones externas de Maps.

## Accesibilidad implementada y límites

HTML semántico, idioma español, enlace de salto, foco visible, controles nativos, `aria-expanded` en menú, estado de copia anunciado, diálogo modal nativo y textos alternativos. No se ha realizado auditoría con lector de pantalla, recorrido completo con teclado ni validación externa W3C; no se afirma certificación de accesibilidad. La preferencia de movimiento reducido sí se ha probado.

## Originalidad

Se consultaron HTML y CSS de La Casa del Muro, La Cascada y Manantial de los Cañitos. Las fuentes, navegación, título inicial, ficha horizontal y contacto epistolar se implementaron específicamente para este proyecto. No se ejecutó una comparación visual lado a lado con esos sitios; no se afirma haberla realizado. No se copiaron sus archivos ni sus imágenes.

## Material pendiente de la propiedad

Para ofrecer un recorrido fotográfico propio se necesitan fotografías de Las Buganvillas con autorización de uso acreditada. Mientras tanto se enlaza la ficha pública con fotografías reales y se identifican claramente las imágenes regionales. No hay datos de disponibilidad en tiempo real. Precios, número de camas y registro turístico se omiten por discrepancias entre fuentes.

La entrega es local. Antes de una publicación futura, configurar dominio real, canonical y Open Graph absoluto, y confirmar con la propiedad los servicios y sus condiciones vigentes.
