import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const DigitalWatch: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatTime = (date: Date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div className="bg-gray-800 p-8 rounded-2xl shadow-lg text-white">
      <div className="flex items-center justify-center mb-4">
        <Clock size={48} className="text-blue-400 mr-4" />
        <h1 className="text-3xl font-bold">Digital Watch</h1>
      </div>
      <div className="text-6xl font-bold mb-4 text-center">{formatTime(time)}</div>
      <div className="text-xl text-gray-400 text-center">{formatDate(time)}</div>
    </div>
  );
};

export default DigitalWatch;