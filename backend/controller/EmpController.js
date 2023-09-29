const Employee = require("../models/employeeModel");

// @desc Get All the employees
// @Route http://localhost:5000/api/v1/employee/
const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
    if (!employees) {
      res.status(404).json({ error: "Employees Not Found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
// @desc Get one employees
// @Route http://localhost:5000/api/v1/employee/:id
const getEmploye = async (req, res) => {
  try {
    const employe = await Employee.findById(req.params.id);
    res.status(200).json(employe);
    if (!employe) {
      res.status(404).json({ error: "employee not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
// @desc create employee
// @Route http://localhost:5000/api/v1/employee/
const CreateEmployees = async (req, res) => {
  const { name, age, phone, nic, email, password } = req.body;

  if (!name || !age || !phone || !nic || !email || !password) {
    return res.status(400).json({ error: "ALL Field Required" });
  }

  const availableEmployee = await Employee.findOne({ email });
  if (availableEmployee) {
    return res.status(400).json({ error: "Employee Already Available" });
  }

  try {
    const employe = await Employee.create({
      name,
      age,
      phone,
      nic,
      email,
      password,
    });
    res.status(200).json(employe);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Employee Not Created Internal Server Error" });
  }
};
// @desc update employee
// @Route http://localhost:5000/api/v1/employee/
const UpdateEmployees = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      res.status(404).json({ error: "Employee Not Found" });
    }
    const updateEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({ error: "Employee Update Success", updateEmployee });
  } catch (error) {
    res.status(500).json({ error: "internal server Error" });
  }
};
const deleteEmployees = () => {
  console.log("this is deleteEmployees");
};

module.exports = {
  getEmployees,
  getEmploye,
  CreateEmployees,
  UpdateEmployees,
  deleteEmployees,
};
