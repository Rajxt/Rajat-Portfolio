import React from 'react';

export const ProgressBar = ({ progress, isRunning }) => {
  if (!isRunning) return null;

  return (
    <div className="bg-slate-900 rounded-lg p-4 mb-6 border border-slate-800">
      <div className="flex justify-between text-sm mb-2">
        <span className="text-slate-400 font-mono">Pipeline Progress</span>
        <span className="text-slate-300 font-mono">{Math.floor(progress)}%</span>
      </div>
      <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
        <div 
          className="bg-gradient-to-r from-blue-500 to-purple-500 h-full transition-all duration-300 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};