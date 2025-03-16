"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function InterviewSetup() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated API call for questions
    setTimeout(() => {
      setQuestions([
        'Explain React hooks'
        // ... more questions
      ]);
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="h-48 bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white drop-shadow-lg mb-2">
            Interview Setup
          </h1>
          <p className="text-lg text-white drop-shadow-sm">
            Review your interview questions and check your setup
          </p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-12">
        <section className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            System Check
          </h2>
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-700 dark:text-gray-300">Camera access granted</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-700 dark:text-gray-300">Microphone access granted</span>
            </div>
          </div>
          <Link
            href="/interview"
            className="block w-full text-center px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-500 transition"
          >
            Start Interview
          </Link>
        </section>
      </main>
    </div>
  );
}
