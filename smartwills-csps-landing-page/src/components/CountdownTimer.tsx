import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      
      // Get current time in UTC
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      
      // Convert to GMT+8
      const gmt8Time = new Date(utc + (3600000 * 8));
      
      // Create a target date object in GMT+8
      let target = new Date(gmt8Time);
      
      // Find the next Friday
      const dayOfWeek = target.getDay(); // 0 = Sun, 1 = Mon, ..., 5 = Fri
      let daysUntilFriday = (5 - dayOfWeek + 7) % 7;
      
      // If today is Friday but it's past 21:00, target next Friday
      if (daysUntilFriday === 0 && target.getHours() >= 21) {
        daysUntilFriday = 7;
      }
      
      // Set target to next Friday at 21:00:00
      target.setDate(target.getDate() + daysUntilFriday);
      target.setHours(21, 0, 0, 0);
      
      // Calculate difference in milliseconds
      const diff = target.getTime() - gmt8Time.getTime();
      
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Mins', value: timeLeft.minutes },
    { label: 'Secs', value: timeLeft.seconds }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center mb-12"
    >
      <div className="text-sm font-semibold text-[#ab0f0f] uppercase tracking-widest mb-4">
        Next Session Starts In
      </div>
      <div className="flex space-x-3 sm:space-x-6">
        {timeBlocks.map((block) => (
          <div key={block.label} className="flex flex-col items-center">
            <div className="bg-white border border-gray-100 shadow-sm rounded-2xl w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              {block.value.toString().padStart(2, '0')}
            </div>
            <span className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wide">
              {block.label}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
