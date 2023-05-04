const express = require("express");
const Question = require("../models/Question");

const router = express.Router();

router.get("/predefined", async (req, res) => {
  const questions = await Question.find({ predefined: true });
  res.json(questions);
});

router.get("/top", async (req, res) => {
  const questions = await Question.find().sort({ count: -1 }).limit(10);
  res.json(questions);
});

router.get("/trending", async (req, res) => {
  const questions = await Question.aggregate([
    { $unwind: "$keywords" },
    {
      $group: {
        _id: "$keywords",
        count: { $sum: 1 }
      }
    },
    { $sort: { count: -1 } },
    { $limit: 10 },
    {
      $project: {
        keyword: "$_id",
        count: 1,
        _id: 0
      }
    }
  ]);

  res.json(questions);
});

module.exports = router;
