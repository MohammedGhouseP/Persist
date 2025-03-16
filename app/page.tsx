"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [skills, setSkills] = useState<string[]>([]);
  const [customSkill, setCustomSkill] = useState('');
  
  const predefinedSkills = [
    'React', 'Next.js', 'Node.js', 'TypeScript',
    'Python', 'Java', 'Angular', 'Vue.js'
  ];

  const handleAddCustomSkill = () => {
    if (customSkill && !skills.includes(customSkill)) {
      setSkills([...skills, customSkill]);
      setCustomSkill('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Choose Your Skills</h1>
          <p className="text-gray-600 dark:text-gray-300">Select the skills you want to be interviewed for</p>
        </div>

        <div className="space-y-8">
          <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              {predefinedSkills.map((skill) => (
                <button
                  key={skill}
                  onClick={() => !skills.includes(skill) && setSkills([...skills, skill])}
                  className={`p-3 rounded-lg border ${
                    skills.includes(skill)
                      ? 'bg-blue-100 border-blue-500 text-blue-700'
                      : 'border-gray-200 hover:border-blue-500'
                  }`}
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
                className="flex-1 p-2 border rounded-md"
              />
              <button
                onClick={handleAddCustomSkill}
                className="px-4 py-2 bg-blue-600 text-white rounded-md"
              >
                Add
              </button>
            </div>

            {skills.length > 0 && (
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Selected Skills:</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex justify-end">
              <Link
                href="/interview-setup"
                className={`px-6 py-2 rounded-md ${
                  skills.length > 0
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-300 cursor-not-allowed'
                }`}
              >
                Continue
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
