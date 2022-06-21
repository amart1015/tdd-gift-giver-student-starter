const express = require("express");
const router = express.Router();
const GiftExchange = require("../models/gift-exchange");

router.post("/pairs", (req, res) => {
  try{
    const names = req.body.names;
    const pairs = GiftExchange.pairs(names);
    res.json(pairs);
    res.status(200).json({names})
  }catch(error){
    next(error);
  }

  });

router.post("/traditional", (req, res) => {
  try{
    const names = req.body.names;
    const traditional = GiftExchange.traditional(names);
    res.json(traditional);
    res.status(200).json({names})
  }catch(error){
    next(error);
  }
    
});


module.exports = router;