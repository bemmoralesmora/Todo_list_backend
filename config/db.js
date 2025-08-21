const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "bqafwlgnkuosvztzkatb-mysql.services.clever-cloud.com",
  user: "upotkdjdgvcmgs37",
  password: "FyUN22rHtrjJmqGpziku",
  database: "bqafwlgnkuosvztzkatb",
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Verificar conexión al iniciar
pool
  .getConnection()
  .then((connection) => {
    console.log("✅ Conectado a MySQL (Pool)");
    connection.release();
  })
  .catch((err) => {
    console.error("Error al conectar a MySQL:", err.message);
  });

module.exports = pool;
