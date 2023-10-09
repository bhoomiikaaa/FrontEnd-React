import React, { useEffect, useState } from 'react';

function EmployeeTable() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/employees')
      .then((response) => response.json())
      .then((data) => setEmployees(data));
  }, []);

  return (
    <div>
      <h1>Employee Table</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Position</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.address}</td>
              <td>{employee.position}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;
