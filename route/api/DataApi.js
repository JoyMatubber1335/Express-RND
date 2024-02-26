const express = require("express");
const router = express.Router();
const datas = require("../../Data");
const uuid = require("uuid");

router.get("/", (req, res) => res.json(datas));

// get single data
router.get("/:id", (req, res) => {
  const found = datas.some((data) => data.id === parseInt(req.params.id));
  if (found) {
    res.json(datas.filter((data) => data.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No data found with id ${req.params.id}` });
  }
});

router.post("/", (req, res) => {
  console.log(req.body);
  console.log(req.body.name);
  console.log(req.body.age);
  const newData = {
    id: uuid.v4(),
    name: req.body.name,
    age: req.body.age,
  };
  console.log(newData);

  if (!newData.age || !newData.name) {
    res.status(400).json({ msg: "Please add name and age" });
  } else {
    datas.push(newData);
  }

  res.json(datas);
});

module.exports = router;
