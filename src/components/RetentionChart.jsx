import { retentionCurve } from "../data/portfolioData";

// Maps a 0-100 value to a y-coordinate inside the chart's viewBox.
function toY(value) {
  return 110 - (value / 100) * 90;
}

export default function RetentionChart() {
  const { points, months } = retentionCurve;
  const stepX = 320 / (points.length - 1);

  const linePoints = points
    .map((value, i) => `${i * stepX},${toY(value)}`)
    .join(" ");

  const lastX = (points.length - 1) * stepX;
  const lastY = toY(points[points.length - 1]);

  return (
    <div className="border border-line bg-paper-raised p-5">
      <div className="flex items-baseline justify-between font-mono text-[11px] text-muted mb-2">
        <span>CUSTOMER RETENTION, BY COHORT</span>
        <span className="text-ink text-sm">from the case study</span>
      </div>

      <svg viewBox="0 0 320 120" className="w-full h-auto block">
        <line x1="0" y1="30" x2="320" y2="30" stroke="#D9D5C6" strokeWidth="1" />
        <line x1="0" y1="60" x2="320" y2="60" stroke="#D9D5C6" strokeWidth="1" />
        <line x1="0" y1="90" x2="320" y2="90" stroke="#D9D5C6" strokeWidth="1" />
        <polyline
          points={linePoints}
          fill="none"
          stroke="#3F6B4F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="[stroke-dasharray:520] [stroke-dashoffset:520] animate-draw-line"
        />
        <circle
          cx={lastX}
          cy={lastY}
          r="4"
          fill="#3F6B4F"
          className="opacity-0 animate-fade-in"
        />
      </svg>

      <div className="flex justify-between font-mono text-[10px] text-muted mt-1.5">
        {months.map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>

      <div className="font-mono text-[10px] text-muted mt-3 border-t border-dashed border-line pt-2.5">
        Illustrative cohort curve — swap for a real chart from your dashboard once exported.
      </div>
    </div>
  );
}
