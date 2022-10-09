import express from "express";
import { createServer } from "http";
import expressLayouts from "express-ejs-layouts";

const app = express();

// Middlewares
app.use(express.static("public"));

// Set Templating Engine
app.use(expressLayouts);
app.set("layout", "./layouts/index");
app.set("view engine", "ejs");

app.get("/", (req, res, next) => {
  res.render("index", { title: "GapSap" });
});

export default createServer(app);
