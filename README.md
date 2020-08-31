### Práctica Game Dialogue Synth

En la siguiente práctica, vamos a utilizar la API de síntesis de voz del navegador para construir un sistema simple de diálogos para un juego. El objetivo es crear varios perfiles de personajes, cada uno con sus propias características particulares. Se aconseja utilizar la siguiente organización:

  - Una clase Profile para guardar las características del personaje, donde se pueden encontrar cosas como la velocidad de diálogo, el avatar del personaje o el color del texto. Por ejemplo:

```
const manzProfile = new Profile("Manz", {
  lang: "es",
  rate: 2.0,
  pitch: 1.0,
  color: "#ff0000",
});
```

- Una clase Conversation para trabajar y controlar las conversaciones de todos los personajes. Una conversación se podría definir como un array de objetos, donde cada uno contiene la frase y el personaje que la pronuncia.


```
const conversation = new Conversation(box);

conversation.addMessage([
  { author: manzProfile, text: "¡Hola a todos! ¿Qué tal están?" },
  { author: robotProfile, text: "Muy bien, ¡gracias!" },
  { author: breadmanProfile, text: "Yo también muy bien" },
  {
    author: manzProfile,
    text: "El robot habla con un acento un tanto raro...",
  },
  { author: robotProfile, text: "Es que soy del norte" },
]);
```

1. Implementa la clase Profile para definir las características del personaje.
2. Implementa la clase Conversation para definir la conversación global y su manejo del sintetizador de forma que sea ajeno a la página principal.
3. La forma más fácil de implementar el sistema de diálogos es haciendo que muestre cada frase de golpe. ¿Serías capaz de implementarla de forma que aparezca palabra a palabra, a medida que la pronuncia? (Pista: hay que usar eventos)
4. Separa en métodos de clase para que puedas decidir si utilizar el método wordToWord() para que el personaje muestre el texto palabra a palabra, o el método letterToLetter() para que muestre letra a letra, como en el juego Undertale. Implementa también un método para que reproduzca un sonido en cada letra. Puedes utilizar Bxfr (requiere Flash/Adobe Air) para generarlos.
5. Genera el build y haz el despliegue en GitHub Pages, de modo que se pueda ver el ejemplo en vivo.

Al comienzo de la práctica y creando nuestro directorio de trabjo lo que tenemos que hacer es iniciar un repositorio con el siguiente comando:

```
$ git init
```

Con ello, creamos un repositorio, para poder conectar nuestro directorio de trabajo con el respositorio en github utilizamos el siguiente comando:

```
$ git remote add origin <ruta_ssh>
```

A continuación, tenemos que crear el package.json por lo que utilizamos el comando:

```
npm init -y
```

Ya por último antes de comenzar a desarrollar la práctica instalamos parcel:

```
$ npm install -D parcel-bundler
```

Comprobamos que parcel se ha instalado correctamente:

```
$ npx parcel --version
```

Para ir comprobando el funcionamiento de la práctica corremos parcel desde el principio:

```
npx parcel src/index.html
```

Creamos los directorios de la práctica con el fin de tener la práctica bien estructurada. 
En este caso el árbol de directorios sería el siguiente:

Dsi-p3-synth-ayrtoncg20
  .cache
  .dist
  imagenes
  node_modules
  src
    assets
    css
      index.css
    js
      Conversation.js
      index.js
      Profile.js
    index.html
  package.json
  package-lock.json
  README.md
  
Una vez hemos hecho las carpetas comenzamos a desarrollar el código

Lo primero que creamos es el index.html donde podemos observar que hacemos uso de css y de javascript para poder añadir las clases. 
Declaramos un título para la práctica: Juego del diálogo
Declaramos un cabecero que contiene un mensaje que saldra por pantalla como "titulo de la práctica"
Declaramos un boton para comenzar el juego llamado play.
Declaramos un identificador llamado chat el cual después obtendremos con javascript y le añadiremos el chat de voz

En la siguiente imagen podemos ver el código desarrollado y lo comentado anteriormente.

![imagen1](imagenes/index_html.png)

Ahora vamos al archivo index.js y vamos a explicar el funcionamiento de este fichero.

Lo siguiente que hice fue crear el archivo index.js 

En este archivo tenemos que importar las clases que vamos a utilizar en este caso la clase Profile y la clase Conversation. 

```
import Profile './Profile.js'
import Conversation from './Conversation.js'
```

Declaramos una serie de variables para los personajes, la imagen y la voz que definiremos a continuación.

Variables para las voces:

```
var Ayrton_voice
var Robot_voice
var Breadman_voice
```

Variables para las imagenes:

```
var Ayrton_image
var Robot_image
var Breadman_image
```

A las imagenes le igualamos una URL de una imagen de internet, por lo que la variable va a contener ya la imagen, con respecto a las voces es un poco mas complicado por lo que vamos a explicarlo detalladamente a continuación

Declaramos una funcion onvoiceschanged la cual escuchara si hay algun cambio de voces. Dentro de esta función utilizaremos getVoices() para que nos devuelva todas las voces que tiene nuestro navegador, que estań definidas por defecto, dentro de esas voces buscamos el nombre de la voz y se lo damos a cada variable que hemos declarado anteriormente. 

Una vez hecho esto, ya tenemos las voces y las imagenes de los personajes en sus respectivas variables, por ello vamos a crear los objetos de los perfiles de cada personaje. Podemos observar en el siguiente código que creamos un objeto ayrtonProfile, robotProfile y breadmanProfile con la siguiente información:

- Nombre del personaje 
- Imagen del personaje (variable creada anteriormente)
- Voz del personaje (variable creada anteriormente)
- Array con la siguiente información:
  - Lenguaje del personaje
  - Velocidad de habla del personaje
  - Tono de habla del personaje
  - Color del personaje
  - Volumen del personaje 
  
```
const ayrtonProfile = new Profile("Ayrton", Ayrton_image, Ayrton_voice, {
        lang: "es",
        rate: 1.0,
        pitch: 0.5,
        color: "#74ff2e",
        volume: 1
    });

    const robotProfile = new Profile("Robot", Robot_image, Robot_voice, {
        lang: "es",
        rate: 1.0,
        pitch: 0.5,
        color: "#f8ff13",
        volume: 1
    });

    const breadmanProfile = new Profile("Breadman", Breadman_image, Breadman_voice, {
        lang: "es",
        rate: 1.0,
        pitch: 0.5,
        color: "#e800ff",
        volume: 1
    });

```

Para poder crear estos objetos de tipo Profile tenemos que tener una clase Profile creada, vamos a verla:

Para poder hacer los perfiles de los personajes tenemos que crear un constructor con el nombre del personaje, la imagen, la voz y un array de propiedades (tono, velocidad, lenguaje, etc)
Utilizamos la propiedad this para poder decir que este personaje va a tener los datos que se le pasan por parámetro desde el index.js. 

```
export default class Profile {
    constructor(nombre, imagen, voice, propiedades) {
        //
        this.nombre = nombre; 
        this.imagen = imagen; 
        this.voice = voice; 
        this.rate = propiedades.rate;
        this.lang = propiedades.lang;
        this.pitch = propiedades.pitch;
        this.color = propiedades.color;
        this.volume = propiedades.volume;
    }

}
```

![imagen4](imagenes/Profile.png)

Ya tenemos los perfiles de los personajes creados por lo que avanzamos hasta la siguiente información, igual que creamos diferentes perfiles, tenemos que crear un objeto tipo conversacion, solo habrá una conversación. 

Para ello utilizamos el siguiente código:

```
    const conversation = new Conversation(document.querySelector('#chat')); 
```

con ello creamos una nueva conversacion y le pasamos el div de chat que creamos en el index.html por parámetro. 

A continuación, creamos un botón, el cual llama al boton que habiamos creado en el index.html anteriormente. 

```
const button = document.querySelector("button");
```

Le agregamos al boton un evento click, cuando el usuario haga un click en el boton, el chat se va a poner a visible:

```
button.addEventListener("click", () => {
  document.querySelector('#chat').style.visibility = 'visible';
  conversation.addMessage([
            { author: ayrtonProfile, text: "¡Hola a todos! ¿Qué tal están?" },
            { author: robotProfile, text: "Muy bien, ¡gracias!" },
            { author: breadmanProfile, text: "Yo también muy bien" },
            { author: ayrtonProfile, text: "El robot habla con un acento un tanto raro..." },
            { author: robotProfile, text: "Es que soy del norte" },
        ]);
    });
}
```

También le añadimos al objeto conversacion creado anteriormente los mensajes que va a tener nuestro diálogo.

![imagen2](imagenes/index_js1.png)
![imagen3](imagenes/index_js2.png)

Por último nos dirigimos a la clase Conversation la cual va a tener un constructor que se la pasa el chat por parámetro. 

Llamamos a la funcion llamada addMessage. Metemos en texto todo lo que hay en addMessage para luego poder acceder a ello con el metodo map, una vez hecho esto ya podemos crear un mensaje msg y agregarle todas las propiedades para despues mostrarlas por pantalla con un innerHTML:

```
msg.onstart = () => {
                this.chat.innerHTML += `
                <div class="texto" style="color: ${msg.color}; background-color:black; display: flex; align-items: center"> 
                <img src="${msg.imagen}" width=\"150px\" height=\"150px\"> &nbsp; 
                ${msg.nombre}: 
                ${msg.text} 
                </div>`;
            }
```

A continuación llamamos a la función speechSynthesis.speak(msg) vista en los videos de introducción a la práctica para que se empiecen a repdroducir los mensajes por pantalla. 

![imagen5](imagenes/Conversation.png)

Con lo comentado anteriormente ya hemos terminado la práctica. 

### Retos

- Implementa la API de vibración del navegador en tu ejemplo, para que vibre cada vez que un personaje pronuncie una palabra o frase. Ten muy en cuenta que la API de vibración sólo puedes comprobarla en móviles o tablets que lo soporten.

He intentado implementar la api de vibración pero no se como hacer para que la página web se me despliegue bien en el teléfono móvil, por lo que, no he podido probar, si al final tengo tiempo intentaré hacerlo de nuevo 
Con respecto a lo de la vibración, el problema ha sido que cuando yo ponía la URL de la web desplegada en el github en el teléfono no me dejaba pulsar el botón, por lo que la práctica no se ponía en funcionamiento por lo que no podía probar si cuando hablaba alguien vibraba. 

Práctica desplegada en github-pages: https://ull-esit-dsi-1920.github.io/dsi-p3-synth-ayrtoncg20/


