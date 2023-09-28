const express = require("express");
const router = express.Router();
const {
  getEmployees,
  getEmploye,
  CreateEmployees,
  UpdateEmployees,
  deleteEmployees,
} = require("../controller/EmpController");

router.route("/").get(getEmployees);
router.route("/:id").get(getEmploye);
router.route("/").post(CreateEmployees);
router.route("/:id").put(UpdateEmployees);
router.route("/:id").delete(deleteEmployees);

module.exports = router;
