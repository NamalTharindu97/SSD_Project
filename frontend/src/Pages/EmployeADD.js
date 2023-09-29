import React from "react";
import SidePanel from "../Components/SidePanel/SidePanel";
import NavBar from "../Components/NavBar/NavBar";
import Form from "../Components/Form/Form";

const EmployeADD = () => {
	return (
		<div className="Dashboard-Container">
			<SidePanel />
			<div className="Home-Container">
				<NavBar />
				<Form />
			</div>
		</div>
	);
};

export default EmployeADD;
