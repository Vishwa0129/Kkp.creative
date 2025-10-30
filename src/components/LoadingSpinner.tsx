import React from 'react'

const LoadingSpinner: React.FC = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
    <div className="flex flex-col items-center">
      {/* Animated Logo */}
      <div className="relative mb-8">
        <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center animate-pulse">
          <span className="text-white text-2xl font-bold">K</span>
        </div>
        <div className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-ping opacity-20"></div>
      </div>
      
      {/* Loading Text */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">KKP IT Solutions</h2>
        <p className="text-gray-600 mb-6">At the core of innovation</p>
        
        {/* Animated Dots */}
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-purple-600 rounded-full animate-bounce animation-delay-100"></div>
          <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce animation-delay-200"></div>
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="w-64 bg-gray-200 rounded-full h-2 mt-8">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full animate-pulse w-75-percent"></div>
      </div>
      
      <p className="text-gray-500 text-sm mt-4">Loading amazing content...</p>
    </div>
  </div>
)

export default LoadingSpinner