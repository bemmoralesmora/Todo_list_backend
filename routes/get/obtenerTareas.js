const db = require("../../config/db");
const express = require("express");
const router = express.Router();

router.get("/tareas", async (req, res) => {
  try {
    let [tareas] = await db.query("SELECT * FROM tareas");

    console.log(tareas);
    res.json(tareas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener las tareas" });
  }
});

module.exports = router;
