// DashboardPage.js
import React, { useEffect, useState } from 'react';
import SidePanel from '../Components/SidePanel/SidePanel';
import List from '../Components/List/List';
import axios from 'axios';

const DashboardPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/v1/employee/');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('error fetching data :', error);
      }
    };

    fetchData();
  }, []);

  const deleteEmployee = async (routeID) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/v1/employee/${routeID}`
      );
      if (response) {
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="Dashboard-Container">
      <SidePanel />
      <div className="Home-Container">
        <List data={data} deleteEmployee={deleteEmployee} />
      </div>
    </div>
  );
};

export default DashboardPage;
