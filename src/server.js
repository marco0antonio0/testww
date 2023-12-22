const express = require("express");
const app = express();

// Importa as rotas
const route1 = require("./routes/get-users");
const route2 = require("./routes/get-user");

// Usa as rotas
app.use("/api", route1);
app.use("/api", route2);

const PORT = process.env.PORT || 3000;
0;
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
module.exports = { app, server };
