import React, { useEffect, useState } from "react";
import validator from "validator";
import "./Form.css";

const Form = ({ addEmployee, employee, updateEmploye }) => {
	const [formData, setFormData] = useState({
		name: "",
		age: 0,
		phone: "",
		nic: "",
		email: "",
		password: "",
	});

	useEffect(() => {
		setFormData(
			employee || {
				name: "",
				age: 0,
				phone: "",
				nic: "",
				email: "",
				password: "",
			}
		);
	}, [employee]);

	const handleChange = (e) => {
		const { name, value } = e.target;

		// Validate and sanitize inputs using validator to prevent XSS attacks
		const sanitizedValue = validator.escape(value);

		setFormData({
			...formData,
			[name]: sanitizedValue,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Perform input validation before submitting for preventing XSS attacks
		if (!isValidData(formData)) {
			console.error("Invalid form data");
			return;
		}

		try {
			if (employee) {
				await updateEmploye(formData);
			} else if (addEmployee) {
				await addEmployee(formData);
				setFormData({
					name: "",
					age: 0,
					phone: "",
					nic: "",
					email: "",
					password: "",
				});
			}
		} catch (error) {
			console.error("Error handling form submission:", error);
		}
	};

	const isValidData = (data) => {
		// Validate name (non-empty)
		if (!validator.isLength(data.name.trim(), { min: 1 })) {
			console.error("Name is required");
			return false;
		}

		// Validate age (positive integer)
		if (!validator.isInt(String(data.age), { min: 1 })) {
			console.error("Invalid age");
			return false;
		}

		// Validate phone number (numeric with optional + symbol)
		if (
			!validator.isMobilePhone(data.phone, "any", { strictMode: false })
		) {
			console.error("Invalid phone number");
			return false;
		}

		// Validate NIC (alphanumeric)
		if (!validator.isAlphanumeric(data.nic)) {
			console.error("Invalid NIC");
			return false;
		}

		// Validate email format
		if (!validator.isEmail(data.email)) {
			console.error("Invalid email format");
			return false;
		}

		//use Strong password policies for privent insecure authentication
		// Validate password (at least 8 characters, with at least one uppercase letter, one lowercase letter, one digit, and one special character)
		const passwordRegex =
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
		if (!passwordRegex.test(data.password)) {
			console.error(
				"Password must be strong: at least 8 characters, with at least one uppercase letter, one lowercase letter, one digit, and one special character"
			);
			return false;
		}

		return true;
	};

	return (
		<div className="Form-Container">
			<div className="Employee-Form">
				<form onSubmit={handleSubmit}>
					<label htmlFor="name">Name:</label>
					<input
						type="text"
						id="name"
						name="name"
						//use 'defaultValue' insted of 'value' for privent XSS attacks
						defaultValue={formData.name}
						onChange={handleChange}
					/>

					<label htmlFor="age">Age:</label>
					<input
						type="number"
						id="age"
						name="age"
						//use 'defaultValue' insted of 'value' for privent XSS attacks
						defaultValue={formData.age}
						onChange={handleChange}
					/>

					<label htmlFor="phone">Phone:</label>
					<input
						type="tel"
						id="phone"
						name="phone"
						defaultValue={formData.phone}
						onChange={handleChange}
					/>

					<label htmlFor="nic">NIC:</label>
					<input
						type="text"
						id="nic"
						name="nic"
						defaultValue={formData.nic}
						onChange={handleChange}
					/>

					<label htmlFor="email">Email:</label>
					<input
						type="email"
						id="email"
						name="email"
						defaultValue={formData.email}
						onChange={handleChange}
					/>

					<label htmlFor="password">Password:</label>
					<input
						type="password"
						id="password"
						name="password"
						defaultValue={formData.password}
						onChange={handleChange}
					/>

					<div className="button-container">
						<button type="submit" className="submit_btn">
							Add Employee
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Form;
