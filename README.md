# Alojamiento Rural Las Buganvillas

Web estática original, en español, realizada con HTML5, CSS3 y JavaScript vanilla. Abrir `index.html` con Live Server. No requiere instalación, compilación ni servicios externos. No se ha desplegado. Todos los recursos visuales y tipográficos se sirven localmente.

## Contenido e investigación

Revisión: 27 de octubre de 2026.

- Datos facilitados por el cliente: nombre, referencia Sierra de Grazalema, dirección Diseminado de las Cuevas, 150, 11670 El Bosque, Cádiz, y correo casarural.lasbuganvillas@gmail.com.
- [ACARUCA, asociación de casas rurales de Cádiz](https://www.acaruca.com/es/casa-rural/vr-ca-00456/): coincide en nombre y dirección. Publica 8 huéspedes, 2 dormitorios y 1 baño; piscina, terraza, barbacoa, aparcamiento, chimenea, lavadora, microondas, televisión, menaje, tostadora y admisión de animales.
- [Alojamientos Rurales](https://www.alojamientosrurales.es/casa-rural/cadiz/casa-rural-las-buganvillas): contraste de capacidad, dormitorios, piscina y cocina. No se reproduce su texto.
- [TusCasasRurales](https://www.tuscasasrurales.com/alojamiento-rural-las-buganvillas-f12371.htm): ficha retirada; no se utiliza para dar por vigentes servicios adicionales.
- [Casasrurales.net](https://www.casasrurales.net/casas-rurales/casa-las-buganvillas--c56702): contraste de cocina, piscina, dormitorios y baño. Su dirección difiere, por lo que prevalece la facilitada y coincidente en ACARUCA.
- [Junta de Andalucía, Parque Natural Sierra de Grazalema](https://www.juntadeandalucia.es/medioambiente/portal/landing-page/-/asset_publisher/4V1kD5gLiJkq/content/parque-natural-sierra-de-grazalema-8/20151): contexto geográfico, provincias, relieve calizo y El Bosque como municipio del parque.
- Blog atribuido al alojamiento por directorios: https://alojamiento-rural-lasbuganvillas.blogspot.com/ . No accesible durante la investigación; no se atribuye vigencia ni autorización fotográfica.

Los directorios discrepan en camas, registro turístico y precios. Se omiten estos datos, valoraciones, Wi-Fi, climatización, normas de entrada/salida y medidas de accesibilidad. No se ha localizado una red social oficial ni un motor propio de reservas verificable. Se mantiene el email indicado por el cliente como contacto principal. La admisión de animales y el uso de piscina se acompañan de una invitación a confirmar condiciones. Las fichas públicas no garantizan disponibilidad para fechas concretas.

## Fotografías y licencias

No se ha acreditado una licencia de reutilización para las fotografías reales del alojamiento. Se enlaza la ficha de ACARUCA para verlas; no se copian ni se sustituyen por interiores de otra casa. La web utiliza solamente dos fotografías reales del entorno regional, identificadas en pies, textos alternativos y créditos. **No representan la casa ni sus vistas.** No se genera un recorrido de espacios ficticio.

| Archivo | Procedencia y autor | Licencia | Tratamiento |
| --- | --- | --- | --- |
| `img/zahara.jpg` | [Embalse Zahara - EL Gastor.jpg](https://commons.wikimedia.org/wiki/File:Embalse_Zahara_-_EL_Gastor.jpg), Valleuve | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | JPEG original de 3474 × 4604, redimensionado a 1400 × 1855 y comprimido; recorte de presentación CSS |
| `img/majaceite.jpg` | [Majaceite P1150025.JPG](https://commons.wikimedia.org/wiki/File:Majaceite_P1150025.JPG), El Pantera | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) | JPEG original de 1600 × 1200, recomprimido; recorte de presentación CSS |

Los archivos adaptados mantienen sus respectivas licencias CC BY-SA. Descarga desde Wikimedia Commons, formato JPEG y dimensiones comprobados mediante System.Drawing; decodificación y presentación comprobadas en Chrome. Créditos y enlaces de licencia disponibles también en el footer. No se encontraron referencias a estos dos archivos en los README de los otros proyectos consultados.

Fuentes locales: Bodoni Moda y Manrope, procedentes de sus directorios en [Google Fonts](https://github.com/google/fonts/tree/main/ofl). Licencias SIL Open Font License en `css/bodoni-license.txt` y `css/manrope-license.txt`. Favicon propio en SVG.

## Diseño y comportamiento

Portada con nombre completo y ventana rectangular independiente del texto; navegación con enlaces visibles en escritorio y menú desplegable en móvil. Ficha horizontal, listado editorial desplegable, composición de paisaje, gráfico de ubicación sin escala y carta de contacto. Paleta cal, buganvilla, olivo, terracota y tinta. Ninguna fotografía lleva titulares superpuestos.

Email con asunto predefinido; copiar correo con Clipboard API y alternativa para contextos no seguros; dirección en Google Maps mediante consulta textual sin coordenadas inventadas; fotografía del río ampliable en diálogo con cierre por Escape; acordeones HTML nativos. Sin formularios ficticios ni reserva inmediata. Sin cookies, analítica, frameworks ni dependencias de ejecución.

SEO local y JSON-LD LodgingBusiness limitados a identidad, dirección y correo confirmados. Open Graph preparado con imagen relativa: al publicarse en un dominio deberá configurarse su URL absoluta y añadirse la URL canónica real. No se inventa dominio para una entrega local.

La carpeta `.qa/`, excluida del control de versiones, contiene el servidor y las comprobaciones locales, resultados y capturas. Consultar `VALIDACION.md` para el alcance de las pruebas y las limitaciones.
