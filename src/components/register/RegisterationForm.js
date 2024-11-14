'use client'
import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaUser } from 'react-icons/fa';

export default function RegistrationForm({ onSuccess }) {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Validate phone number format
      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(formData.phone.replace(/[-()\s]/g, ''))) {
        throw new Error('Please enter a valid 10-digit phone number');
      }

      // Check if user exists
      const checkResponse = await fetch(
        `/api/registration?email=${encodeURIComponent(formData.email)}&phone=${encodeURIComponent(formData.phone)}`
      );
      const { exists } = await checkResponse.json();

      if (exists) {
        setError('This email or phone number has already been registered.');
        return;
      }

      // If user doesn't exist, proceed with registration
      onSuccess(formData);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-40">
      <div className="bg-gray-800 p-8 rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-white mb-6">Register for NextGen Awards</h2>

        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-500 p-3 rounded-lg mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-1">Full Name</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUser className="text-gray-400" />
              </div>
              <input
                type="text"
                className="w-full pl-10 pr-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:border-purple-700"
                placeholder="Enter your full name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                minLength={2}
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Email Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="text-gray-400" />
              </div>
              <input
                type="email"
                className="w-full pl-10 pr-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:border-purple-700"
                placeholder="Enter your email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Phone Number</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaPhone className="text-gray-400" />
              </div>
              <input
                type="tel"
                className="w-full pl-10 pr-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:border-purple-700"
                placeholder="Enter your phone number"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                pattern="\d{10}"
                title="Please enter a valid 10-digit phone number"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-800 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
          >
            {loading ? 'Processing...' : 'Register'}
          </button>
        </form>
      </div>
    </div>
  );
}