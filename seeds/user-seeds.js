const sequelize = require("../config/connection");
const { User, Post } = require("../models");

const userdata = [
  {
    username: "honey",
    email: "honeysangha@gmail.com",
    password: "password",
  },
  {
    username: "sanghani",
    email: "honey@gmail.com",
    password: "password",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
