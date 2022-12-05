import express from "express";
import mongoose from "mongoose";
import { MONGO_URL } from "./config/keys.js";

import { orders } from "./routes/orders.js";

const app = express();

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoBD connected"))
  .catch((err) => console.log(err));

app.use(express.json());

app.get("/", (req, res) => res.send("Hello World!"));

app.use("/api/orders", orders);

const port = process.env.PORT || 8080;
const callback = () => console.log(`Server is running on port: ${port}`);

app.listen(port, callback);
