const mongoose = require('mongoose');

const employeeScheema = mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  phone: {
    type: String,
  },
  nic: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  image: {
    type: String,
  },
});

module.exports = mongoose.model('Employee', employeeScheema);
