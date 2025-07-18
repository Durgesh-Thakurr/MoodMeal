import React, { useState } from 'react';

export const moods = [
  { mood: 'Happy', emoji: '😄' },
  { mood: 'Sad', emoji: '😢' },
  { mood: 'Tired', emoji: '😴' },
  { mood: 'Stressed', emoji: '😤' },
  { mood: 'Excited', emoji: '🤩' },
  { mood: 'Calm', emoji: '😌' },
  { mood: 'Angry', emoji: '😡' },
  { mood: 'Confused', emoji: '😕' },
  { mood: 'Bored', emoji: '🥱' },
  { mood: 'Grateful', emoji: '🙏' },
  { mood: 'Silly', emoji: '🤪' },
  { mood: 'Motivated', emoji: '💪' },
  { mood: 'Love', emoji: '😍' },
  { mood: 'Shy', emoji: '😊' },
  { mood: 'Scared', emoji: '😨' },
  { mood: 'Proud', emoji: '😌' },
  { mood: 'Hopeful', emoji: '🤞' },
  { mood: 'Lazy', emoji: '🛌' },
  { mood: 'Hungry', emoji: '🤤' },
  { mood: 'Energetic', emoji: '⚡' },
  { mood: 'Lonely', emoji: '😔' },
  { mood: 'Creative', emoji: '🎨' },
  { mood: 'Nostalgic', emoji: '🕰️' },
  { mood: 'Anxious', emoji: '😬' },
  { mood: 'Optimistic', emoji: '🌈' },
  { mood: 'Playful', emoji: '🎮' },
  { mood: 'Curious', emoji: '🔍' },
  { mood: 'Romantic', emoji: '💖' },
  { mood: 'Sleepy', emoji: '😪' },
  { mood: 'Determined', emoji: '🏋️' },
  { mood: 'Thankful', emoji: '🧡' },
  { mood: 'Peaceful', emoji: '🕊️' },
];


export default function MoodSelector({ onSelect }) {
  const [search, setSearch] = useState('');

  const filteredMoods = moods.filter(({ mood }) =>
    mood.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search Mood..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-6 px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />

      {/* Mood Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {filteredMoods.map(({ mood, emoji }) => (
          <button
            key={mood}
            onClick={() => onSelect(mood)}
            className="text-xl font-bold bg-white dark:bg-gray-800 dark:text-white px-6 py-4 rounded-2xl shadow-lg hover:bg-yellow-200 dark:hover:bg-gray-700 transition-all text-center"
          >
            {emoji}
            <br />
            {mood}
          </button>
        ))}
      </div>
    </div>
  );
}

