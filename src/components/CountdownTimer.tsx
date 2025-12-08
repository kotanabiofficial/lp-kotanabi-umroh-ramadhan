import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft | {} => {
    const difference = +targetDate - +new Date();
    let timeLeft: TimeLeft | {} = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  // Initialize with empty object to ensure server and initial client render match
  const [timeLeft, setTimeLeft] = useState<TimeLeft | {}>({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Calculate immediately on mount
    setTimeLeft(calculateTimeLeft());
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Don't render anything on the server to avoid mismatch, or render a skeleton
  if (!mounted) {
    return null; 
  }

  // Fix: Replaced 'JSX.Element' with 'React.ReactElement' to resolve the 'Cannot find namespace JSX' error.
  const timerComponents: React.ReactElement[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    const key = interval as keyof TimeLeft;
    if (!timeLeft.hasOwnProperty(key)) return;

    timerComponents.push(
      <div key={key} className="text-center mx-2 md:mx-4">
        <span className="text-3xl md:text-5xl font-bold">
          {(timeLeft as TimeLeft)[key]}
        </span>
        <span className="block text-sm uppercase">{key}</span>
      </div>
    );
  });

  return (
    <div className="bg-white/20 backdrop-blur-sm p-4 md:p-6 rounded-xl inline-flex">
      {timerComponents.length ? timerComponents : <span>Promo Telah Berakhir!</span>}
    </div>
  );
};

export default CountdownTimer;
