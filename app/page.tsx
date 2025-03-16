"use client";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="h-[60vh] bg-gradient-to-r from-indigo-600 to-blue-500 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-4">
            Welcome to Persist
          </h1>
          <p className="text-xl text-white drop-shadow-md mb-8">
            Your Personal Development Journey Starts Here
          </p>
          <Link href="/skills">
            <button className="bg-white text-indigo-600 font-semibold px-8 py-3 rounded-full shadow-md hover:bg-indigo-50 transition">
              Get Started
            </button>
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-16">
        <section className="bg-white dark:bg-gray-800 rounded-lg p-10 shadow-xl">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-8">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-6 shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-200 mb-4">
                Skill Development
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Personal Growth', 'Leadership', 'Communication', 'Productivity'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-1 bg-indigo-200 dark:bg-indigo-700/50 text-indigo-800 dark:text-indigo-100 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-blue-700 dark:text-blue-200 mb-4">
                Learning Paths
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-white dark:bg-gray-700 rounded-md shadow-sm">
                  <p className="font-semibold text-gray-800 dark:text-gray-200">
                    Customized Learning Experience
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Track your progress • Set goals • Achieve more
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
