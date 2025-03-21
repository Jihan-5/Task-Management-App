import React from 'react';

const ProgressBar = ({ completedTasks, totalTasks }) => {
  const progress = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;

  return (
    <div className="progress mt-3">
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: `${progress}%` }}
        aria-valuenow={progress}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {progress.toFixed(2)}%
      </div>
    </div>
  );
};

export default ProgressBar;