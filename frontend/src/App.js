import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardPage from "./Pages/DashboardPage";
import EmployeADD from "./Pages/EmployeADD";
import EmployeeUpdate from "./Pages/EmployeeUpdate";
import "./index.css";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<DashboardPage />} />
					<Route path="/add" element={<EmployeADD />} />
					<Route path="/update/:id" element={<EmployeeUpdate />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
