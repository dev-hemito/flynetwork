import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

export function SuccessMessage({ userData }) {
  return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-gray-800 p-8 rounded-lg max-w-md w-full text-white text-center">
              <h2 className="text-2xl font-bold mb-4"> <FaCheckCircle/> Registration Complete!</h2>
              <div className="mb-6">
                  <p className="text-lg">Thank you for participating, {userData?.name}!</p>
                  {userData?.quizResults?.qualified ? (
                      <>
                          <p className="text-green-400 mt-4">Congratulations! You've qualified for the next round.</p>
                          <p className="text-sm mt-2">We'll contact you at {userData?.email} with further details.</p>
                      </>
                  ) : (
                      <p className="text-gray-300 mt-4">Thank you for your participation. Keep Looking and try again next time!</p>
                  )}
              </div>
              <button 
                  onClick={() => window.location.reload()}
                  className="w-full bg-purple-800 text-white py-2 rounded-lg hover:bg-purple-500 transition-colors"
              >
                  Back to Home
              </button>
          </div>
      </div>
  );
}

export default SuccessMessage