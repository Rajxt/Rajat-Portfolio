import { useState } from 'react';
import { logMessages } from '../data/pipelineData';

export const usePipeline = () => {
  const [logs, setLogs] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(100);

  const runPipeline = () => {
    setIsRunning(true);
    setProgress(0);
    setLogs([]);
    
    logMessages.forEach(({ time, msg, stage }) => {
      setTimeout(() => {
        setLogs(prev => [...prev, { 
          msg, 
          stage, 
          time: new Date().toLocaleTimeString() 
        }]);
        setProgress(((time / 5000) * 100));
        if (time === 5000) setIsRunning(false);
      }, time);
    });
  };

  return { logs, isRunning, progress, runPipeline };
};