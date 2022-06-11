const express = require("express");
const upload = require("../../middlewares/file");

const router = express.Router();

const {
  getAllPersonajes,
    getPersonajeByID,
    getPersonajeBynombre,
    getPersonajeByOrder,
    createPersonaje,
    patchPersonaje,
    deletePersonaje
} = require("../controllers/personajes.controller");


router.get("/", getAllPersonajes);
router.get("/:id", getPersonajeByID);
router.get("/nombre/:nombre", getPersonajeBynombre);
router.get("/id/:id", getPersonajeByOrder)
router.post("/", createPersonaje);
router.post("/:id", upload.single("foto"), createPersonaje);
router.patch("/:id", patchPersonaje);
router.delete("/:id", deletePersonaje)

module.exports = router;