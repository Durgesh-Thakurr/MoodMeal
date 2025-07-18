import React, { useState } from 'react';
import SharePanel from './SharePanel'; // 👈 import here

export default function FoodSuggestion({ mood, suggestions }) {
  const [showSharePanel, setShowSharePanel] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg transition-colors relative">
      <h2 className="text-2xl font-semibold mb-4 text-center text-gray-900 dark:text-white">
        Foods for <span className="text-yellow-600 dark:text-yellow-400">{mood}</span> mood:
      </h2>

      <ul className="space-y-3 list-disc list-inside text-gray-800 dark:text-gray-200">
        {suggestions.map((item, index) => (
          <li key={index}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>

      <div className="relative">
  <button
    onClick={() => setShowSharePanel(true)}
    className="absolute bottom-4 right-4 bg-purple-400 hover:bg-yellow-600 text-white px-4 py-2 rounded-full shadow-md text-sm font-medium transition"
    title="Share your mood"
  >
    Tap to Share 💌
  </button>
</div>



      {showSharePanel && (
        <SharePanel mood={mood} onClose={() => setShowSharePanel(false)} />
      )}
    </div>
  );
}







