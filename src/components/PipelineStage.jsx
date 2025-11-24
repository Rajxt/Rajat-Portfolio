import React from 'react';
import { CheckCircle, GitBranch, Briefcase, Award, Rocket } from 'lucide-react';

const iconMap = {
  source: GitBranch,
  build: Briefcase,
  test: Award,
  deploy: Rocket
};

export const PipelineStage = ({ stage, isSelected, onClick }) => {
  const Icon = iconMap[stage.id] || GitBranch;

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={onClick}
        className={`relative w-28 h-28 rounded-lg flex flex-col items-center justify-center transition-all duration-300 cursor-pointer border-2
          ${isSelected 
            ? 'bg-slate-800 border-blue-500 shadow-lg shadow-blue-500/20 scale-105' 
            : 'bg-slate-900 border-slate-800 hover:border-slate-700 hover:scale-105'
          }`}
      >
        <CheckCircle className="absolute -top-2 -right-2 text-green-400 w-6 h-6 bg-slate-950 rounded-full" />
        <Icon className="w-10 h-10 mb-2 text-slate-300" />
        <span className="font-mono text-xs text-slate-400">{stage.name}</span>
      </button>

      <div className="mt-3 text-center">
        <p className="font-semibold text-sm text-slate-200">{stage.title}</p>
        <p className="text-xs text-slate-500 font-mono mt-1">
          ✓ {stage.details.duration}
        </p>
      </div>
    </div>
  );
};