//Una clase Conversation para trabajar y controlar las conversaciones de todos los personajes. 
//Una conversación se podría definir como un array de objetos, donde cada uno contiene la frase y el personaje que la pronuncia.

export default class Conversation { //Creamos la clase conversacion 
    constructor(chat) { //Le pasamos un chat por el constructor 
        this.chat = chat;
    }

    addMessage(conversacion) {
        conversacion.map((texto) => { //El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
            var msg = new SpeechSynthesisUtterance();
            msg.text = texto.text;
            msg.voice = texto.author.voice;
            msg.pitch = texto.author.pitch;
            msg.rate = texto.author.rate;
            msg.volume = texto.author.volume;
            msg.color = texto.author.color;
            msg.imagen = texto.author.imagen;
            msg.nombre = texto.author.nombre;

            msg.onstart = () => {
                this.chat.innerHTML += `
                <div class="texto" style="color: ${msg.color}; background-color:black; display: flex; align-items: center"> 
                <img src="${msg.imagen}" width=\"150px\" height=\"150px\"> &nbsp; 
                ${msg.nombre}: 
                ${msg.text} 
                </div>`;
            }
            speechSynthesis.speak(msg);
            window.navigator.vibrate(200);

        });
    }
}






