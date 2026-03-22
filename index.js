const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}))


main()
.then((res) => {
    console.log("Connected to MongoDB");    
})
.catch(err => console.log(err));

async function main() {
await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

//Index Route
app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    console.log(chats);
    res.render("index.ejs", {chats});
})

//New Route
app.get("/chats/new", (req, res) => {
    res.render("new.ejs")
})

let PORT = 8080;

app.get("/", (req, res) => {
    res.send("Home Route");    
})

//Create Route
app.post("/chats", (req, res) => {
    let {from, to, message} = req.body
    let newChat = new Chat({
        from : from,
        to : to,
        message : message,
        created_at : new Date()
    });
    newChat.save()
    .then((res) => {console.log("Chat was saved");
    }).catch((err) => {console.log(err);
    })
    res.redirect("/chats")
})

app.listen(PORT, () => {
    console.log(`Server is runnig on port ${PORT}`);    
})