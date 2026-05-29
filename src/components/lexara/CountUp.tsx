import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, animate } from "motion/react";

export function CountUp({
  to,
  duration = 2,
  suffix = "",
  className,
}: {
  to: number;
  duration?: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setVal(v),
    });
    return controls.stop;
  }, [inView, to, duration, mv]);

  return (
    <span ref={ref} className={className}>
      {Math.round(val).toLocaleString()}
      {suffix}
    </span>
  );
}
