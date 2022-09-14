import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';

//as it's traditional practice with express, initialize the app
const app = express();

//setting up bodyParser to send our requests(post) as needed
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
//for cross origin request
app.use(cors());

//database: https://www.mongodb.com/cloud/atlas (Creating Models for our posts)