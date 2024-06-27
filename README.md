# Alure Challenge: Encriptador de texto

### ¡¡¡Hola!!!, Bienvenido a este repositorio

Aquí encontrarás la respuesta al desafío planteado en la primera parte del curso
**Formaciones en programacion** de 
[Oracle Next Education](https://www.oracle.com/ar/education/oracle-next-education/).

### Acerca del desafio
El objetivo de este proyecto es poder aplicar cada uno de los módulos aprendidos
en el curso en un proyecto complejo:

### Un encriptador y desencriptador de palabras

A continuación, presentaremos cómo se aplicó cada uno de los cursos en la resolución de
este desafío. El orden en que aparecerán a continuación fue en el cual se
resolvió el problema (no el orden propio de la plataforma).
Los pasos son los siguientes:



## Paso 1 diseño del html
Aquí se aplicaron los conceptos de los cursos:
1. HTML y CSS: ambientes de desarrollo, estructura de archivos y tags.
2. HTML y CSS: Clases, Posicionamiento y Flexbox.
3. HTML y CSS: header, footer y variables CSS.
4. HTML y CSS: trabajando con responsividad y publicación de proyectos

En primera instancia se diseñó la maquetación principal con todos los
tags que se posteriormente se utilizarían. El diseño fue pensado para poder ser maquetado utilizando Flexbox.
El resultado de este trabajo puede observarse en el siguiente archivo html  [archivo html](pages\index.html).

### Paso 2 diseño del CSS
Aquí se aplicaron los conceptos de los mismos cursos que en el paso 1. En primera instancia todos los elementos
están visibles, inclusive los que no deberían segun el Figma del proyecto. En el paso 3 utilizando JS se agregarán y eliminarán estilos y atributos
para poder obtener el resultado esperado. Como parte final se agregaron las vistas para mobile y tablet.
El resultado final puede observarse en el siguiente  [archivo CCS](styles\style.css).

### Paso 3 creacion del repositorio local y remoto
Aquí se aplicaron los conceptos de los cursos:
1. Git y GitHub: repositorio, commit y versiones

Para comenzar se creó el repositorio local.
Posteriormente se creó el repositorio remoto en la pagina [Github](https://github.com/) con el nombre
Alure-challenge-encriptador. Finalmente se subió el repositorio a la nube y el se continuó
con el proyecto.

### Paso 4 agregando la animacion y funcionalidad
Aqu+i se aplicaron los conceptos de los cursos:
1. Lógica de programación: sumérgete en la programación con JavaScript
2. Lógica de programación: explorar funciones y listas

En este paso se agregaron las funciones que realizan las operaciones de visibilidad de botones y muestra de mensajes 
al presionarlos.
Se incluyeron en el HTML y se describió como funciona cada una de las mismas. En esta etapa quedaron pendientes
de agregar las funciones propiamente dicha de encriptacion y desencriptacion. El resultado final de este archivo
puede observarse en el siguiente [archivo JS](page.js)

### Paso 5 agregando la encriptacion
Aqu se aplicaron los conceptos de los cursos:
1. ChatGPT: optimizando la calidad de los resultados

Como parte final se le requirió a Chat GPT que cree las funciones de encriptación y desencriptación.
Se le ordenó mediante prompts que cumpliera con los requisitos pedidos, es decir, sin caracteres 
espciales de la tabla UNICODE (aunque si el espacio) y sin mayúsculas.
Las funciones finales son las siguientes:

Encriptación:
```bash
function encripter(validTextToEncript) {
        // Paso 1: Separar las palabras en un array
        const wordsArray = validTextToEncript.split(' ');

        // Paso 2: Encriptar cada palabra

        const transformedArray = wordsArray.map(word => {
            return word.split('').map(char => encriptionMap[char] || char).join('');
        });
    
        // Paso 3: Concatenar nuevamente todo usando el delimitador como espacio
        const resultText = transformedArray.join(' ');
    
        return resultText;
}
```
Desencriptación:
```bash
function unEncripter(encryptedText) {
        // Paso 1: Separar las palabras en un array
        const encryptedArray = encryptedText.split(' ');

        // Paso 2: Desencriptar cada palabra (por ejemplo, revertir la transformación)
        const decryptedArray = encryptedArray.map(word => {
            return word.split('').map(char => decriptionMap[char] || char).join('');
        });
        
        // Paso 3: Concatenar nuevamente todo usando el delimitador como espacio
        const resultText = decryptedArray.join(' ');
    
        return resultText;
}
```

### Paso 6 subir los archivos finales y agregar el Readme
En este paso final, se subieron las últimas modificaciones realizadas al repositorio y se agregó el archivo README aqui presente.


### Resumen final

Para copiar este repositorio en caso de necesitarlo:
1. Asegúrate de tener instalado Git en tu computadora. Si no lo tienes, puedes descargarlo desde [este link](https://git-scm.com/downloads).
2. Abre una terminal o ventana de comandos y navega hasta la carpeta raíz de tu repositorio local.
2. Ejecuta el siguiente comando para agregar todos los archivos modificados al área de preparación de Git:

```bash
  git clone this-repo-url
```

Tal como se indica en el desafio el proyecto no se deployo.

Como conclusion y a titulo personal, el desafio presento una complejidad acorde a la dificultad de los cursos.
Los contenidos de cada curso fueron aplicados directamente en el proyecto final, lo que indica una gran posibilidad 
de aplicacion de cada tema. Otro aspecto importante es que el resultado final tiene un acabado muy prolijo y armonioso
lo que, luego de tantas horas invertidas en este proyecto, dejan al autor del mismo muy satisfecho.


### Author
[@Edgar Aguirre](https://github.com/elgarcito)

For educative purpose.