"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Results() {
  const [feedback, setFeedback] = useState({
    technicalScore: 0,
    communicationScore: 0,
    feedback: [],
    summary: ''
  });

  useEffect(() => {
    // Fetch results from backend
    // Simulated API call
    setTimeout(() => {
      setFeedback({
        technicalScore: 85,
        communicationScore: 90,
        feedback: [
          "Strong technical knowledge demonstrated",
          "Clear and concise communication",
          "Good problem-solving approach"
        ],
        summary: "Excellent performance overall. Shows strong potential for the role."
      });
    }, 1500);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Interview Results</h1>
          <p className="text-gray-600 dark:text-gray-300">Here's how you performed</p>
        </div>

        <div className="space-y-8">
          <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            {/* Scores */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="text-center p-4 border rounded-lg">
                <div className="text-3xl font-bold text-blue-600">{feedback.technicalScore}%</div>
                <div className="text-sm text-gray-600">Technical Score</div>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="text-3xl font-bold text-green-600">{feedback.communicationScore}%</div>
                <div className="text-sm text-gray-600">Communication Score</div>
              </div>
            </div>

            {/* Detailed feedback */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Feedback Points</h2>
              <ul className="space-y-2">
                {feedback.feedback.map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Summary */}
            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
              <h2 className="text-lg font-semibold mb-2">Summary</h2>
              <p>{feedback.summary}</p>
            </div>
          </section>

          <div className="flex justify-center gap-4">
            <Link
              href="/"
              className="px-6 py-2 bg-blue-600 text-white rounded-md"
            >
              Start New Interview
            </Link>
            <Link
              href="/profile"
              className="px-6 py-2 border border-blue-600 text-blue-600 rounded-md"
            >
              View Profile
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
