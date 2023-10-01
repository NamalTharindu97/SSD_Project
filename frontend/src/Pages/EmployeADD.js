import React from 'react';
import SidePanel from '../Components/SidePanel/SidePanel';
import NavBar from '../Components/NavBar/NavBar';
import Form from '../Components/Form/Form';
import axios from 'axios';

const EmployeADD = () => {
  const addEmployee = async (data) => {
    try {
      const response = await axios.post(
        'http://localhost:5000/api/v1/employee/',
        data
      );
      if (response) {
        console.log(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="Dashboard-Container">
      <SidePanel />
      <div className="Home-Container">
        <Form addEmployee={addEmployee} />
      </div>
    </div>
  );
};

export default EmployeADD;
