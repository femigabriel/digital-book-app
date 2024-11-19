import React, { useEffect, useState } from 'react';
import { Input, DatePicker, Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import Link from 'next/link';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

// Types for user data, score, and section
interface Score {
  activityName: string;
  score: number;
}

interface User {
  id: string;
  name: string;
  scores: Score[];
}

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
    pointBackgroundColor: string;
    pointBorderColor: string;
    pointHoverRadius: number;
    pointHoverBackgroundColor: string;
    tension: number;
    fill: boolean;
  }[];
}

const TeacherScoreSheet: React.FC = () => {
  const [user, setUser] = useState<User | null>(null); // To store the user data
  const [loading, setLoading] = useState<boolean>(false); // Loading state for the user data
  const [studentName, setStudentName] = useState<string>(''); // For the student name input

  // List of section names
  const sections = [
    "Self-Awareness",
    "Self-Management",
    "Social Awareness",
    "Relationship Skills",
    "Decision Making",
    "Optimistic Thinking",
  ];

  // Sample data for the chart
  const chartData: ChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Williams',
        data: [65, 59, 80, 81, 56, 55, 40, 70, 85, 90, 78, 95],
        borderColor: '#652D90',
        backgroundColor: 'rgba(101, 45, 144, 0.2)',
        pointBackgroundColor: '#652D90',
        pointBorderColor: '#fff',
        pointHoverRadius: 6,
        pointHoverBackgroundColor: '#652D90',
        tension: 0.3,
        fill: true,
      },
      {
        label: 'Benchmark',
        data: [75, 68, 78, 82, 62, 60, 55, 75, 88, 91, 80, 92],
        borderColor: '#FFA500',
        backgroundColor: '#3F8A9A00',
        pointBackgroundColor: '#FFA500',
        pointBorderColor: '#fff',
        pointHoverRadius: 6,
        pointHoverBackgroundColor: '#FFA500',
        tension: 0.3,
        fill: true,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const, // specify the exact type to avoid type error
        labels: {
          usePointStyle: true,
          font: {
            size: 14,
            family: 'Arial, sans-serif',
          },
          color: '#333',
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: '#f9f9f9',
        titleColor: '#333',
        titleFont: {
          family: 'Arial, sans-serif',
          weight: 'bold' as const, // use 'bold' as const for correct typing
        },
        bodyColor: '#333',
        bodyFont: { family: 'Arial, sans-serif' },
        borderColor: '#ddd',
        borderWidth: 1,
        boxPadding: 6,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          color: '#333',
          font: { family: 'Arial, sans-serif', size: 12 },
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#333',
          font: { family: 'Arial, sans-serif', size: 12 },
        },
      },
    },
  };

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      try {
        const response = await fetch('/api/user', {
          method: 'GET',
          headers: {
            'user-id': localStorage.getItem('user-id') || '',
          },
        });
        const data = await response.json();
        if (response.ok) {
          setUser(data.user);
        } else {
          console.error(data.error);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  // Function to display scores for each section
  const getSectionScores = (section: string) => {
    if (!user || !user.scores) return [];
    return user.scores.filter((score: Score) => score.activityName === section);
  };

  return (
    <div className="p-6 bg-[#F9F0F7] h-full">
      <Link className="flex items-center mb-6" href='/teacher-dashboard/students'>
        <ArrowLeftOutlined className="text-lg" />
        <span className="ml-2 text-[#652D90] cursor-pointer">Back to Students</span>
      </Link>

      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Teacher SEL Score Sheet</h1>
        <p className="text-gray-600">View, manage, and track the progress of all students participating in SEL activities</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-gray-700">Student name</label>
            <Input 
              placeholder="Student's Name" 
              onChange={(e) => setStudentName(e.target.value)} 
            />
          </div>
          <div>
            <label className="block text-gray-700">Date</label>
            <DatePicker className="w-full" />
          </div>
          <div>
            <label className="block text-gray-700">Teacher's name</label>
            <Input placeholder="Teacher's Name" />
          </div>
        </div>
      </div>

      {studentName && (
        <>
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-lg font-semibold mb-4">SUMMARY</h2>
            <Line data={chartData} options={chartOptions} />
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-lg font-semibold mb-4">Knowledge Sections</h2>
            <p className="text-sm text-gray-600 mb-4">Lesson Scores (Out of 10) Total Score Completion Status</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {sections.map((section, index) => (
                <div key={index} className="border border-gray-300 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">{section}</h3>
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr>
                        <th className="border-b p-1 font-medium text-gray-700">Lesson</th>
                        <th className="border-b p-1 font-medium text-gray-700">Score</th>
                      </tr>
                    </thead>
                    <tbody>
                      {getSectionScores(section).map((score: Score, lessonIndex: number) => (
                        <tr key={lessonIndex} className='border'>
                          <td className="p-1">Lesson {lessonIndex + 1}</td>
                          <td className="p-1 text-center">{score.score}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr className='bg-[#ECE0F5] border'>
                        <td className="p-1 font-semibold">Total</td>
                        <td className="p-1 text-center font-semibold">
                          {getSectionScores(section).reduce((total: number, score: Score) => total + score.score, 0)}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <p className="font-semibold">Completion Status:</p>
          <p className="text-sm text-gray-600">
            * If any section total is less than 20, consider providing additional lessons for that section.
          </p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Teacher Comments:</label>
          <Input.TextArea rows={4} placeholder="Write comments here..." />
        </div>

        <div className="flex justify-between">
          <Button className="bg-red-500 text-white rounded-lg px-4 py-2">Cancel</Button>
          <Button type="primary" className="bg-[#652D90] rounded-lg px-4 py-2">Save</Button>
        </div>
      </div>
    </div>
  );
};

export default TeacherScoreSheet;
