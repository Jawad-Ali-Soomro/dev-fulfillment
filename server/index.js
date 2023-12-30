const express = require("express");
const app = express();
const bodyparser = require('body-parser')
app.use(bodyparser())
const mongoose = require("mongoose");
const cors = require('cors')
app.use(cors())
app.use(express.json())
mongoose
  .connect(
    "mongodb+srv://unknowndeveloper:jawadalisoomro@cluster0.4plto4p.mongodb.net/Eastern-Fulfillment?retryWrites=true&w=majority"
  )
  .then(console.log(`database connected`))
  .catch((err) => console.log(err.message));
require("dotenv").config();
app.listen(process.env.PORT , () => {
    console.log(`server is working`);
})
const messageSchema = new mongoose.Schema({
  username: String,
  email: String,
  phone: Number,
  message: String,
});

const messageModel = mongoose.model("message", messageSchema);

app.post("/create-message", (req, res) => {
  const { username, email, phone, message } = req.body;
  messageModel.create({ username, email, phone, message })
    .then(
      res.status(200).json({
        message: "message saved successfully",
      })
    )
    .catch((err) => console.log(err));
});
