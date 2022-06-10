const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PersonajeSchema = new Schema(
    {
        id:{type: String, required:true},
        nombre: {type:String, required: true},
        don:{type:String, required: false},
        descripcion: {type:String, required: false},
        genero:{type:String, required: false},
        rol:{type:String, required: true},
        foto:{type:String, required: true},
    },
    {timestamps:true}
);

const Personaje = mongoose.model("personajes", PersonajeSchema);

module.exports = Personaje;