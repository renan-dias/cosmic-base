import { useSpring, animated } from "@react-spring/web";

const defaultConfig = {
  delay: 100,
  config: { mass: 1, tension: 20, friction: 10 },
};

export const AnimatedNumber = ({ n }: { n: number }) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    ...defaultConfig,
  });

  return (
    <animated.div className="text-2xl text-center p-8">
      {number.to((n) => n.toFixed(0))}
    </animated.div>
  );
};

export const AnimatedBar = ({
  points,
  maxPoints,
}: {
  points: number;
  maxPoints: number;
}) => {
  const totalWidth = Math.round((100 * points) / maxPoints);
  const styles = useSpring({
    from: { width: 0 },
    to: { width: totalWidth },
    ...defaultConfig,
  });
  return (
    <animated.div
      style={{ width: styles.width.to((value) => `${value}%`) }}
      className="rounded-lg h-full bg-gradient-to-br from-green-400 to-blue-400"
    >
      {" "}
    </animated.div>
  );
};
