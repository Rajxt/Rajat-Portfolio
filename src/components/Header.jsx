import React from 'react';

export const Header = ({ isRunning }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
      <div>
        <div className="flex items-center gap-3 mb-3">
          <div className={`w-2 h-2 rounded-full ${isRunning ? 'bg-yellow-400 animate-pulse' : 'bg-green-400'}`}></div>
          <span className={`text-sm font-mono ${isRunning ? 'text-yellow-400' : 'text-green-400'}`}>
            {isRunning ? 'Pipeline Running...' : 'All Systems Operational'}
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-slate-100">
          Your Name
        </h1>
        <p className="text-lg md:text-xl text-slate-400">Cloud DevOps Engineer | Build #1337</p>
      </div>
    </div>
  );
};