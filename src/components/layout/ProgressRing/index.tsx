interface ProgressRingProps {
  value: number;
  max: number;
  color: string;
}

export function ProgressRing({ value, max, color }: ProgressRingProps) {
  const strokeWidth = 10;
  const radius = 50;
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (value / max) * circumference;

  return (
    <svg className="pointer-events-none" height={radius * 2} width={radius * 2}>
      <circle
        stroke="#e6e6e6"
        fill="transparent"
        strokeWidth={strokeWidth}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        className=" transition-all ease-in duration-500"
        stroke={color}
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeDasharray={`${circumference} ${circumference}`}
        style={{ strokeDashoffset }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="#23CAD4"
        fontSize="14px"
        fontWeight="bold"
      >
        {Math.round((value / max) * 100)}%
      </text>
    </svg>
  );
}
