'use client'
import React, { useState } from 'react';

const Page = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: 'select', // Default role
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateLogin = () => {
    // Add your validation logic here

    if (formData.username === 'yourUsername' && formData.password === 'yourPassword') {
      alert('Login successful!');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <form className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 p-2 w-full border rounded-md"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full border rounded-md"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-600">
              Role:
            </label>
            <select
              id="role"
              name="role"
              className="mt-1 p-2 w-full border rounded-md"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="select">Please Select</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button
            type="button"
            onClick={validateLogin}
            className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600 focus:outline-none focus:border-green-700 focus:ring focus:ring-green-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
