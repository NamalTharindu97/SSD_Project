import React, { useEffect, useState } from 'react';
import SidePanel from '../Components/SidePanel/SidePanel';
import Form from '../Components/Form/Form';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EmployeeUpdate = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getEmployee = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/employee/${id}`
        );
        if (response) {
          setEmployee(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getEmployee();
  }, [id]);

  const updateEmploye = async (updatedEmployeedata) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/v1/employee/${id}`,
        updatedEmployeedata
      );
      setEmployee(response.data);

      if (response) {
        console.log(response.data);
        navigate('/dash');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="Dashboard-Container">
      <SidePanel />
      <div className="Home-Container">
        <Form employee={employee} updateEmploye={updateEmploye} />
      </div>
    </div>
  );
};

export default EmployeeUpdate;
