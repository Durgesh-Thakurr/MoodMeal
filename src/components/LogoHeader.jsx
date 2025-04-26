import React from 'react';

export default function LogoHeader() {
  return (
    <div className="flex flex-col items-center mb-10">
      <div className="flex items-center space-x-4">
        <img
          src="/logo-moodmeal.png"
          alt="MoodMeal Logo"
          className="w-20 h-20 rounded-full shadow-lg"
        />
        <h1 className="text-4xl font-extrabold text-yellow-700 drop-shadow-md">
          👋 Hi, Welcome to <span className="text-pink-600">MoodMeal</span>!
        </h1>
      </div>
      <p className="text-md text-gray-600 mt-2 italic">Let your feelings choose your food 🍕🍜</p>
    </div>
  );
}

