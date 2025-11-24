import React from 'react';
import { PipelineStage } from './PipelineStage';

export const PipelineVisualization = ({ pipeline, selectedStage, onStageClick }) => {
  return (
    <div className="relative">
      {/* Connection Line */}
      <div className="absolute top-14 left-0 right-0 h-0.5 bg-slate-800 z-0 hidden md:block"></div>

      {/* Pipeline Stages */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 relative z-10">
        {pipeline.map((stage) => (
          <PipelineStage
            key={stage.id}
            stage={stage}
            isSelected={selectedStage?.id === stage.id}
            onClick={() => onStageClick(stage)}
          />
        ))}
      </div>
    </div>
  );
};