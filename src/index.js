require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
const menuRoutes = require("./routes/menuRoutes");

app.use(cors());
app.use(express.json());
app.use("/", menuRoutes);

app.get("/", (req, res) => {
    res.send("API de Hamburgueria funcionando!");
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});