import React from 'react';
import { Terminal } from 'lucide-react';

export const LiveLogs = ({ logs }) => {
  if (logs.length === 0) return null;

  return (
    <div className="mt-8 bg-slate-900 rounded-lg p-4 border border-slate-800">
      <div className="flex items-center gap-2 mb-3">
        <Terminal className="w-4 h-4 text-slate-400" />
        <h3 className="text-sm font-bold text-slate-300">Live Pipeline Logs</h3>
      </div>
      <div className="bg-slate-950 rounded p-3 font-mono text-xs max-h-64 overflow-y-auto border border-slate-800">
        {logs.map((log, i) => (
          <div key={i} className="text-slate-400 py-1 animate-in slide-in-from-left">
            <span className="text-slate-600">[{log.time}]</span> {log.msg}
          </div>
        ))}
      </div>
    </div>
  );
};