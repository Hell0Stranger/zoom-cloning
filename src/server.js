import express from "express";
const app = express();
app.set("view engine", "pug"); //setting view engine
app.set("views", __dirname + "/views"); //let express know where is template
app.use("/public", express.static(__dirname + "/public")); // createing public url to share user files
const handleListen = () => console.log(`Listening on from 3000`);
app.get("/", (req, res) => res.render("home")); //route handler that renders home.pug
app.listen(3000, handleListen);
console.log("hello");
