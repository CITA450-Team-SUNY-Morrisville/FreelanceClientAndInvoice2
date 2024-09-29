import React, { useState } from 'react';
import axios from 'axios';
import { FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');

    if (!formData.username || !formData.email || !formData.password) {
      setError('Please fill out all fields');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('/api/signup', formData);
      setMessage(response.data.message);
      setFormData({ username: '', email: '', password: '' });
    } catch (error) {
      setError('Error occurred during signup.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-semibold text-center mb-6" style={{ color: '#6FA743' }}>
          Create an Account
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Enter your username"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Create a password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300 font-semibold flex items-center justify-center"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Sign Up'}
          </button>
        </form>

        {message && (
          <div className="mt-6 bg-green-100 border border-green-300 text-green-700 p-4 rounded-lg flex items-center">
            <FiCheckCircle className="text-green-600 w-6 h-6 mr-2" />
            <span>{message}</span>
          </div>
        )}

        {error && (
          <div className="mt-6 bg-red-100 border border-red-300 text-red-700 p-4 rounded-lg flex items-center">
            <FiAlertCircle className="text-red-600 w-6 h-6 mr-2" />
            <span>{error}</span>
          </div>
        )}

        <p className="mt-6 text-center text-sm">
          Already have an account? <Link to="/login" className="text-green-400 hover:text-green-500">Log in</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
