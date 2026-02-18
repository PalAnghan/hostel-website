const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const Contact = require("./models/Contact");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://autoagency:kZmKcA06NO88KLyS@autoagency.uxegkzo.mongodb.net/urbanNest")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
      });
    }
    
    const newContact = new Contact({
      name,
      email,
      message,
    });

    await newContact.save();

    res.status(200).json({ success: true, message: "Message saved" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false });
  }
});

app.delete("/contact/:id", async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Message deleted" });
  } catch (error) {
    res.status(500).json({ success: false });
  }
});



app.get("/", (req, res) => {
  res.send("UrbanNest API Running");
});

app.get("/contacts", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching contacts" });
  }
});


app.listen(5000, () => {
  console.log("Server running on port 5000");
});
