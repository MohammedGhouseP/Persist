"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function InterviewSetup() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch questions from backend based on selected skills
    // Simulated API call
    setTimeout(() => {
      setQuestions([
        'Explain React hooks'
        // ... more questions
      ]);
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Interview Setup</h1>
          <p className="text-gray-600 dark:text-gray-300">Review your interview questions and check your setup</p>
        </div>

        <div className="space-y-8">
          <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">System Check</h2>
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Camera access granted</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Microphone access granted</span>
              </div>
            </div>

            <Link
              href="/interview"
              className="block w-full text-center px-6 py-3 bg-blue-600 text-white rounded-md"
            >
              Start Interview
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}
