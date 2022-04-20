interface ProgressBarProps {
  width: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ width }) => {
  return (
    <div className="ProgressBar-container w-full rounded bg-slate-300 h-3">
      <div style={{ width: `${width}%` }} className="ProgressBar-progression bg-green-600 h-3 rounded" />
    </div>
  );
};
