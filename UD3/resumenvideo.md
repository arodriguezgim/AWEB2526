Este es un tutorial detallado en formato Markdown, basado en el contenido del video, cubriendo los conceptos esenciales de CSS para comenzar a trabajar inmediatamente $$.

***

# Tutorial Completo de CSS (Cascading Style Sheets)

## 1. Fundamentos de CSS

CSS significa **Cascading Style Sheets** (Hojas de Estilo en Cascada) $$. Su propósito es describir la presentación de un documento escrito con HTML $$. Un documento HTML puede tener múltiples estilos escritos con CSS, permitiendo que el mismo HTML se presente de maneras completamente distintas $$.

### Estructura del Código CSS

CSS funciona en base a **selectores** $$. Un selector identifica los elementos dentro del documento HTML a los que se aplicarán los estilos $$.

La estructura básica de una regla CSS es:
1.  Escribir el **selector** $$.
2.  Agregar paréntesis de llaves `{}` $$.
3.  Dentro, colocar las **propiedades** seguidas de dos puntos `:` $$.
4.  A continuación, el **valor** de la propiedad $$.
5.  Finalizar con un **punto y coma** `;` $$.

**Ejemplo de Estructura CSS:**
```css
selector {
  propiedad: valor;
}
```

## 2. Métodos para Incluir CSS en HTML

Existen tres maneras de utilizar código CSS en archivos HTML $$.

### a. Estilos Inline (La peor forma)

Se escribe código CSS directamente dentro de las etiquetas de HTML, utilizando la propiedad `style` $$.

**Ejemplo (index.html):**
```html
<body style="color: tomato;">
  Chanchito feliz
</body>
```
*   **Nota:** Esta es considerada la peor forma de aplicar CSS $$.

### b. Etiqueta `<style>` (No tan mala)

Se utiliza la etiqueta `<style>` dentro del `<head>` del documento HTML para escribir CSS interno $$.

**Ejemplo (index.html):**
```html
<head>
  <style>
    body {
      color: tomato; /* Selector de etiqueta */
    }
  </style>
</head>
<body>
  Chanchito feliz
</body>
```
*   Aquí se utiliza el selector de etiqueta `body` para aplicar el estilo $$.

### c. Archivo Externo (La mejor forma)

Se crea un archivo `.css` separado (por ejemplo, `style.css`) y se importa dentro del `<head>` del HTML utilizando la etiqueta `<link>` $$.

**Ejemplo (index.html):**
```html
<head>
  <link rel="stylesheet" href="style.css" />
</head>
```
*   La propiedad `rel` (relación) indica que es una hoja de estilos (`stylesheet`) $$.
*   `href` indica la ubicación del archivo CSS $$.

**Ejemplo (style.css):**
```css
body {
  color: tomato;
}
```

## 3. Selectores de CSS en Detalle

Los selectores permiten apuntar a elementos específicos o grupos de elementos en el HTML $$.

### a. Selector de Etiqueta (Tag)
Selecciona todos los elementos de ese tipo de etiqueta HTML $$.

**Ejemplo:**
```css
p { /* Selecciona todas las etiquetas <p> */
  color: SlateBlue;
}
```

### b. Selector de ID
Selecciona un elemento único basado en su atributo `id`. Se utiliza el símbolo de numeral `#` $$.

**Ejemplo (index.html):**
```html
<h1 id="titulo">Título</h1>
```

**Ejemplo (style.css):**
```css
#titulo {
  color: tomato; /* Aplica estilo al elemento con id="titulo" */
}
```

### c. Selector de Clase
Selecciona elementos que comparten un atributo `class`. Se utiliza un punto `.` $$.

**Ejemplo (index.html):**
```html
<p class="texto">Párrafo 1</p>
<p class="texto">Párrafo 2</p>
```

**Ejemplo (style.css):**
```css
.texto {
  color: SlateBlue; /* Aplica estilo a todos los elementos con class="texto" */
}
```

### d. Combinación de Selectores (Etiqueta y Clase)
Permite seleccionar una etiqueta específica *que también* contenga una clase particular $$.

**Ejemplo (style.css):**
```css
p.texto {
  /* Asigna estilo solo a etiquetas <p> que tengan la clase "texto" */
  color: SlateBlue;
}
```

### e. Selectores Descendientes
Selecciona elementos que se encuentran anidados dentro de otro elemento. Se utiliza un espacio para indicar la relación "hijo", "nieto", etc. $$.

**Ejemplo (style.css):**
```css
div p {
  /* Selecciona todas las etiquetas <p> que se encuentren dentro de cualquier <div> */
  color: aquamarine;
}

div h2 {
  /* Selecciona todos los <h2> dentro de <div> */
  color: brown;
}
```

### f. Seleccionar Múltiples Elementos
Se utiliza la coma `,` para aplicar el mismo estilo a varios selectores distintos $$.

**Ejemplo (style.css):**
```css
div h2, div h3 {
  /* Aplica color brown a h2 y h3 que estén dentro de un div */
  color: brown;
}
```

### g. Selector Universal (`*`)
Selecciona absolutamente todos los elementos dentro del HTML $$.

**Ejemplo (style.css):**
```css
* {
  font-size: 24px;
}
```
*   **Importante:** Las propiedades definidas por el selector universal **no** sobrescribirán estilos que ya hayan sido definidos por selectores más específicos, incluso si el selector universal se coloca después $$.

### h. La Importancia del Orden
El orden en el que se escribe el código CSS es crucial $$. La última instrucción definida en el código CSS tiene **prioridad** sobre las instrucciones anteriores, siempre que la especificidad del selector sea similar $$.

## 4. Comentarios en CSS

Los comentarios sirven para dejar mensajes a desarrolladores futuros o a uno mismo, ya que el intérprete de CSS no toma en cuenta lo que está dentro $$.

**Sintaxis:**
```css
/* Esto es un comentario */
selector {
  propiedad: valor; /* Comentario después de la propiedad */
}
```
*   Los comentarios comienzan con `/*` y terminan con `*/` $$. Pueden ser de una sola línea o de múltiples líneas $$.

## 5. Propiedades de Color

La propiedad `color` asigna un color a la fuente o al texto $$. Existen diversas formas de definir colores $$.

| Convención | Ejemplo | Descripción |
| :--- | :--- | :--- |
| **Palabra clave** | `tomato`, `black`, `white`, `SlateBlue` | Nombres de colores predefinidos $$. |
| **Hexagesimal** | `#RRGGBB` o `#RGB` | Utiliza un numeral (`#`) seguido de 3 o 6 caracteres (0-9, A-F) $$. FF o F representa la mayor intensidad, 00 o 0 representa la ausencia $$. |
| **RGB** | `rgb(R, G, B)` | Define colores usando valores de 0 a 255 para Rojo, Verde y Azul $$. |
| **RGBA** | `rgba(R, G, B, A)` | Similar a RGB, pero agrega un cuarto valor (A, Alpha) de 0 a 1 para indicar la **opacidad** (transparencia) del color $$. |

**Ejemplos de Colores Hexagesimales:**
*   Negro (Ausencia de color): `#000` o `#000000` $$.
*   Blanco (Presencia de color): `#fff` $$.
*   Rojo Intenso: `#f00` o `#ff0000` $$.

**Ejemplo de RGBA para transparencia:**
```css
.fondo {
  background-color: rgba(0, 0, 0, 0.3); /* Negro con 30% de opacidad */
}
```

### Opacidad de Elementos
Para aplicar transparencia al **elemento completo** (incluyendo contenido e hijos), se usa `opacity` con un valor entre 0 (transparente) y 1 (sólido) $$.

**Ejemplo:**
```css
.elemento {
  opacity: 0.3; /* El elemento completo es 30% visible */
}
```

## 6. Propiedades de Borde (`border`)

La propiedad `border` permite asignar un borde a los elementos HTML $$.

### Atajo (`Shorthand`)
El atajo de `border` combina grosor, estilo y color en una sola línea $$.

**Ejemplo:**
```css
border: 5px solid red; /* Grosor (ancho), Estilo, Color */
```

### Estilos de Borde Comunes
El estilo del borde se indica con el tercer valor $$. Opciones comunes son:
*   `solid`: Línea completamente sólida $$.
*   `dashed`: Línea punteada (guiones) $$.
*   `dotted`: Puntos $$.
*   `double`, `groove`, `ridge`, `inset`, `outset`, `none`, `hidden` $$.

### Propiedades Individuales
Se pueden asignar propiedades de borde por separado $$:

| Propiedad | Descripción | Ejemplo |
| :--- | :--- | :--- |
| `border-style` | Define el estilo (e.g., `solid`) $$. | `border-style: solid;` |
| `border-color` | Define el color (e.g., `blue`) $$. | `border-color: blue;` |
| `border-width` | Define el grosor (e.g., `5px`) $$. | `border-width: 5px;` |
| `border-radius` | Asigna esquinas redondeadas $$. | `border-radius: 5px;` |

## 7. Unidades de Medida en CSS

Las unidades se utilizan para asignar dimensiones (ancho, alto, grosor, tamaño de fuente) $$.

### a. Medidas Absolutas
No cambian en relación al tamaño del dispositivo, aunque su visualización puede ser subjetiva $$.

*   `px` (píxeles): La unidad mínima utilizada en la web $$.
*   `cm` (centímetros) $$.
*   `mm` (milímetros) $$.
*   `in` (pulgadas) $$.
*   `pt` (puntos): Un $1/72$ de pulgada $$.
*   `pc` (picas): 12 puntos $$.

### b. Medidas Relativas (Recomendadas)
Se toman como base un elemento de referencia, siendo más flexibles para diferentes dispositivos $$.

*   `em`: Es relativo al tamaño de la fuente que se utiliza **actualmente** en el elemento $$. `2em` significa dos veces el tamaño de la fuente actual $$.
*   `rem`: Es relativo al tamaño de la fuente del **elemento raíz** (la etiqueta `<html>`) $$. Por defecto, la mayoría de los navegadores utilizan 16 píxeles para el elemento raíz, por lo que `1rem` es generalmente 16px, a menos que se cambie el tamaño de la fuente de `html` $$.

## 8. Propiedades de Fondo (`background`)

Manipulan el fondo de los elementos HTML $$.

### Color de Fondo
La propiedad `background-color` acepta todas las convenciones de color (palabra clave, hexagesimal, RGB, RGBA) $$.

**Ejemplo:**
```css
background-color: chocolate;
```

### Imagen de Fondo
Se usa `background-image` e indica la ubicación de la imagen con `url()` $$.

**Ejemplo:**
```css
background-image: url('coffee.png');
```

### Tamaño del Fondo (`background-size`)
Permite redimensionar la imagen de fondo $$.

| Valor | Descripción |
| :--- | :--- |
| `auto` | Detecta el tamaño de forma automática (valor por defecto) $$. |
| `cover` | Escala la imagen para cubrir todo el ancho disponible, manteniendo la proporción $$. |
| `contain` | Contiene la imagen dentro de las dimensiones del elemento (puede repetirse) $$. |
| Dimensiones | Se pueden indicar ancho y alto específicos (e.g., `400px 400px`) $$. |

### Repetición del Fondo (`background-repeat`)
Controla si la imagen de fondo se repite $$.

**Valores Comunes:**
*   `no-repeat`: La imagen aparece solo una vez $$.
*   `repeat-x`: La imagen se repite solo en el eje horizontal $$.
*   `repeat-y`: La imagen se repite solo en el eje vertical $$.

### Posición del Fondo (`background-position`)
Cambia la posición donde comienza el fondo. Recibe un valor horizontal (ej: `left`, `center`, `right`) y uno vertical (ej: `top`, `center`, `bottom`) $$.

**Ejemplo:**
```css
background-position: Center bottom;
```

### Atajo de `background`
Permite definir color, URL, repetición y posición en una sola propiedad $$.

**Ejemplo:**
```css
background: #f00 url('coffee.png') repeat-y Center bottom;
```
*   **Nota:** Si se usa el atajo `background`, la propiedad `background-size` debe definirse después si no se incluye en el atajo, o se puede incluir al final del atajo usando `/` para separar la posición de las dimensiones (ej: `Center bottom / 100px 100px`) $$.

## 9. Modelo de Caja (Box Model)

Todo elemento HTML se posiciona utilizando el **Box Model**, que consta de cuatro componentes, de afuera hacia adentro: **Margin, Border, Padding y Content** $$.

### a. Margen (`margin`)
Agrega espacio **por fuera** del elemento $$.

### b. Relleno (`padding`)
Agrega espacio **dentro** del elemento, entre el contenido y el borde. El color de fondo cubre el relleno $$.

### c. Borde (`border`)
Se posiciona entre el `padding` y el `margin` $$.

### d. Contenido (`content`)
El ancho (`width`) y alto (`height`) especificados en CSS se refieren **solamente** a las dimensiones del contenido, no incluyendo padding, borde o margen $$.

Para calcular el ancho total de un elemento, debe sumarse el `width` más el `padding` (izquierdo y derecho), el `border` (izquierdo y derecho), y el `margin` (izquierdo y derecho) $$.

### Atajos para Margin y Padding

Se pueden asignar valores a los cuatro lados utilizando una sola propiedad (`margin` o `padding`):

| Número de Valores | Orden de Asignación | Ejemplo | Descripción |
| :--- | :--- | :--- | :--- |
| **Cuatro** | Top, Right, Bottom, Left (en sentido horario) $$ | `margin: 15px 20px 25px 30px;` | Asigna un valor a cada lado $$. |
| **Dos** | Vertical, Horizontal $$ | `padding: 30px 15px;` | 30px superior/inferior, 15px izquierda/derecha $$. |
| **Uno** | Todos los lados $$ | `margin: 15px;` | 15px en todos los lados $$. |
| **Tres** | Top, Horizontal, Bottom $$ | `padding: 5px 15px 30px;` | 5px superior, 15px izquierda/derecha, 30px inferior $$. |

### Ancho y Alto
*   `width`: Asigna un ancho fijo al contenido $$.
*   `height`: Asigna un alto fijo al contenido $$.

### Ancho Máximo (`max-width`)
Asigna un ancho máximo. Si el espacio disponible es menor a este valor, el ancho se reducirá. Esto es útil para adaptabilidad $$.

**Ejemplo:**
```css
max-width: 300px;
```

### Desbordamiento (`overflow`)
Controla lo que sucede si el contenido excede las dimensiones del elemento $$.

*   `visible` (Por defecto): El contenido desbordado se muestra $$.
*   `hidden`: El contenido desbordado se oculta $$.
*   `scroll`: Agrega barras de desplazamiento para ver el contenido desbordado $$.

### Delineado (`outline`)
Similar a un borde, pero se coloca **fuera** del borde y **antes** del margen $$.

**Ejemplo:**
```css
outline: 1px solid red;
```

## 10. Estilos de Texto y Fuente

### Alineación de Texto (`text-align`)
Controla la alineación del texto dentro del elemento $$.

**Valores:**
*   `center`: Centra el texto $$.
*   `left`: Alinea a la izquierda (por defecto) $$.
*   `right`: Alinea a la derecha $$.
*   `justify`: Agrega espacio entre palabras para utilizar todo el ancho disponible, excepto en la última línea $$.

### Decoración de Texto (`text-decoration`)
Permite aplicar líneas al texto $$.

**Valores:**
*   `none`: Quita cualquier decoración (útil para enlaces) $$.
*   `underline`: Subraya el texto $$.
*   `line-through`: Tacha el texto $$.
*   `overline`: Coloca una línea encima del texto $$.

### Sombra de Texto (`text-shadow`)
Asigna una sombra al texto. Recibe valores para el desplazamiento horizontal, desplazamiento vertical, y opcionalmente el desenfoque (`blur`) y el color $$.

**Ejemplo:**
```css
text-shadow: 3px 5px 5px blue; /* Desplazamiento X, Desplazamiento Y, Blur, Color */
```

### Fuente (`font-family`)
Cambia el estilo de la fuente. Se pueden indicar múltiples fuentes como *fallback* (alternativas) $$.

**Ejemplo:**
```css
font-family: 'roboto', sans-serif;
/* Intenta cargar 'roboto', si falla usa 'sans-serif' */
```
*   **Fuentes Personalizadas:** Se pueden importar fuentes externas, como las de Google Fonts, agregando la etiqueta `<link>` provista por el servicio en el `<head>` del HTML antes de importar el archivo CSS $$.

## 11. Estados de Enlaces (Pseudo-clases)

Los enlaces (`<a>`) tienen cuatro posibles estados a los que se les puede aplicar estilo usando pseudo-clases $$.

| Pseudo-clase | Descripción |
| :--- | :--- |
| `:link` | Cuando el enlace **no** ha sido visitado $$. |
| `:visited` | Cuando el enlace **ha sido** visitado $$. |
| `:hover` | Cuando el ratón pasa por encima del enlace $$. |
| `:active` | Cuando el enlace está siendo presionado $$. |

**Orden de Prioridad:** El orden en el que se colocan estos estilos es **sumamente importante** $$.
1.  `:link`
2.  `:visited`
3.  `:hover`
4.  `:active`

**Ejemplo (style.css):**
```css
a:link {
  color: BlueViolet; /* Enlace no visitado */
}
a:visited {
  color: gray; /* Enlace visitado */
}
a:hover {
  color: yellow; /* Ratón encima */
}
a:active {
  color: red; /* Si se está pinchando */
}
```
*   Cualquier propiedad CSS vista (color de fondo, borde, etc.) puede aplicarse a estos selectores de estado $$.

## 12. Listas y Tablas

### Listas (`<ul>`, `<ol>`, `<li>`)

| Propiedad | Descripción | Ejemplo |
| :--- | :--- | :--- |
| `list-style-type` | Cambia el marcador de la lista $$. | `list-style-type: none;` (para quitar los puntos) $$. |
| `list-style-position` | Indica si el marcador está dentro o fuera del contenido de la lista $$. | `list-style-position: inside;` $$. |

*   Por defecto, las listas suelen tener un `padding-left` que puede necesitar ser reseteado a cero $$.

### Tablas (`<table>`, `<th>`, `<td>`, `<tr>`)

**Colapsar Bordes:** Para eliminar la separación entre celdas, se aplica `border-collapse` a la tabla $$.

**Ejemplo:**
```css
table {
  border-collapse: collapse;
}
```

**Filas Alternas (`nth-child`):** Permite seleccionar elementos pares o impares dentro de un listado (como las filas de una tabla) $$.

**Ejemplo:**
```css
tr:nth-child(odd) { /* Filas impares */
  background-color: #eee;
}
tr:nth-child(even) { /* Filas pares */
  background-color: white;
}
```

**Efecto Hover en Filas:** Se puede aplicar un estilo cuando el cursor pasa sobre la fila $$.

**Ejemplo:**
```css
tr:hover {
  background-color: #aaa;
  cursor: pointer; /* Cambia el cursor a una manito */
}
```

## 13. Propiedad `display`

La propiedad `display` indica cómo se posicionan los elementos HTML en el documento $$.

| Valor | Descripción | Comportamiento |
| :--- | :--- | :--- |
| `block` | Utiliza todo el ancho disponible y fuerza un salto de línea para el siguiente elemento $$. (Ej: `<div>`, `<p>`) $$. | **Permite** asignar `width` y `height` $$. |
| `inline` | Solo utiliza el ancho necesario para su contenido. Los elementos se colocan uno al lado del otro $$. (Ej: `<span>`, `<a>`, `<img>`) $$. | **No permite** asignar `width` ni `height` $$. |
| `inline-block` | Combina `inline` (no fuerza salto de línea) y `block` (permite `width` y `height`) $$. | Ideal para menús de navegación con ancho fijo $$. |
| `none` | El elemento desaparece completamente del flujo del documento $$. |

**Ocultar Elementos:**
*   `display: none;` (Elimina el elemento del flujo) $$.
*   `visibility: hidden;` (Oculta el elemento, pero mantiene su espacio en el flujo del documento) $$.

## 14. Posicionamiento (`position`)

Permite posicionar elementos en distintas partes de la pantalla $$.

| Valor | Descripción |
| :--- | :--- |
| `static` | Valor por defecto. El elemento sigue el flujo normal del documento $$. |
| `relative` | Posición relativa a donde debiese estar originalmente. Se mueve con respecto a su posición normal usando `top`, `bottom`, `left`, `right` $$. |
| `fixed` | Posición fija con respecto a la ventana de visualización (viewport). Se mantiene en su lugar al hacer scroll $$. |
| `absolute` | Posición relativa al elemento padre posicionado más cercano (si no hay ninguno, usa `<body>`) $$. No se mueve al hacer scroll $$. |
| `sticky` | Es una mezcla de `relative` y `fixed`. El elemento se comporta como `relative` hasta que alcanza una posición de desplazamiento definida (ej: `top: 25px`), momento en el que se vuelve fijo $$. |

## 15. Flotación (`float`)

Hace "flotar" los elementos a la izquierda o derecha dentro de su contenedor $$. Esto permite alinear elementos uno al lado del otro, como imágenes y texto circundante $$.

**Valores:**
*   `float: left;` $$.
*   `float: right;` $$.

**Comportamiento:**
Si un elemento tiene `float: left;`, los elementos posteriores se posicionarán a su derecha $$.

## 16. Centrado de Elementos

### Centrado Horizontal de Bloques
Para centrar un elemento de bloque (como un `div` o `section`) horizontalmente, se necesita $$:
1.  Asignar un ancho (`width`) que sea menor al 100% $$.
2.  Aplicar `margin: 0 auto;` $$.

**Ejemplo (style.css):**
```css
.center {
  width: 200px;
  margin: 0 auto; /* Cero vertical, auto horizontal */
  background-color: Aqua;
}
```

### Centrado de Texto
Para centrar el texto dentro del elemento, se usa `text-align: center;` $$.

### Centrado Vertical (Usando Padding)
Se puede lograr un centrado vertical en contenido simple utilizando `padding` vertical en lugar de un `height` fijo $$.

**Ejemplo (style.css):**
```css
.center {
  padding: 50px 0; /* Padding vertical de 50px, cero horizontal */
  text-align: center;
}
```

## 17. Transiciones y Animaciones (Conceptos Avanzados)

**Transiciones (`transition`):** Permite suavizar el cambio de una propiedad CSS cuando ocurre un evento (como `:hover`) $$.

**Sintaxis:**
```css
transition: [propiedad_a_animar] [duración] [algoritmo_aceleración];
```

**Ejemplo:**
```css
transition: box-shadow 0.3s ease; /* Anima la sombra en 0.3 segundos usando el algoritmo 'ease' */
```
*   Si se usa `all` en lugar de una propiedad específica, anima todas las propiedades susceptibles de animación $$.
*   `cursor: pointer;` se usa para que el puntero se convierta en una manito sobre el elemento $$.

**Sombra de Caja (`box-shadow`):** Similar a `text-shadow`, pero aplicada al contenedor. Se usa para dar la sensación de que una "tarjeta" se levanta al pasar el mouse (hover) $$.

**Ejemplo:**
```css
box-shadow: 0 0.1rem 0.4rem rgba(0, 0, 0, 0.3);
/* Desplazamiento X, Desplazamiento Y, Difuminación (Blur), Color (negro 30% visible) */
```