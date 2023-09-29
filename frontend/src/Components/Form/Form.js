import React, { useState } from "react";
import "./Form.css";

const Form = ({ addEmployee }) => {
	const [formData, setFormData] = useState({
		name: "",
		age: 0,
		phone: "",
		nic: "",
		email: "",
		password: "",
	});
	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			await addEmployee(formData);

			setFormData({
				name: "",
				age: 0,
				phone: "",
				nic: "",
				email: "",
				password: "",
			});
		} catch (error) {
			console.error("Error adding employee:", error);
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
						value={formData.name}
						onChange={handleChange}
					/>

					<label htmlFor="age">Age:</label>
					<input
						type="number"
						id="age"
						name="age"
						value={formData.age}
						onChange={handleChange}
					/>

					<label htmlFor="phone">Phone:</label>
					<input
						type="tel"
						id="phone"
						name="phone"
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
