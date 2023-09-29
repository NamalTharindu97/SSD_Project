import React from "react";
import "./Form.css";

const Form = () => {
	return (
		<div className="Form-Container">
			<div className="Employee-Form">
				<form>
					<label htmlFor="name">Name:</label>
					<input type="text" id="name" name="name" />

					<label htmlFor="age">Age:</label>
					<input type="number" id="age" name="age" />

					<label htmlFor="phone">Phone:</label>
					<input type="tel" id="phone" name="phone" />

					<label htmlFor="nic">NIC:</label>
					<input type="text" id="nic" name="nic" />

					<label htmlFor="email">Email:</label>
					<input type="email" id="email" name="email" />

					<label htmlFor="password">Password:</label>
					<input type="password" id="password" name="password" />

					<button type="submit" className="submit_btn">
						Add Employee
					</button>
				</form>
			</div>
		</div>
	);
};

export default Form;
