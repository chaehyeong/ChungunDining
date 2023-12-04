"use strict";

const User = require("../../models/User");
const R = require("../../models/R");

const output = {
    home: (req, res) => {
        res.render("home/index");
    },    
    login: (req, res) => {
        res.render("home/login");
    },
    ask: (req, res) => {
        res.render("home/ask");
    },
    list: (req, res) => {
        res.render("home/list");
    },
    register: (req, res) => {
        res.render("home/register");
    },
};

const process = {
    login: async (req, res) => {
        const user = new User(req.body);
        const response = await user.login();
        return res.json(response);
    },
    ask: async (req, res) => {
        const Restaurant = new R(req.body);
        const response = await Restaurant.ask();
        return res.json(response);
    }
};

module.exports = {
    output,
    process,
};