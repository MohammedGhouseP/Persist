"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SkillsSelection() {
  const router = useRouter();
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [customSkill, setCustomSkill] = useState('');

  const predefinedSkills = [
    'JavaScript', 'Python', 'React', 'Node.js',
    'Data Analysis', 'Project Management', 'UI/UX Design',
    'Machine Learning', 'Communication', 'Leadership'
  ];

  const handleSkillToggle = (skill: string) => {
    setSelectedSkills(prev =>
      prev.includes(skill)
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  const addCustomSkill = () => {
    if (customSkill && !selectedSkills.includes(customSkill)) {
      setSelectedSkills(prev => [...prev, customSkill]);
      setCustomSkill('');
    }
  };

  const handleContinue = () => {
    if (selectedSkills.length > 0) {
      router.push(`/interview?skills=${selectedSkills.join(',')}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="h-40 bg-gradient-to-r from-indigo-600 to-blue-500 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white drop-shadow-lg">
            Select Your Skills
          </h1>
          <p className="text-lg text-white drop-shadow-md">
            Customize your journey by choosing skills
          </p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto p-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-xl">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            Choose from Common Skills
          </h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {predefinedSkills.map(skill => (
              <button
                key={skill}
                onClick={() => handleSkillToggle(skill)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${selectedSkills.includes(skill)
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'}`}
              >
                {skill}
              </button>
            ))}
          </div>

          <div className="flex gap-2 mb-6">
            <input
              type="text"
              value={customSkill}
              onChange={(e) => setCustomSkill(e.target.value)}
              placeholder="Add custom skill"
              className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
            <button
              onClick={addCustomSkill}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
            >
              Add
            </button>
          </div>

          {selectedSkills.length > 0 && (
            <div className="mb-6">
              <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
                Selected Skills:
              </h3>
              <div className="flex flex-wrap gap-2">
                {selectedSkills.map(skill => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-indigo-100 text-indigo-700 dark:bg-indigo-900/20 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          <button
            onClick={handleContinue}
            disabled={selectedSkills.length === 0}
            className={`w-full py-3 rounded-md text-white font-medium transition 
              ${selectedSkills.length > 0
                ? 'bg-indigo-600 hover:bg-indigo-700'
                : 'bg-gray-900 cursor-not-allowed'}`}
          >
            Continue to Interview
          </button>
        </div>
      </main>
    </div>
  );
}
