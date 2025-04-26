import React from 'react';

export default function SharePanel({ mood, onClose }) {
  const shareText = `I'm feeling ${mood}! Check out MoodMeal 🍽️: https://moodmeal.vercel.app`;
  const url = "https://moodmeal.vercel.app";

  const handleCopy = (platform) => {
    navigator.clipboard.writeText(shareText);
    alert(`Copied for ${platform} ✅`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 w-[92%] max-w-md shadow-xl transition-all text-center relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-400 hover:text-red-500 text-lg font-bold"
          title="Close"
        >
          ✖
        </button>

        {/* Title */}
        <h2 className="text-lg sm:text-xl font-semibold mb-5 text-gray-800 dark:text-white">
          Share your <span className="text-yellow-500">{mood}</span> mood 💛
        </h2>

        {/* Share buttons */}
        <div className="grid grid-cols-2 gap-4 text-sm font-medium">
          <a
            href={`https://wa.me/?text=${encodeURIComponent(shareText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-xl shadow"
          >
            📤 WhatsApp
          </a>
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded-xl shadow"
          >
            🐦 Twitter
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-xl shadow"
          >
            📘 Facebook
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sky-600 hover:bg-sky-700 text-white py-2 px-4 rounded-xl shadow"
          >
            💼 LinkedIn
          </a>
          <button
            onClick={() => handleCopy("Instagram")}
            className="bg-pink-400 hover:bg-pink-500 text-white py-2 px-4 rounded-xl shadow"
          >
            📸 Copy for Instagram
          </button>
          <button
            onClick={() => handleCopy("Snapchat")}
            className="bg-yellow-300 hover:bg-yellow-400 text-black py-2 px-4 rounded-xl shadow"
          >
            👻 Copy for Snapchat
          </button>
        </div>

        {/* Footer */}
        <p className="mt-6 text-xs text-gray-500 dark:text-gray-400">
          MoodMeal 💖 — Spread the vibe!
        </p>
      </div>
    </div>
  );
}
