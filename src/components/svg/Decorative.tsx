import path from "path";
import Heart from "./Heart";

export default function Deacorative({
  className,
}: {
  className?: React.SVGProps<SVGGraphicsElement>["className"];
}) {
  const r1x = 90;
  const r1y = 50;
  const r2x = 80;
  const r2y = 50;
  const r3 = 15;
  const r4 = 14.2;
  const spiral = (t: number) => {
    return { x: (t / 2) * Math.cos(-t), y: (t / 2) * Math.sin(-t) };
  };
  return (
    <svg viewBox="-10 -75 310 75">
      <path
        className={className}
        d={`
        M 0,0
        a ${r1x},${r1y} 0 0 0 125,-5
        a ${r3},${r3} 0 0 1 16,0
        a ${r1x},${r1y} 0 0 0 125,5
        a ${r2x},${r2y} 0 0 1 -119,5
        a ${r4},${r4} 0 1 1 -28,0
        a ${r2x},${r2y} 0 0 1 -119,-5
        Z

      `}
      />
      <path
        stroke="red"
        fill="none"
        d={`
        M 20, -10
        t ${spiral(1).x} ${spiral(1).y}
        t ${spiral(2).x} ${spiral(2).y}
        t ${spiral(3).x} ${spiral(3).y}
        t ${spiral(4).x} ${spiral(4).y}
        t ${spiral(5).x} ${spiral(5).y}
        t ${spiral(6).x} ${spiral(6).y}
        t ${spiral(7).x} ${spiral(7).y}
        t ${spiral(8).x} ${spiral(8).y}
        t ${spiral(9).x} ${spiral(9).y}
        t ${spiral(10).x} ${spiral(10).y}
        `}
      />
      <g transform="translate(124.5,1) scale(0.4)">
        <Heart className="fill-pink" />
      </g>
    </svg>
  );
}
