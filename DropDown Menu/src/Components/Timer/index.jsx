import { useEffect, useState } from "react";
import "./timer.css";

export default function Timer() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(function () {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  });

  return (
    <div>
      <span className="center-time">{time}</span>
    </div>
  );
}
