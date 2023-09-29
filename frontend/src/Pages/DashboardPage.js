// DashboardPage.js
import React from "react";
import SidePanel from "../Components/SidePanel/SidePanel";

const DashboardPage = () => {
	return (
		<div className="Dashboard-Container">
			<SidePanel />
			<div className="Home-Container">
				{/* Content for Home Container */}
			</div>
		</div>
	);
};

export default DashboardPage;
