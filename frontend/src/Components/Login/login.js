import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post(
				"http://localhost:5000/api/v1/employee/login",
				{ email: username, password: password },
				{ withCredentials: true } // send cookies
			);
			console.log("Login successful run");
			if (response.status === 200) {
				console.log("Login successful");
				navigate("/");
			} else {
				console.error("Login failed");
			}
		} catch (error) {
			console.error("Error during login", error);
		}
	};

	return (
		<div className="login-container">
			<div className="card">
				<div className="left-side">
					<img
						src="https://img.freepik.com/free-photo/portrait-woman-working-startup-company_23-2149116501.jpg?size=626&ext=jpg&ga=GA1.1.554721202.1695660623&semt=ais"
						alt="LoginImage"
					/>
				</div>
				<div className="right-side">
					<h2>Login</h2>
					<form onSubmit={handleSubmit}>
						<label htmlFor="username">Username:</label>
						<input
							type="text"
							id="username"
							name="username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
						<label htmlFor="password">Password:</label>
						<input
							type="password"
							id="password"
							name="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<button type="submit">Login</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
