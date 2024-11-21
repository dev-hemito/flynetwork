'use client'
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Check, Loader2 } from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';

const OCCUPATION_TYPES = {
  STUDENT: 'student',
  EMPLOYEE: 'employee',
  BUSINESS: 'business'
};

const HEAR_ABOUT_OPTIONS = [
  'Social Media',
  'Friends/Family',
  'Google Ads',
  'Website',
  'Other'
];

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) return 'Email is required';
  if (!emailRegex.test(email)) return 'Invalid email format';
  return '';
};

const validatePhone = (phone) => {
  const phoneRegex = /^[6-9]\d{9}$/;
  if (!phone) return 'Phone number is required';
  if (!phoneRegex.test(phone)) return 'Invalid Indian phone number';
  return '';
};

const validateAge = (dateOfBirth) => {
  if (!dateOfBirth) return 'Date of birth is required';
  const age = new Date().getFullYear() - new Date(dateOfBirth).getFullYear();
  if (age < 18) return 'You must be at least 18 years old';
  if (age > 25) return 'Age must be 25 or below';
  return '';
};

export default function ApplicationForm() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const [membershipId, setMembershipId] = useState(null);

  const [showPaymentView, setShowPaymentView] = useState(false);


  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    education: '',
    occupation: '',
    address: '',
    businessName: '',
    hearAbout: '',
    position: '',

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateStep = async (currentStep) => {
    const newErrors = {};

    if (currentStep === 1) {
      if (!formData.fullName) newErrors.fullName = 'Name is required';
      const emailError = validateEmail(formData.email);
      const phoneError = validatePhone(formData.phone);
      const ageError = validateAge(formData.dateOfBirth);

      if (emailError) newErrors.email = emailError;
      if (phoneError) newErrors.phone = phoneError;
      if (ageError) newErrors.dateOfBirth = ageError;
    }

    if (currentStep === 2) {
      if (!formData.education) newErrors.education = 'Education is required';
      if (!formData.occupation) newErrors.occupation = 'Please select an occupation';
      if (!formData.address) newErrors.address = 'Address is required';

      if (formData.occupation === OCCUPATION_TYPES.BUSINESS) {
        if (!formData.businessName) newErrors.businessName = 'Business name is required';
        if (!formData.position) newErrors.businessName = 'Business role is required';

      }
    }

    if (currentStep === 3) {
      if (!formData.hearAbout) newErrors.hearAbout = 'Please select how you heard about us';
      if (formData.hearAbout === 'Other' && !formData.hearAboutOther) {
        newErrors.hearAboutOther = 'Please specify how you heard about us';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleNext = async () => {
    try {
      setLoading(true);
      setErrors({}); // Clear previous errors

      if (step === 1) {
        // First validate the current step
        const isStepValid = await validateStep(1);
        if (!isStepValid) {
          setLoading(false);
          return;
        }

        // Then check for existing email/phone
        const response = await fetch('/api/validate-registration', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: formData.email,
            phone: formData.phone
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          setErrors(prev => ({
            ...prev,
            registration: data.error
          }));
          setLoading(false);
          return;
        }

        // If everything is valid, proceed to next step
        setStep(prev => prev + 1);
      } else {
        // For other steps, just validate and proceed
        const isValid = await validateStep(step);
        if (isValid) {
          setStep(prev => prev + 1);
        }
      }
    } catch (error) {
      console.error('Validation error:', error);
      setErrors(prev => ({
        ...prev,
        registration: 'An error occurred during validation. Please try again.'
      }));
    } finally {
      setLoading(false);
    }
  };

  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      script.onload = () => resolve(true);
      script.onerror = () => {
        script.remove();
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    try {
      setLoading(true);
      setStatus({ type: 'processing', message: 'Initializing registeration process...' });

      const razorpayLoaded = await initializeRazorpay();
      if (!razorpayLoaded) {
        throw new Error('Razorpay SDK failed to load');
      }

      const orderResponse = await fetch('/api/razorpay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: 3500000 }), // Amount in paise
      });

      if (!orderResponse.ok) {
        throw new Error('Failed to create order');
      }
      setLoading(true);
      setStatus({ type: 'processing', message: 'Creating the order' });


      const orderData = await orderResponse.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderData.amount,
        currency: orderData.currency,
        name: "FLY Membership",
        description: "FLY Membership Registration Fee",
        order_id: orderData.id,
        handler: async function (response) {
          try {
            setLoading(true);
            setStatus({ type: 'processing', message: 'Verifying payment and generating Membership ID. Please Wait.' });

            const verifyResponse = await fetch('/api/verify-payment', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
                formData,
              }),
            });

            const verifyData = await verifyResponse.json();

            if (verifyData.success) {
              setMembershipId(verifyData.membershipId);
              setStatus({
                type: 'success',
                message: `Registration successful! Your membership ID is ${verifyData.membershipId}`
              });
              // You might want to redirect to a success page here
            } else {
              throw new Error(verifyData.error || 'Payment verification failed');
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
          color: '#410c66',
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Payment initialization failed. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    const isValid = await validateStep(3);
    if (!isValid) return;

    handlePayment();
  };
  const SuccessView = () => (
    <div className="text-center space-y-6">
      <div className="w-16 h-16 bg-green-500 rounded-full mx-auto flex items-center justify-center">
        <Check className="w-8 h-8 text-white" />
      </div>
      <h2 className="text-3xl font-bold text-white">Welcome to FLY!</h2>
      <p className="text-gray-300">Your membership application has been approved.</p>
      <div className="bg-black/30 rounded-lg p-6 mt-4">
        <p className="text-gray-400">Your Membership ID</p>
        <p className="text-2xl font-bold text-indigo-400">{membershipId}</p>
      </div>
      <p className="text-gray-400 mt-4">
        Please save your membership ID for future reference. You will receive a confirmation email shortly.
      </p>
    </div>
  );
  const ProcessingOverlay = () => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-black/80 p-8 rounded-xl text-center space-y-4">
        <Loader2 className="w-12 h-12 animate-spin mx-auto text-indigo-500" />
        <p className="text-white text-lg">{status.message}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-br  py-12 px-4 sm:px-6 lg:px-8">
      <AnimatedBackground/>
      <div className="max-w-2xl mx-auto bg-black/30 backdrop-blur-xl rounded-2xl p-8">
        <script src='https://checkout.razorpay.com/v1/checkout.js'></script>
        {status.type === 'success' && membershipId ? (
          <SuccessView />
        ) : (
          <>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                Join FLY
              </h2>
              <p className="mt-2 text-gray-400">Forward Looking Youth Membership Application</p>
            </div>

            {/* Progress Steps */}
            <div className="flex justify-between mb-8">
              {[1, 2, 3].map(num => (
                <div key={num} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= num ? 'bg-indigo-600' : 'bg-gray-700'
                    } transition-colors duration-200`}>
                    {step > num ? (
                      <Check className="w-4 h-4 text-white" />
                    ) : (
                      <span className="text-white">{num}</span>
                    )}
                  </div>
                  {num < 3 && (
                    <div className={`w-full h-0.5 ${step > num ? 'bg-indigo-600' : 'bg-gray-700'
                      }`} />
                  )}
                </div>
              ))}
            </div>

            {/* Form Steps */}
            <div className="space-y-6">
            {step === 1 && (
                <div className="space-y-4">
                  {errors.registration && (
                    <div className="p-3 bg-red-500/10 border border-red-500/20 rounded text-red-400">
                      {errors.registration}
                    </div>
                  )}

                  <div>
                    <label htmlFor="fullName" className="block text-sm text-gray-400 mb-1">Full Name</label>
                    <input
                      id="fullName"
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-500"
                    />
                    {errors.fullName && (
                      <p className="text-sm text-red-400 mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="dateOfBirth" className="block text-sm text-gray-400 mb-1">Date of Birth</label>
                    <input
                      id="dateOfBirth"
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      max={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 text-white"
                    />
                    {errors.dateOfBirth && (
                      <p className="text-sm text-red-400 mt-1">{errors.dateOfBirth}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm text-gray-400 mb-1">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-500"
                    />
                    {errors.email && (
                      <p className="text-sm text-red-400 mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm text-gray-400 mb-1">Phone Number</label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter 10-digit phone number"
                      maxLength={10}
                      className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-500"
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-400 mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>
              )}
              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <label htmlFor="education" className="block text-sm text-gray-400 mb-1">Education</label>
                    <input
                      id="education"
                      type="text"
                      name="education"
                      value={formData.education}
                      onChange={handleChange}
                      placeholder="Enter your educational background"
                      className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-500"
                    />
                    {errors.education && (
                      <p className="text-sm text-red-400 mt-1">{errors.education}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm text-gray-400 mb-1">Address</label>
                    <textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Enter your full address"
                      rows={3}
                      className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-500"
                    />
                    {errors.address && (
                      <p className="text-sm text-red-400 mt-1">{errors.address}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="occupation" className="block text-sm text-gray-400 mb-1">Occupation</label>
                    <select
                      id="occupation"
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 text-white"
                    >
                      <option value="">Select Occupation</option>
                      <option value={OCCUPATION_TYPES.STUDENT}>Student</option>
                      <option value={OCCUPATION_TYPES.EMPLOYEE}>Employee</option>
                      <option value={OCCUPATION_TYPES.BUSINESS}>Business Owner</option>
                    </select>
                    {errors.occupation && (
                      <p className="text-sm text-red-400 mt-1">{errors.occupation}</p>
                    )}
                  </div>

                  {formData.occupation === OCCUPATION_TYPES.BUSINESS && (
                    <>
                      <div>
                        <label htmlFor="businessName" className="block text-sm text-gray-400 mb-1">Business Name</label>
                        <input
                          id="businessName"
                          type="text"
                          name="businessName"
                          value={formData.businessName}
                          onChange={handleChange}
                          placeholder="Enter your business name"
                          className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-500"
                        />
                        {errors.businessName && (
                          <p className="text-sm text-red-400 mt-1">{errors.businessName}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="position" className="block text-sm text-gray-400 mb-1">Position</label>
                        <input
                          id="position"
                          type="text"
                          name="position"
                          value={formData.position}
                          onChange={handleChange}
                          placeholder="Enter your business role"
                          className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-500"
                        />
                        {errors.position && (
                          <p className="text-sm text-red-400 mt-1">{errors.position}</p>
                        )}
                      </div>
                    </>
                  )}
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <div>
                    <label htmlFor="hearAbout" className="block text-sm text-gray-400 mb-1">How did you hear about us?</label>
                    <select
                      id="hearAbout"
                      name="hearAbout"
                      value={formData.hearAbout}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 text-white"
                    >
                      <option value="">Select an option</option>
                      {HEAR_ABOUT_OPTIONS.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                    {errors.hearAbout && (
                      <p className="text-sm text-red-400 mt-1">{errors.hearAbout}</p>
                    )}
                  </div>

                  {formData.hearAbout === 'Other' && (
                    <div>
                      <label htmlFor="hearAboutOther" className="block text-sm text-gray-400 mb-1">Please specify</label>
                      <input
                        id="hearAboutOther"
                        type="text"
                        name="hearAboutOther"
                        value={formData.hearAboutOther}
                        onChange={handleChange}
                        placeholder="How did you hear about us?"
                        className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-500"
                      />
                      {errors.hearAboutOther && (
                        <p className="text-sm text-red-400 mt-1">{errors.hearAboutOther}</p>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="mt-8 flex justify-between">
              {step > 1 && (
                <button
                  onClick={() => setStep(prev => prev - 1)}
                  className="flex items-center px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                  disabled={loading}
                >
                  <ChevronLeft className="w-5 h-5 mr-2" />
                  Back
                </button>
              )}

              <button
                onClick={step === 3 ? handleSubmit : handleNext}
                disabled={loading}
                className="flex items-center px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors ml-auto"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Processing...
                  </>
                ) : step === 3 ? (
                  <>
                    Pay ₹35,000
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </>
                ) : (
                  <>
                    Next
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </button>
            </div>

          </>
        )}
        {(status.type === 'processing' && loading) && <ProcessingOverlay />}
        {status.type === 'error' && (
          <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
            <p className="text-red-400">{status.message}</p>
          </div>
        )}
      </div>
    </div>

  );
}
