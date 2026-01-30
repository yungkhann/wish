import { useEffect, useState } from "react";

export function Countdown() {
  const targetDate = new Date("2026-02-14T23:59:59").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      setTimeLeft({
        days: distance > 0 ? Math.floor(distance / (1000 * 60 * 60 * 24)) : 0,
        hours:
          distance > 0
            ? Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            : 0,
        minutes:
          distance > 0
            ? Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            : 0,
        seconds: distance > 0 ? Math.floor((distance % (1000 * 60)) / 1000) : 0,
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const units = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <div className="flex items-center gap-6 p-4">
      {units.map((unit, i) => (
        <>
          <div key={unit.label} className="flex flex-col items-center gap-2">
            <div className="clipped-card">
              <div className="digital-display flex h-full items-center justify-center font-bold">
                {String(unit.value).padStart(2, "0")}
              </div>
            </div>
            <span className="text-sm font-medium tracking-wider uppercase">
              {unit.label}
            </span>
          </div>
          {i < 3 && (
            <div className="mb-6 hidden flex-col gap-2 text-[#8B1F23] sm:flex">
              <div className="h-1.5 w-1.5 rounded-full bg-current sm:h-2 sm:w-2" />
              <div className="h-1.5 w-1.5 rounded-full bg-current sm:h-2 sm:w-2" />
            </div>
          )}
        </>
      ))}
    </div>
  );
}
