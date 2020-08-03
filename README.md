### Práctica Game Dialogue Synth

En la siguiente práctica, vamos a utilizar la API de síntesis de voz del navegador para construir un sistema simple de diálogos para un juego. El objetivo es crear varios perfiles de personajes, cada uno con sus propias características particulares. Se aconseja utilizar la siguiente organización:

  - Una clase Profile para guardar las características del personaje, donde se pueden encontrar cosas como la velocidad de diálogo, el avatar del personaje o el color del texto. Por ejemplo:

const manzProfile = new Profile("Manz", {
  lang: "es",
  rate: 2.0,
  pitch: 1.0,
  color: "#ff0000",
});

- Una clase Conversation para trabajar y controlar las conversaciones de todos los personajes. Una conversación se podría definir como un array de objetos, donde cada uno contiene la frase y el personaje que la pronuncia.

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


1. Implementa la clase Profile para definir las características del personaje.
2. Implementa la clase Conversation para definir la conversación global y su manejo del sintetizador de forma que sea ajeno a la página principal.
3. La forma más fácil de implementar el sistema de diálogos es haciendo que muestre cada frase de golpe. ¿Serías capaz de implementarla de forma que aparezca palabra a palabra, a medida que la pronuncia? (Pista: hay que usar eventos)
4. Separa en métodos de clase para que puedas decidir si utilizar el método wordToWord() para que el personaje muestre el texto palabra a palabra, o el método letterToLetter() para que muestre letra a letra, como en el juego Undertale. Implementa también un método para que reproduzca un sonido en cada letra. Puedes utilizar Bxfr (requiere Flash/Adobe Air) para generarlos.
5. Genera el build y haz el despliegue en GitHub Pages, de modo que se pueda ver el ejemplo en vivo.
