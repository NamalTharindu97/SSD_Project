import React from "react";
import "./SidePanel.css";
import { Link } from "react-router-dom";

const SidePanel = () => {
	return (
		<div className="SidePanel-Container">
			<div className="SideBar">
				<ul>
					<Link to="/">
						<li>Dashboard</li>
					</Link>

					<Link to="/add">
						<li>Employee ADD</li>
					</Link>
				</ul>
			</div>
		</div>
	);
};

export default SidePanel;
