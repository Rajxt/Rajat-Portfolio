import React, { useState } from 'react';
import { Header } from './components/Header';
import { LiveStats } from './components/LiveStats';
import { ProgressBar } from './components/ProgressBar';
import { ActionButtons } from './components/ActionButtons';
import { PipelineVisualization } from './components/PipelineVisualization';
import { StageDetails } from './components/StageDetails';
import { LiveLogs } from './components/LiveLogs';
import { Footer } from './components/Footer';
import { useStats } from './hooks/useStats';
import { usePipeline } from './hooks/usePipeline';
import { pipelineData } from './data/pipelineData';

function App() {
  const [selectedStage, setSelectedStage] = useState(null);
  const stats = useStats();
  const { logs, isRunning, progress, runPipeline } = usePipeline();

  const handleStageClick = (stage) => {
    setSelectedStage(selectedStage?.id === stage.id ? null : stage);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-8">
        <Header isRunning={isRunning} />
        <LiveStats stats={stats} />
        <ProgressBar progress={progress} isRunning={isRunning} />
        <ActionButtons isRunning={isRunning} onRunPipeline={runPipeline} />
      </div>

      {/* Pipeline Section */}
      <div className="max-w-7xl mx-auto mb-8">
        <PipelineVisualization
          pipeline={pipelineData}
          selectedStage={selectedStage}
          onStageClick={handleStageClick}
        />
        <StageDetails stage={selectedStage} />
        <LiveLogs logs={logs} />
        <Footer />
      </div>
    </div>
  );
}

export default App;