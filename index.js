const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const path = require("path");
const massageContorollers=require("./contorollers/massageContorollers")
const massagePage=require("./contorollers/massagePage")
const Massage = require("./models/Clean");
const Gir = require("./models/Gir");
const fileUpload = require("express-fileupload");
const fs = require("fs");
const methodOverride = require("method-override");

const app = express();

mongoose.connect("mongodb://localhost/cleanblog-test-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })
);

app.get("/", massageContorollers.getAllMassage);
app.get("/home/:id", massageContorollers.getOneMassage);
app.put("/update/:id", massageContorollers.updateMassage);
app.delete("/home/:id", massageContorollers.deleteMassage);
app.post("/photos", massageContorollers.creatMassage);


app.get("/about", massagePage.aboutPage);
app.get("/home/update/:id", massagePage.updatePage);
app.get("/add_post", massagePage.addPostPage);


app.listen(3000, () => {
  console.log("Port 3000 de server oluşturludu");
});
