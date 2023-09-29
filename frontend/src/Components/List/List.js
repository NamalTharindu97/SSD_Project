import React from "react";
import "./List.css";

const List = () => {
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
					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td>
							<button>Update</button>
							<button>Delete</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default List;
