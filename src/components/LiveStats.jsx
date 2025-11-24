import React from 'react';

export const LiveStats = ({ stats }) => {
  return (
    <div className="flex gap-4 text-xs font-mono">
      <div className="bg-slate-900 px-4 py-2 rounded border border-slate-800">
        <div className="text-slate-500 mb-1">CPU</div>
        <div className="text-blue-400 font-bold">{stats.cpu}%</div>
      </div>
      <div className="bg-slate-900 px-4 py-2 rounded border border-slate-800">
        <div className="text-slate-500 mb-1">MEMORY</div>
        <div className="text-purple-400 font-bold">{stats.memory}%</div>
      </div>
      <div className="bg-slate-900 px-4 py-2 rounded border border-slate-800">
        <div className="text-slate-500 mb-1">NETWORK</div>
        <div className="text-green-400 font-bold">{stats.network} MB/s</div>
      </div>
    </div>
  );
};