import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { errorHandler, tryCatch } from "./util.js";
import { populateDatabase } from "./populate.js";
import User from "./models/User.model.js";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

app.use(bodyParser.json());

const populate = async (req, res) => {
  populateDatabase(1000);
  return res.status(200).send({ success: true });
};
const handleCurrentWeekLeaderboard = async (req, res) => {
  const startOfWeek = new Date();
  startOfWeek.setHours(0, 0, 0, 0);
  startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 7);

  User.aggregate([
    {
      $match: {
        timestamp: {
          $gte: startOfWeek,
          $lt: endOfWeek,
        },
      },
    },
    {
      $sort: { score: -1 },
    },
    {
      $limit: 200,
    },
  ])
    .then((result) => {
      return res.status(200).send({ success: true, result });
    })
    .catch((error) => {
      return res.status(200).send({ success: false, error });
    });
};

const handleLastWeekLeaderboardByCountry = async (req, res) => {
  const country = req.body.country;
  const startOfWeek = new Date();
  startOfWeek.setHours(0, 0, 0, 0);
  startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 7);

  User.aggregate([
    {
      $match: {
        timestamp: {
          $gte: startOfWeek,
          $lt: endOfWeek,
        },
        country: country,
      },
    },
    {
      $sort: { score: -1 },
    },
    {
      $limit: 200,
    },
  ])
    .then((result) => {
      return res.status(200).send({ success: true, result });
    })
    .catch((error) => {
      return res.status(200).send({ success: false, error });
    });
};
const handleUserLeaderboardRank = async (req, res) => {
  const uid = req.body.uid;
  const startOfWeek = new Date();
  startOfWeek.setHours(0, 0, 0, 0);
  startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 7);

  User.aggregate([
    {
      $match: {
        timestamp: {
          $gte: startOfWeek,
          $lt: endOfWeek,
        },
      },
    },
    {
      $sort: { score: -1 },
    },
  ])
    .then((result) => {
      const userIndex = result.findIndex((user) => user.uid === uid);
      if (userIndex == -1) {
        return res.status(200).send({ success: true, message: `user with uid ${uid} not found` });
      } else {
        return res.status(200).send({ success: true, rank: userIndex + 1, data: result[userIndex] });
      }
    })
    .catch((error) => {
      return res.status(200).send({ success: false, error });
    });
};

//Routes
app.get("/currentWeekLeaderboard", tryCatch(handleCurrentWeekLeaderboard));
app.get("/lastWeekLeaderboardByCountry", tryCatch(handleLastWeekLeaderboardByCountry));
app.get("/userLeaderboardRank", tryCatch(handleUserLeaderboardRank));
app.get("/populate", tryCatch(populate));

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT;
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database connected!");
    app.listen(PORT, () => {
      console.log(`Server Started and listening to ${PORT}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
