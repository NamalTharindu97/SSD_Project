const Employee = require("../models/employeeModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

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
		//Insecure Authentication
		//Sensitive Data Exposure
		//store password secure for privent Insecure Authentication vulnarability and Sensitive Data Exposure
		const hashedPassword = await bcrypt.hash(password, 10);

		const employe = await Employee.create({
			name,
			age,
			phone,
			nic,
			email,
			password: hashedPassword,
		});
		res.status(200).json(employe);
	} catch (error) {
		res.status(500).json({
			error: "Employee Not Created Internal Server Error",
		});
	}
};
// @desc update employee
// @Route http://localhost:5000/api/v1/employee/:id
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

		res.status(200).json({
			error: "Employee Update Success",
			updateEmployee,
		});
	} catch (error) {
		res.status(500).json({ error: "internal server Error" });
	}
};
// @desc delete employee
// @Route http://localhost:5000/api/v1/employee/:id
const deleteEmployees = async (req, res) => {
	try {
		const delete_employee = await Employee.findByIdAndDelete(req.params.id);
		if (!delete_employee) {
			res.status(404).json({ error: "Employee Not Found" });
		}
		res.status(200).json({
			message: "Employee Deleted Success",
			delete_employee,
		});
	} catch (error) {
		res.status(500).json({ error: "Internal Server Error" });
	}
};

// @desc Login
// @Route http://localhost:5000/api/v1/employee/login
const login = async (req, res) => {
	const { email, password } = req.body;

	try {
		const employee = await Employee.findOne({ email });

		if (!employee || !(await bcrypt.compare(password, employee.password))) {
			return res.status(401).json({ error: "Invalid credentials" });
		}
		//use JWT token to privent Insecure Direct Object References (IDOR) vulnarability
		// Generate a JWT token
		const token = jwt.sign(
			{ userId: employee._id, email: employee.email },
			process.env.JWT_SECRET,
			{ expiresIn: "1h" } // Token expiration time
		);

		res.cookie("token", token, { httpOnly: true });

		res.status(200).json({ message: "Login successful" });
	} catch (error) {
		res.status(500).json({ error: "Internal Server Error" });
	}
};

module.exports = {
	getEmployees,
	getEmploye,
	CreateEmployees,
	UpdateEmployees,
	deleteEmployees,
	login,
};
