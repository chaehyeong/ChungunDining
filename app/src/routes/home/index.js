"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/ask", ctrl.output.ask);
router.get("/list", ctrl.output.list);
router.get("/register", ctrl.output.register);

router.post("/login", ctrl.process.login);
router.post("/ask", ctrl.process.ask);

module.exports = router;