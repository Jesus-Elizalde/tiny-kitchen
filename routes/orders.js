import express from "express";
import { Order } from "../models/order.js";
const router = express.Router();

// Get all Orders
router.get("/", (req, res) => {
  Order.find()
    .then((orders) => res.json(orders))
    .catch((err) => res.status(404).json(err));
});

// Create an Order
router.post("/", (req, res) => {
  res.json("POST SUCCESS");
  const newOrder = new Order({
    items: req.body.items,
    name: req.body.name,
    address: req.body.address,
  });

  newOrder
    .save()
    .then((order) => res.json("Your Order is in the Works"))
    .catch((err) => res.status(442).json(err));
});

// Edit an Order
router.patch("/", (req, res) => {
  res.json("PATCH SUCCESS");
});

// Delete an Order
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Order.findOneAndDelete(id)
    .then((order) => res.json({ id: order._id }))
    .catch((err) => res.status(404).json(err));
});

export const orders = router;
