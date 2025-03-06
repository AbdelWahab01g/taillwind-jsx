import React, { useState } from 'react';
import { Check, Trash2, Search } from 'lucide-react'; // Import Lucide icons

const UserTable = () => {
  // Sample data
  const [users, setUsers] = useState([
    { id: 1, fullName: 'John Doe', email: 'john@example.com', number: '123-456-7890' },
    { id: 2, fullName: 'Jane Smith', email: 'jane@example.com', number: '987-654-3210' },
    { id: 3, fullName: 'Alice Johnson', email: 'alice@example.com', number: '555-555-5555' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  // Handle search
  const filteredUsers = users.filter((user) =>
    user.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle delete
  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // Handle accept
  const handleAccept = (id) => {
    alert(`User with ID ${id} accepted!`);
  };

  return (
    <div className="p-6 min-h-screen">
      {/* Title and Description */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">User Management</h1>
        <p className="text-gray-600">
          Manage your users efficiently. Edit or delete user information as needed.
        </p>
      </div>

      {/* Three Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Card 1: Total Users */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-700">Total Users</h2>
          <p className="text-2xl font-bold text-gray-900">{users.length}</p>
          <p className="text-sm text-gray-500">Number of registered users</p>
        </div>

        {/* Card 2: Active Users */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-700">Active Users</h2>
          <p className="text-2xl font-bold text-gray-900">12</p>
          <p className="text-sm text-gray-500">Currently active users</p>
        </div>

        {/* Card 3: Pending Requests */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-700">Pending Requests</h2>
          <p className="text-2xl font-bold text-gray-900">3</p>
          <p className="text-sm text-gray-500">Requests awaiting approval</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6 w-[400px]">
        <input
          type="text"
          placeholder="Search by Full Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        />
        <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full border-separate" style={{ borderSpacing: '0 4px' }}>
          <thead className="bg-[#8D99AE]">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Full Name
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Email
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Number
              </th>
              <th className="px-4 py-3 text-center text-xs font-medium uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="bg-white hover:bg-gray-50 transition-colors">
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                  {user.fullName}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.email}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.number}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-center">
                  <div className="flex justify-center space-x-2">
                    {/* Accept Button */}
                    <button
                      onClick={() => handleAccept(user.id)}
                      className="flex items-center bg-green-500 text-white px-3 py-1.5 rounded-md hover:bg-green-600 transition-colors"
                    >
                      <Check className="mr-1" size={16} />
                      Accept
                    </button>

                    {/* Delete Button */}
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="flex items-center bg-red-500 text-white px-3 py-1.5 rounded-md hover:bg-red-600 transition-colors"
                    >
                      <Trash2 className="mr-1" size={16} />
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;