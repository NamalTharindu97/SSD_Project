import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPage from './Pages/DashboardPage';
import EmployeADD from './Pages/EmployeADD';
import EmployeeUpdate from './Pages/EmployeeUpdate';
import './index.css';
import LoginPage from './Pages/LoginPage';
import NavBar from './Components/NavBar/NavBar';
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch('http://localhost:5000/auth/login/success', {
        method: 'GET',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error('authentication has been failed!');
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);
  return (
    <div className="App">
      <Router>
        <NavBar user={user} />
        <Routes>
          <Route path="/dash" element={<DashboardPage />} />
          <Route path="/add" element={<EmployeADD />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/update/:id" element={<EmployeeUpdate />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
