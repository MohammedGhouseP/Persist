"use client";
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function Interview() {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [recording, setRecording] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes per question
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [answers, setAnswers] = useState<Blob[]>([]);

  const questions = [
    "Tell me about your experience with React.",
    "Explain the concept of state management.",
    "How do you handle API integration?",
    // Add more questions...
  ];

  useEffect(() => {
    // Initialize camera
    async function setupCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        const recorder = new MediaRecorder(stream);
        setMediaRecorder(recorder);

        // Handle recorded data
        recorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            setAnswers(prev => [...prev, event.data]);
          }
        };
      } catch (err) {
        console.error("Error accessing camera:", err);
      }
    }
    setupCamera();
  }, []);

  useEffect(() => {
    if (!recording) return;
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          stopRecording();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [recording]);

  const startRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.start();
      setRecording(true);
      setTimeLeft(120);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
      mediaRecorder.stop();
      setRecording(false);
      
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
      } else {
        // Interview complete, navigate to results
        router.push('/results');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Progress indicator */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg">
            <div className="flex justify-between mb-2">
              <span>Progress</span>
              <span>{currentQuestion + 1}/{questions.length}</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div 
                className="h-full bg-blue-600 rounded-full transition-all"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Video preview */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              className="w-full aspect-video bg-black rounded-lg mb-4"
            />

            {/* Current question */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Question {currentQuestion + 1}</h2>
              <p className="text-lg">{questions[currentQuestion]}</p>
            </div>

            {/* Timer and controls */}
            <div className="flex items-center justify-between">
              <div className="text-2xl font-mono">
                {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
              </div>
              <div className="space-x-4">
                {!recording ? (
                  <button
                    onClick={startRecording}
                    className="px-6 py-2 bg-green-600 text-white rounded-md"
                  >
                    Start Answer
                  </button>
                ) : (
                  <button
                    onClick={stopRecording}
                    className="px-6 py-2 bg-red-600 text-white rounded-md"
                  >
                    Stop Answer
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
