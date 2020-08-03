
//Creamos la clase profile y le pasamos por el constructor el nombre del personaje, la imagen, la voz y las propiedades. 

export default class Profile {
    constructor(nombre, imagen, voice, propiedades) {
        //
        this.nombre = nombre; //El nombre de este perfil es el nombre que le paso por parametro cuando creo el objeto en index.js
        this.imagen = imagen; //La imagen de este perfil es la imagen que le paso por parametro cuando creo el objeto en index.js
        this.voice = voice; //La voz de este perdil es la voz que le paso por parametro cuando creo el objeto en index.js
        this.rate = propiedades.rate;
        this.lang = propiedades.lang;
        this.pitch = propiedades.pitch;
        this.color = propiedades.color;
        this.volume = propiedades.volume;
    }

}





