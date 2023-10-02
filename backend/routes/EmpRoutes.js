const express = require("express");
const router = express.Router();
const {
	getEmployees,
	getEmploye,
	CreateEmployees,
	UpdateEmployees,
	deleteEmployees,
	login,
} = require("../controller/EmpController");
const authenticateJWT = require("../middlewares/authenticateJWT");

//use JWT token to privent Insecure Direct Object References (IDOR) vulnarability
router.route("/login").post(login, authenticateJWT);
router.route("/").get(getEmployees, authenticateJWT);
router.route("/:id").get(getEmploye, authenticateJWT);
router.route("/").post(CreateEmployees, authenticateJWT);
router.route("/:id").put(UpdateEmployees, authenticateJWT);
router.route("/:id").delete(deleteEmployees, authenticateJWT);

module.exports = router;
