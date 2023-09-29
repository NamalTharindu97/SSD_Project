import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardPage from "./Pages/DashboardPage";
import "./index.css";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<DashboardPage />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
