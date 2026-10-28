# Comprobación del rediseño — 28 de octubre de 2026

## Ejecutado

- `node --check js/script.js`: sintaxis correcta.
- Comprobación local de referencias src/href y JSON-LD: sin archivos ausentes, JSON válido.
- Chrome headless local, emulación a 375, 768, 1440 y 1920 px: sin desbordamiento horizontal, sin imágenes rotas y sin anclas internas inexistentes.
- Capturas completas: .qa/redesign-375.png, redesign-768.png, redesign-1440.png y redesign-1920.png.
- Menú a 375 px: abre y se cierra al seguir un enlace.
- Visor: abre, avanza, retrocede, pasa de la primera a la última, responde a flechas del teclado, cierra mediante su botón y devuelve el foco al enlace inicial.
- prefers-reduced-motion: la animación de portada queda desactivada.
- Todas las imágenes mostradas, incluidas las seis WebP finales, se decodificaron correctamente en el navegador.
- Hoja de contacto con las diez fotografías originales revisada antes del diseño.

Resultados automáticos: .qa/redesign-results.json. Comprobación: .qa/redesign-check.cjs. Las capturas antiguas screen-*.png y results.json corresponden a la versión anterior.

## Límites

La emulación de Chrome no sustituye una prueba en Safari ni un iPhone físico. No se ha probado envío real de email, apertura de aplicaciones externas, portapapeles, gestos táctiles físicos ni disponibilidad de servicios externos. No se han vuelto a consultar los directorios externos: los datos proceden de la documentación existente. No se ha desplegado la página.
