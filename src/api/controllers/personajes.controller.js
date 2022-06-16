const Personaje = require("../models/personaje.model");
const HTTPSTATUSCODE = require("../../utils/HTTP");

const getAllPersonajes = async (req, res, next) => {
  try {
    const allPersonajes = await Personaje.find();
    return res.json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      personajes: allPersonajes,
    });
  } catch (error) {
    return next(error);
  }
};

const getPersonajeByID = async (req, res, next) => {
    try {
      const id = req.params.id;
      const personajesByID = await Personaje.findById(id);
      return res.json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        personaje: personajesByID,
      });
    } catch (error) {
      return next(error);
    }
  };



  const getPersonajeBynombre = async (req, res, next) => {
    try {
      const {nombre} = req.params;
      const personajesBynombre = await Personaje.findOne({nombre: nombre});
      return res.json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        personaje: personajesBynombre,
      });
    } catch (error) {
      return next(error);
    }
  };

  const getPersonajeByOrder = async (req, res, next) => {
    try {
      const {id} = req.params;
      const personajesByOrder = await Personaje.findOne({id: id});
      return res.json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        personaje: personajesByOrder,
      });
    } catch (error) {
      return next(error);
    }
  };

  const getPersonajeByRol = async (req, res, next) => {
    try {
      const {rol} = req.params;
      const personajesByRol = await Personaje.find({rol  : rol});
      return res.json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        personaje: personajesByRol,
      });
    } catch (error) {
      return next(error);
    }
  };

  const createPersonaje= async (req, res, next) => {
    try {
      const newPersonaje = new Personaje(req.body);
      if (req.file) {
          newPersonaje.imagen = req.file.path;
        }
        const createdPersonaje = await newPersonaje.save();
        return res.json({
          status: 201,
          message: HTTPSTATUSCODE[201],
          personaje: createdPersonaje,
        });
    } catch (error) {
      return next(error);
    }
  };

  const deletePersonaje = async (req, res, next) => {
    try {
      const { id } = req.params;
  
      const personajeBorrado = await Personaje.findByIdAndDelete(id);
  
      return res.status(200).json(personajeBorrado);
    } catch (error) {
      return next(error);
    }
  };
  
  const patchPersonaje = async (req, res, next) => {
    try {
      const { id } = req.params;
  
      const patchPersonaje = new Personaje(req.body);
  
      patchPersonaje._id = id;
  
      const PersonajeDB = await Personaje.findByIdAndUpdate(id, patchPersonaje);
      if (PersonajeDB.foto) {
          deletefile(PersonajeDB.foto);
      }
      if (req.file){
          patchPersonaje.foto = req.file.path;
      }
  
      return res.status(200).json({ nuevo: patchPersonaje, vieja: PersonajeDB });
    } catch (error) {
      return next(error);
    }
  };

module.exports = {

    getAllPersonajes,
    getPersonajeByID,
    getPersonajeBynombre,
    getPersonajeByOrder,
    getPersonajeByRol,
    createPersonaje,
    patchPersonaje,
    deletePersonaje
    
};
