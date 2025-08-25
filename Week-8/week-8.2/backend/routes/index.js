const express = require ("express");
const userRouter = require("./user");

const router = express.Router();

riuter.use("./user", userRouter);

module.exports = router;