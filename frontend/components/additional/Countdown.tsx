import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-03-14T09:00:00");

    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const purpleGlow = [
    "0px 0px 6px rgba(119,22,208,1)",
    "0px 0px 15px rgba(119,22,208,1)",
    "0px 0px 60px rgba(119,22,208,0.6)",
  ].join(", ");

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center gap-[clamp(4px,0.5vw,10px)] px-[clamp(8px,1vw,20px)] py-[clamp(4px,1vw,20px)]">
      <span
        className="font-['Marcellus'] leading-[1.2] text-white"
        style={{
          fontSize: "clamp(2.5rem, 6vw, 7rem)",
          textShadow: purpleGlow,
        }}
      >
        {value.toString().padStart(2, "0")}
      </span>
      <span
        className="font-['Cinzel_Decorative'] leading-[1.2] font-bold text-white"
        style={{
          fontSize: "clamp(0.75rem, 1.5vw, 1.5rem)",
          textShadow: purpleGlow,
        }}
      >
        {label}
      </span>
    </div>
  );

  const Separator = () => (
    <div className="mx-[clamp(4px,1vw,20px)] flex h-full items-start pt-[clamp(4px,1vw,20px)]">
      <span
        className="font-['Marcellus'] leading-[1.2] text-white"
        style={{
          fontSize: "clamp(2.5rem, 6vw, 7rem)",
          textShadow: purpleGlow,
        }}
      >
        :
      </span>
    </div>
  );

  return (
    <div className="flex w-full max-w-[clamp(20rem,75vw,1200px)] items-start justify-between justify-center">
      <TimeUnit value={timeLeft.days} label="Days" />
      <Separator />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <Separator />
      <TimeUnit value={timeLeft.minutes} label="Mins" />
      <Separator />
      <TimeUnit value={timeLeft.seconds} label="Sec" />
    </div>
  );
}
