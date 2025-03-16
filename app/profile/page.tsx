"use client";
import { useState, useRef } from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    title: "Software Developer",
    email: "john@example.com",
    phone: "+1 234 567 8900",
    skills: ["React", "Node.js", "TypeScript", "Python"]
  });

  const [backgroundImage, setBackgroundImage] = useState<string>("");
  const [profileImage, setProfileImage] = useState<string>("");

  const backgroundInputRef = useRef<HTMLInputElement>(null);
  const profileInputRef = useRef<HTMLInputElement>(null);

  const chartData = {
    labels: ['Technical Skills', 'Soft Skills', 'Leadership', 'Communication'],
    datasets: [{
      data: [65, 20, 10, 5],
      backgroundColor: [
        '#3B82F6',
        '#10B981',
        '#F59E0B',
        '#EF4444'
      ]
    }]
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>, type: 'background' | 'profile') => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (type === 'background') {
          setBackgroundImage(reader.result as string);
        } else {
          setProfileImage(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Navigation Header */}
      <nav className="bg-white dark:bg-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <a href="/" className="text-xl font-bold text-gray-800 dark:text-white">
                Persist
              </a>
            </div>
            <div className="flex space-x-4">
              <a href="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2">
                Dashboard
              </a>
              <a href="/profile" className="text-indigo-600 dark:text-indigo-400 font-medium px-3 py-2">
                Profile
              </a>
              {/* <a href="/settings" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2">
                Settings
              </a> */}
            </div>
          </div>
        </div>
      </nav>

      {/* Cover Image Section */}
      <div 
        className="h-56 relative bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage || '/default-background.jpg'})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40"></div>
        <button
          onClick={() => backgroundInputRef.current?.click()}
          className="absolute bottom-4 right-4 bg-white px-3 py-2 rounded-full shadow-md hover:bg-gray-100 transition"
        >
          <span className="text-sm text-gray-800">Change Cover</span>
        </button>
        <input
          type="file"
          ref={backgroundInputRef}
          hidden
          accept="image/*"
          onChange={(e) => handleImageUpload(e, 'background')}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Profile Photo */}
        <div className="relative -mt-20 mb-8 flex justify-center">
          <div 
            className="w-40 h-40 rounded-full border-4 border-white bg-gray-200 overflow-hidden cursor-pointer hover:opacity-90 transition"
            onClick={() => profileInputRef.current?.click()}
          >
            {profileImage ? (
              <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-700">
                <span>Add Photo</span>
              </div>
            )}
          </div>
          <input
            type="file"
            ref={profileInputRef}
            hidden
            accept="image/*"
            onChange={(e) => handleImageUpload(e, 'profile')}
          />
        </div>

        {/* Profile Details Card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8">
          <div className="flex justify-end mb-6">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition"
            >
              {isEditing ? 'Save' : 'Edit'}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Profile Information */}
            <div className="space-y-6">
              <div>
                {isEditing ? (
                  <input
                    type="text"
                    value={profileData.name}
                    onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                    className="text-3xl font-bold w-full border-b border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 pb-1"
                  />
                ) : (
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">{profileData.name}</h1>
                )}
                {isEditing ? (
                  <input
                    type="text"
                    value={profileData.title}
                    onChange={(e) => setProfileData({ ...profileData, title: e.target.value })}
                    className="text-lg text-gray-600 w-full border-b border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 pb-1"
                  />
                ) : (
                  <p className="text-lg text-gray-600 dark:text-gray-300">{profileData.title}</p>
                )}
              </div>

              <div className="space-y-4">
                {isEditing ? (
                  <>
                    <input
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                      className="w-full border border-gray-300 dark:border-gray-600 rounded p-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <input
                      type="tel"
                      value={profileData.phone}
                      onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                      className="w-full border border-gray-300 dark:border-gray-600 rounded p-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </>
                ) : (
                  <>
                    <p className="text-gray-800 dark:text-gray-200">{profileData.email}</p>
                    <p className="text-gray-800 dark:text-gray-200">{profileData.phone}</p>
                  </>
                )}
              </div>
            </div>

            {/* Skills Distribution Chart */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Skills Distribution
              </h2>
              <div className="w-full h-64">
                <Pie data={chartData} options={{ maintainAspectRatio: false }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
