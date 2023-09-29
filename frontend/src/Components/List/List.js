// List.js
import React from "react";
import "./List.css";

const List = ({ data, deleteEmployee }) => {
	return (
		<div className="List-Container">
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Age</th>
						<th>Phone</th>
						<th>NIC</th>
						<th>Email</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{data.map((employee) => (
						<tr key={employee.id}>
							<td>{employee.name}</td>
							<td>{employee.age}</td>
							<td>{employee.phone}</td>
							<td>{employee.nic}</td>
							<td>{employee.email}</td>
							<td>
								<button>Update</button>
								<button
									onClick={() => deleteEmployee(employee._id)}
								>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default List;
