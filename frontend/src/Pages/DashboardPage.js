// DashboardPage.js
import React from "react";
import SidePanel from "../Components/SidePanel/SidePanel";
import NavBar from "../Components/NavBar/NavBar";
import List from "../Components/List/List";

const DashboardPage = () => {
	return (
		<div className="Dashboard-Container">
			<SidePanel />
			<div className="Home-Container">
				<NavBar />
				<List />
			</div>
		</div>
	);
};

export default DashboardPage;
