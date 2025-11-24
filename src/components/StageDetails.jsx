import React from 'react';

export const StageDetails = ({ stage }) => {
  if (!stage) return null;

  return (
    <div className="mt-8 bg-slate-900 rounded-lg p-6 border border-slate-800">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-slate-100">{stage.title}</h3>
          <p className="text-sm text-slate-500 font-mono mt-1">
            {stage.name} | {stage.details.duration} | {stage.details.lastRun}
          </p>
        </div>
        <span className="bg-green-500/10 text-green-400 px-3 py-1 rounded text-xs font-mono border border-green-500/20">
          SUCCESS
        </span>
      </div>

      <div className="bg-slate-950 rounded p-4 font-mono text-sm border border-slate-800">
        <div className="text-slate-500 mb-3">$ kubectl logs stage/{stage.id}</div>
        {stage.details.items.map((item, i) => (
          <div key={i} className="text-slate-300 py-1.5 hover:bg-slate-900 px-2 -mx-2 rounded transition-colors">
            {item}
          </div>
        ))}
        <div className="text-green-400 mt-4 pt-3 border-t border-slate-800">
          ✓ Stage completed successfully
        </div>
      </div>
    </div>
  );
};
