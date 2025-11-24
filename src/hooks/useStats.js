import { useState, useEffect } from 'react';

export const useStats = () => {
  const [stats, setStats] = useState({ 
    cpu: 0, 
    memory: 0, 
    network: 0 
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats({
        cpu: Math.floor(Math.random() * 30) + 10,
        memory: Math.floor(Math.random() * 20) + 45,
        network: Math.floor(Math.random() * 40) + 20
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return stats;
};