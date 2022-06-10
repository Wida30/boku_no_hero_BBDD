const express = require("express");
const upload = require("../../middlewares/file");

const router = express.Router();

const {
  getAllPersonajes,
  getPersonajeByID,
  createPersonaje,
    deletePersonaje,
    patchPersonaje,
} = require("../controllers/personajes.controller");


router.get("/bokunohero", getAllPersonajes);
router.get("/bokunohero/:id", getPersonajeByID);
router.post("/bokunohero", createPersonaje);
router.post("/bokunohero/:id", upload.single("foto"), createPersonaje);
router.patch("/bokunohero/:id", patchPersonaje);
router.delete("/bokunohero/:id", deletePersonaje)

module.exports = router;