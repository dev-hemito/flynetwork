'use client'
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Check, Loader2 } from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';

const ApplicationForm = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [membershipId, setMembershipId] = useState('');
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
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleInterviewChange = (e) => {
    const { name, value, type, checked } = e.target;
    setInterviewData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const initializeRazorpay = async () => {
    setStatus({ type: 'info', message: 'Initializing payment gateway...' });
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    try {
      setLoading(true);
      const res = await initializeRazorpay();

      if (!res) {
        setStatus({ type: 'error', message: 'Failed to load payment gateway. Please try again.' });
        return;
      }

      setStatus({ type: 'info', message: 'Creating payment order...' });
      const response = await fetch('/api/razorpay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: 3500000 }),
      });

      const order = await response.json();

      if (response.status !== 200) {
        throw new Error(order.error || 'Failed to create order');
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "FLY Membership",
        description: "FLY Membership Registration Fee",
        order_id: order.id,
        handler: async function (response) {
          try {
            setStatus({ type: 'info', message: 'Verifying payment...' });
            const verificationResponse = await fetch('/api/verify-payment', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
                formData,
                interviewData,
              }),
            });

            const data = await verificationResponse.json();

            if (data.success) {
              setMembershipId(data.membershipId);
              setStatus({
                type: 'success',
                message: 'Registration successful! Welcome to FLY family.'
              });
            } else {
              throw new Error('Payment verification failed');
            }
          } catch (error) {
            setStatus({
              type: 'error',
              message: 'Payment verification failed. Please contact support.'
            });
          }
        },
        prefill: {
          name: formData.fullName,
          email: formData.email,
          contact: formData.phone,
        },
        theme: {
          color: "#4F46E5",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to process payment. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  const StatusMessage = () => {
    if (!status.message) return null;

    return (
      <div className={`mb-6 p-4 rounded-lg border ${
        status.type === 'success' ? 'bg-green-50 border-green-200 text-green-800' :
        status.type === 'error' ? 'bg-red-50 border-red-200 text-red-800' :
        'bg-blue-50 border-blue-200 text-blue-800'
      }`}>
        <h3 className="font-medium mb-1">
          {status.type === 'success' ? 'Success!' :
           status.type === 'error' ? 'Error' :
           'Processing'}
        </h3>
        <div className="flex items-center gap-2">
          {loading && <Loader2 className="w-4 h-4 animate-spin" />}
          {status.message}
          {membershipId && (
            <div className="mt-2 font-semibold">
              Your Membership ID: {membershipId}
            </div>
          )}
        </div>
      </div>
    );
  };

  const StepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {[1, 2, 3].map((num) => (
        <div key={num} className="flex items-center">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
            step === num ? 'bg-indigo-600 text-white' :
            step > num ? 'bg-green-500 text-white' :
            'bg-gray-200 text-gray-400'
          }`}>
            {step > num ? <Check className="w-5 h-5" /> : num}
          </div>
          {num < 3 && (
            <div className={`w-20 h-1 ${step > num ? 'bg-green-500' : 'bg-gray-200'}`} />
          )}
        </div>
      ))}
    </div>
  );

  const renderPersonalDetails = () => (
    <div className="space-y-6 text-white">
      <h3 className="text-xl font-semibold mb-6">Personal Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleFormChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 text-black focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleFormChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 text-black focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleFormChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 text-black focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleFormChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 text-black focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Address</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleFormChange}
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 text-black focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
    </div>
  );

  const renderBusinessDetails = () => (
    <div className="space-y-6 text-white">
      <h3 className="text-xl font-semibold mb-6">Business Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-1">Business Name</label>
          <input
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleFormChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 text-black focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Position/Title</label>
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleFormChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 text-black focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Business Description</label>
        <textarea
          name="businessDescription"
          value={formData.businessDescription}
          onChange={handleFormChange}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 text-black focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="space-y-4">
        <label className="block text-sm font-medium">Member of Other Organizations?</label>
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
            <span>Yes</span>
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
            <span>No</span>
          </label>
        </div>
      </div>
    </div>
  );

  const renderInterviewQuestions = () => (
    <div className="space-y-6 text-white">
      <h3 className="text-xl font-semibold mb-6">Interview Questions</h3>
      <div className="space-y-6 text-white">
        <div>
          <label className="block text-sm font-medium mb-1">How did you hear about FLY?</label>
          <textarea
            name="hearAbout"
            value={interviewData.hearAbout}
            onChange={handleInterviewChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 text-black focus:ring-indigo-500 focus:border-indigo-500"
            rows={2}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">What strengths would you bring to FLY?</label>
          <textarea
            name="strengths"
            value={interviewData.strengths}
            onChange={handleInterviewChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 text-black focus:ring-indigo-500 focus:border-indigo-500"
            rows={2}
          />
        </div>
        <div className="space-y-4">
          <label className="block text-sm font-medium">Open to Leadership Role?</label>
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
              <span>Yes</span>
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
              <span>No</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  const isFormValid = () => {
    if (step === 1) {
      return formData.fullName && formData.email && formData.phone && formData.address;
    } else if (step === 2) {
      return formData.businessName && formData.position && formData.businessDescription;
    } else if (step === 3) {
      return interviewData.hearAbout && interviewData.strengths;
    }
    return false;
  };

  return (
    <div className="min-h-screen  py-24 px-4 sm:px-6 lg:px-8">

      <AnimatedBackground/>
      <div className="max-w-3xl mx-auto bg-black/30 rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-100">
            FLY Application Form
          </h2>
          <p className="mt-2 text-gray-400">Forward Looking Youth Membership Application</p>
        </div>

        <StatusMessage />
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
              className="flex items-center px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
              disabled={loading}
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Previous
            </button>
          )}

          {step < 3 ? (
            <button
              onClick={() => setStep(step + 1)}
              className={`flex items-center px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors ml-auto ${
                !isFormValid() || loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={!isFormValid() || loading}
            >
              Next
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          ) : (
            <button
              onClick={handlePayment}
              className={`flex items-center px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors ml-auto ${
                !isFormValid() || loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={!isFormValid() || loading}
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  Pay ₹35,000
                  <Check className="w-5 h-5 ml-2" />
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;