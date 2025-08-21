const db = require("../../config/db");
const express = require("express");
const router = express.Router();

// Ruta para obtener las tablas de la base de datos
router.get("/tablas", async (req, res) => {
  try {
    let [tablas] = await db.query("SHOW TABLES");
    console.log(tablas);
    res.json(tablas);
  } catch (error) {
    console.error(error);
  }
});

router.get("/tarea", (req, res) => {});

router.get("/usuario", (req, res) => {});
module.exports = router;
