'use client'
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, User, Briefcase, MessageSquare, Check } from 'lucide-react';

const ApplicationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    email: '',
    phone: '',
    altPhone: '',
    address: '',
    education: '',
    occupation: '',
    businessName: '',
    position: '',
    businessDescription: '',
    productsServices: '',
    isMemberOther: 'no',
    otherGroupName: '',
    hasPreferredChapter: 'no',
    preferredChapter: '',
  });

  const [interviewData, setInterviewData] = useState({
    hearAbout: '',
    referrals: '',
    whyApply: '',
    strengths: '',
    expectations: '',
    enjoyment: '',
    leadership: 'no',
    attendanceAgreement: 'no',
    attendanceUnderstanding: '',
    substituteArrangement: 'no',
    feeAgreement: 'no',
    trainingCommitment: 'no',
    questions: '',
    additionalInfo: '',
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInterviewChange = (e) => {
    const { name, value } = e.target;
    setInterviewData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const StepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {[1, 2, 3].map((num) => (
        <div key={num} className="flex items-center">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
            step === num ? 'bg-indigo-600 text-white' : 
            step > num ? 'bg-green-500 text-white' : 
            'bg-gray-200 text-gray-600'
          }`}>
            {step > num ? <Check className="w-5 h-5" /> : num}
          </div>
          {num < 3 && (
            <div className={`w-20 h-1 ${
              step > num ? 'bg-green-500' : 'bg-gray-200'
            }`} />
          )}
        </div>
      ))}
    </div>
  );

  const renderPersonalDetails = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Personal Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-200 mb-1">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleFormChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-200 mb-1">Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleFormChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-200 mb-1">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleFormChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-200 mb-1">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleFormChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-200 mb-1">Address</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleFormChange}
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
    </div>
  );

  const renderBusinessDetails = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Business Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-200 mb-1">Business Name</label>
          <input
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleFormChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-200 mb-1">Position/Title</label>
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleFormChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-200 mb-1">Business Description</label>
        <textarea
          name="businessDescription"
          value={formData.businessDescription}
          onChange={handleFormChange}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-200">Member of Other Organizations?</label>
        <div className="flex space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="isMemberOther"
              value="yes"
              checked={formData.isMemberOther === 'yes'}
              onChange={handleFormChange}
              className="mr-2"
            />
            Yes
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="isMemberOther"
              value="no"
              checked={formData.isMemberOther === 'no'}
              onChange={handleFormChange}
              className="mr-2"
            />
            No
          </label>
        </div>
      </div>
    </div>
  );

  const renderInterviewQuestions = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Interview Questions</h3>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-200 mb-1">How did you hear about FLY?</label>
          <textarea
            name="hearAbout"
            value={interviewData.hearAbout}
            onChange={handleInterviewChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            rows={2}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-200 mb-1">What strengths would you bring to FLY?</label>
          <textarea
            name="strengths"
            value={interviewData.strengths}
            onChange={handleInterviewChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            rows={2}
          />
        </div>
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-200">Open to Leadership Role?</label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="leadership"
                value="yes"
                checked={interviewData.leadership === 'yes'}
                onChange={handleInterviewChange}
                className="mr-2"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="leadership"
                value="no"
                checked={interviewData.leadership === 'no'}
                onChange={handleInterviewChange}
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto border border-purple-500 rounded-xl shadow-lg p-8 mt-32">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-100">FLY Application Form</h2>
          <p className="mt-2 text-gray-200">Forward Looking Youth Membership Application</p>
        </div>

        <StepIndicator />

        <div className="mt-8">
          {step === 1 && renderPersonalDetails()}
          {step === 2 && renderBusinessDetails()}
          {step === 3 && renderInterviewQuestions()}
        </div>

        <div className="mt-8 flex justify-between">
          {step > 1 && (
            <button
              onClick={() => setStep(step - 1)}
              className="flex items-center px-6 py-2 bg-gray-200 text-gray-200 rounded-md hover:bg-gray-300"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Previous
            </button>
          )}
          {step < 3 ? (
            <button
              onClick={() => setStep(step + 1)}
              className="flex items-center px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 ml-auto"
            >
              Next
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          ) : (
            <button
              onClick={() => console.log('Form submitted:', { formData, interviewData })}
              className="flex items-center px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 ml-auto"
            >
              Submit Application
              <Check className="w-5 h-5 ml-2" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;