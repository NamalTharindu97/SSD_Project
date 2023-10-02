import React, { useEffect, useState } from 'react';
import validator from 'validator';
import './Form.css';
import ReactFileReader from 'react-file-reader';

const Form = ({ addEmployee, employee, updateEmploye }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: 0,
    phone: '',
    nic: '',
    email: '',
    password: '',
    image: '',
  });

  useEffect(() => {
    setFormData(
      employee || {
        name: '',
        age: 0,
        phone: '',
        nic: '',
        email: '',
        password: '',
        image: '',
      }
    );
  }, [employee]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validate and sanitize inputs using validator to prevent XSS attacks
    const sanitizedValue = validator.escape(value);

    setFormData({
      ...formData,
      [name]: sanitizedValue,
    });
  };

  const handleImageUpload = (files) => {
    const file = files[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();

    reader.onload = function (event) {
      const imageData = event.target.result;
      setFormData({
        ...formData,
        image: imageData,
      });
    };

    reader.readAsDataURL(file);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform input validation before submitting for preventing XSS attacks
    if (!isValidData(formData)) {
      console.error('Invalid form data');
      return;
    }

    try {
      if (employee) {
        await updateEmploye(formData);
      } else if (addEmployee) {
        await addEmployee(formData);
        setFormData({
          name: '',
          age: 0,
          phone: '',
          nic: '',
          email: '',
          password: '',
          image: '',
        });
      }
    } catch (error) {
      console.error('Error handling form submission:', error);
    }
  };

  const isValidData = (data) => {
    // Validate name (non-empty)
    if (!validator.isLength(data.name.trim(), { min: 1 })) {
      console.error('Name is required');
      return false;
    }

    // Validate age (positive integer)
    if (!validator.isInt(String(data.age), { min: 1 })) {
      console.error('Invalid age');
      return false;
    }

    // Validate phone number (numeric with optional + symbol)
    if (!validator.isMobilePhone(data.phone, 'any', { strictMode: false })) {
      console.error('Invalid phone number');
      return false;
    }

    // Validate NIC (alphanumeric)
    if (!validator.isAlphanumeric(data.nic)) {
      console.error('Invalid NIC');
      return false;
    }

    // Validate email format
    if (!validator.isEmail(data.email)) {
      console.error('Invalid email format');
      return false;
    }

    // Validate password (at least 8 characters)
    if (!validator.isLength(data.password, { min: 8 })) {
      console.error('Password must be at least 8 characters');
      return false;
    }

    return true;
  };

  return (
    <div className="Form-Container">
      <div className="Employee-Form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={formData.name}
            onChange={handleChange}
          />

          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            defaultValue={formData.age}
            onChange={handleChange}
          />

          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            defaultValue={formData.phone}
            onChange={handleChange}
          />

          <label htmlFor="nic">NIC:</label>
          <input
            type="text"
            id="nic"
            name="nic"
            defaultValue={formData.nic}
            onChange={handleChange}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            defaultValue={formData.email}
            onChange={handleChange}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            defaultValue={formData.password}
            onChange={handleChange}
          />

          <label htmlFor="image">Image:</label>
          <ReactFileReader
            base64={true}
            handleFiles={handleImageUpload}
            fileTypes={['.jpg', '.jpeg', '.png', '.gif']}
          >
            <button className="loginBtn" type="button">
              Upload Image
            </button>
          </ReactFileReader>

          <div className="button-container">
            <button type="submit" className="submit_btn">
              Add Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
