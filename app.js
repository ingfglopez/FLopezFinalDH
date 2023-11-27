const express = require("express");
const path = require("node:path");


const productosRouter=require('./routers/producto.js');
const loginRouter=require('./routers/login.js');
const carritoRouter=require('./routers/carrito.js');
const app = express();
const PORT = process.env.PORT ?? 3001;
app.use(express.static(path.resolve(__dirname, "public")));
app.set("view engine","ejs");
app.listen(PORT, err => {
  console.log(err ? err : `server up at http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.render("index");
});

app.use("/productos", productosRouter);
app.use("/login", loginRouter);
app.use("/carrito", carritoRouter);
app.get("/register", (req, res) => {
  res.render("register");
});
app.get("/contacto", (req, res) => {
  res.render("contacto");
});
app.get("/nosotros", (req, res) => {
  res.render("nosotros");
});



//catch all route
app.get("*", (req, res) => {

  res.render("404");
});
