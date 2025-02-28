import React, { useState } from 'react';

const InsertRolePage = () => {
  // Sample data
  const [data, setData] = useState([
    { id: 1, fullName: 'John Doe', birthday: '1990-05-15', number: '123-456-7890', email: 'john.doe@example.com', role: '' },
    { id: 2, fullName: 'Jane Smith', birthday: '1985-08-25', number: '987-654-3210', email: 'jane.smith@example.com', role: '' },
    { id: 3, fullName: 'Alice Johnson', birthday: '1995-12-30', number: '555-555-5555', email: 'alice.johnson@example.com', role: '' },
  ]);

  // Handle role selection
  const handleRoleChange = (id, selectedRole) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, role: selectedRole } : item
    );
    setData(updatedData);
  };

  // Handle role confirmation
  const handleConfirmRole = (id) => {
    const user = data.find((item) => item.id === id);
    if (user.role) {
      alert(`Role "${user.role}" confirmed for ${user.fullName}`);
    } else {
      alert('Please select a role before confirming.');
    }
  };

  // Handle user deletion
  const handleDeleteUser = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
    alert('User deleted successfully.');
  };

  return (
    <div className="p-4">
      <h1 className="text-4xl font-extrabold text-[#003561] mb-8 text-left">Insert Role</h1>
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
        <thead>
          <tr className="bg-[#003561] text-white">
            <th className="py-2 px-4 border-b">Num</th>
            <th className="py-2 px-4 border-b">Full Name</th>
            <th className="py-2 px-4 border-b">Birthday</th>
            <th className="py-2 px-4 border-b">Number</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Role</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">{index + 1}</td>
              <td className="py-2 px-4 border-b">{item.fullName}</td>
              <td className="py-2 px-4 border-b">{item.birthday}</td>
              <td className="py-2 px-4 border-b">{item.number}</td>
              <td className="py-2 px-4 border-b">{item.email}</td>
              <td className="py-2 px-4 border-b">
                <select
                  value={item.role}
                  onChange={(e) => handleRoleChange(item.id, e.target.value)}
                  className="border border-gray-300 rounded px-2 py-1"
                >
                  <option value="" className="bg-gray-100">Select Role</option>
                  <option value="Admin" className="bg-red-200">Admin</option>
                  <option value="Controleur" className="bg-blue-200">Controleur</option>
                  <option value="Lecteur" className="bg-green-200">Lecteur</option>
                </select>
              </td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => handleConfirmRole(item.id)}
                  className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600 transition duration-200"
                >
                  Confirm Role
                </button>
                <button
                  onClick={() => handleDeleteUser(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-200"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InsertRolePage;