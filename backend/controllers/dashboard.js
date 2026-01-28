const { HoldingsModel } = require("../model/HoldingsModel");
const { PositionsModel } = require("../model/PositionsModel");
const { OrdersModel } = require("../model/OrdersModel");


module.exports.allHoldings= async (req, res) => {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
}

 module.exports.allPositions=async (req, res) => {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
}

 module.exports.orders=async (req, res) => {
  try {
    const orders = await OrdersModel.find({});
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch orders" });
  }
}

 module.exports.newOrder=async (req, res) => {
    let newOrder = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    });

    await newOrder.save();

    res.send("Order Saved");
}