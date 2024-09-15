import React from "react";

export default function Heart({
  transform,
  strokeWidth,
  className,
  guide,
}: {
  transform?: React.SVGProps<SVGPathElement>["transform"];
  strokeWidth?: React.SVGProps<SVGPathElement>["strokeWidth"];
  className?: React.SVGProps<SVGPathElement>["className"];
  guide?: boolean;
}) {
  return (
    <svg>
      <g transform={transform}>
        <path
          strokeWidth={strokeWidth}
          className={className}
          d={`
        M 1, 16
        a 10,10 0 0 1 20,-10
        a 10,10 0 0 1 20,10
        a 100,50 0 0 1 -20,20
        a 100,50 0 0 1 -20,-20
        Z
        `}
        />
        {guide && (
          <rect fill="none" stroke="red" strokeWidth={0.1} x={0} y={0} width={42} height={36} />
        )}
      </g>
    </svg>
  );
}
