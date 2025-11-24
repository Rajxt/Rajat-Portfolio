import React from 'react';
import { Activity, GitBranch, Terminal } from 'lucide-react';

export const ActionButtons = ({ isRunning, onRunPipeline }) => {
  return (
    <div className="flex flex-wrap gap-3">
      <button 
        onClick={onRunPipeline}
        disabled={isRunning}
        className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-700 disabled:cursor-not-allowed px-4 py-2 rounded text-sm font-semibold flex items-center gap-2 transition-colors"
      >
        <Activity className="w-4 h-4" />
        {isRunning ? 'Running...' : 'Run Pipeline'}
      </button>
      <button className="bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded text-sm font-semibold flex items-center gap-2 transition-colors border border-slate-700">
        <GitBranch className="w-4 h-4" />
        GitHub
      </button>
      <button className="bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded text-sm font-semibold flex items-center gap-2 transition-colors border border-slate-700">
        <Terminal className="w-4 h-4" />
        Resume.pdf
      </button>
    </div>
  );
};