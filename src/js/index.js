import Profile from './Profile.js';
import Conversation from './Conversation.js';


//Declaramos las variables para las voces de los personajes
var Ayrton_voice;
var Robot_voice;
var Breadman_voice;
//Declaramos las imagenes que va a tener cada personaje
var Ayrton_image = "https://www.alfabetajuega.com/wp-content/uploads/2019/12/pokemon-ash-pokeball-770x433.jpg"
var Robot_image = "https://i.imgur.com/pmI53WO.png"
var Breadman_image = "https://image.freepik.com/vector-gratis/kawaii-cute-breakfast-rebanada-pan-icono_24877-12893.jpg"

//La onvoiceschanged propiedad de la SpeechSynthesis representa un controlador de eventos que se ejecutará cuando la lista de 
//SpeechSynthesisVoiceobjetos que devolvería el SpeechSynthesis.getVoices()método haya cambiado (cuando se active el evento de cambio de voces ).
speechSynthesis.onvoiceschanged = function () {
    //Devuelve una lista de objetos que representan todas las voces disponibles en el dispositivo actual y hacemos un for para recorrerlas todas y 
    //determinar la voz de cada personaje
    speechSynthesis.getVoices().forEach(function (voice) {
        if (voice.name === 'Google español de Estados Unidos') {
            Ayrton_voice = voice
        }
        if (voice.name === 'Google italiano') {
            Robot_voice = voice
        }
        if (voice.name === 'Google Bahasa Indonesia') {
            Breadman_voice = voice
        }
    });

    //Aquí declaramos cada personaje como una nueva clase Profile a la cual le pasamos el nombre, la imagen y la voz del personaje, asi como el lenguaje, el color 
    //el volumen, tono, velocidad. 

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

    //Cremos un objeto conversation cuando coga el identificador del chat
    const conversation = new Conversation(document.querySelector('#chat')); //creamos una constante chat y le pasamos a la clase conversacion el chat con document.query
    //Cuando hagamos click en el boton
    // $(document.querySelector("#button")).on('touchstart click', function () { /* do something... */
    document.querySelector("button").onclick = () => {
        //El chat se vuelve visible una vez le damos al boton del play *********************
        document.querySelector('#chat').style.visibility = 'visible';
        //Añadimos al objeto conversation los mensajes
        conversation.addMessage([
            { author: ayrtonProfile, text: "¡Hola a todos! ¿Qué tal están?" },
            { author: robotProfile, text: "Muy bien, ¡gracias!" },
            { author: breadmanProfile, text: "Yo también muy bien" },
            { author: ayrtonProfile, text: "El robot habla con un acento un tanto raro..." },
            { author: robotProfile, text: "Es que soy del norte" },
        ]);
    };
}


