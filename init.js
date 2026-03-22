const mongoose = require("mongoose");
const Chat = require("./models/chat");

main()
.then((res) => {
    console.log("Connected to MongoDB");    
})
.catch(err => console.log(err));

async function main() {
await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
    from: "Priyanka",
    to: "Ajay",
    message: "How are you now",
    created_at: new Date()
},
{
    from: "Rahul",
    to: "Manoj",
    message: "Send me work details",
    created_at: new Date()
},
{
    from: "Sapna",
    to: "Manoj",
    message: "Did you had your dinner",
    created_at: new Date()
},
{
    from: "Sumeet",
    to: "Prakash",
    message: "All the Best for your future",
    created_at: new Date()
},
{
    from: "Om",
    to: "Prince",
    message: "Did you received work Details",
    created_at: new Date()
},
{
    from: "Arvind",
    to: "Manoj",
    message: "Bro, I am busy rignt now",
    created_at: new Date()
}]

Chat.insertMany(allChats);