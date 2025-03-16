export default function Profile() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="h-48 bg-blue-600 relative">
        <div className="absolute -bottom-16 left-8">
          <div className="w-32 h-32 rounded-full border-4 border-white bg-gray-200">
            {/* Profile image here */}
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-8 pt-20">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold">John Doe</h1>
              <p className="text-gray-600">Full Stack Developer</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  value="john@example.com"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  value="+1 234 567 8900"
                  readOnly
                />
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'Node.js', 'TypeScript'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-2">Education</h2>
              <div className="space-y-2">
                <div className="p-3 border rounded-md">
                  <p className="font-medium">Bachelor in Computer Science</p>
                  <p className="text-sm text-gray-600">University Name • 2018-2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
