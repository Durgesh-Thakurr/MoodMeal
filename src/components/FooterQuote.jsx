import React from 'react';

const quotes = {
  happy: "Happiness is homemade. 🍽️",
  sad: "Even cloudy skies serve good food. ☁️",
  excited: "Fuel the hype with something spicy! 🔥",
  tired: "Recharge with something comforting. 😌",
  calm: "A calm meal soothes the soul. 🧘‍♂️",
  angry: "Cool down with a chill bite. ❄️",
  stressed: "Breathe. Now taste something nice. 🌿",
  bored: "Snack your way out of boredom. 🍿",
  motivated: "Fuel your fire. 💪",
  proud: "Celebrate yourself with something delicious! 🏆",
  default: "Great mood, great food. 🎯"
};

export default function FooterQuote({ mood }) {
  const quote = quotes[mood?.toLowerCase()] || quotes.default;

  return (
    <div className="text-xs sm:text-sm">
      <p className="mb-1 italic">"{quote}"</p>
      <a
        href="https://instagram.com/durgesh.thakurr"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Contact Developer
      </a>
    </div>
  );
}
