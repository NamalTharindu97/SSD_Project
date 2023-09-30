import React, { useEffect, useState } from "react";
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
	//React XSS
	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

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

	return (
		<div className="Form-Container">
			<div className="Employee-Form">
				<form onSubmit={handleSubmit}>
					<label htmlFor="name">Name:</label>
					<input
						type="text"
						id="name"
						name="name"
						// REACT XSS
						value={formData.name}
						onChange={handleChange}
					/>

					<label htmlFor="age">Age:</label>
					<input
						type="number"
						id="age"
						name="age"
						// REACT XSS
						value={formData.age}
						onChange={handleChange}
					/>

					<label htmlFor="phone">Phone:</label>
					<input
						type="tel"
						id="phone"
						name="phone"
						// REACT XSS
						value={formData.phone}
						onChange={handleChange}
					/>

					<label htmlFor="nic">NIC:</label>
					<input
						type="text"
						id="nic"
						name="nic"
						value={formData.nic}
						onChange={handleChange}
					/>

					<label htmlFor="email">Email:</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
					/>

					<label htmlFor="password">Password:</label>
					<input
						type="password"
						id="password"
						name="password"
						value={formData.password}
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
