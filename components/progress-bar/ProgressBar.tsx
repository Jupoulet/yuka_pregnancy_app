interface ProgressBarProps {
  width: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ width }) => {
  return (
    <progress className="w-full" max="100" value={width}>{width}</progress>
  )
}