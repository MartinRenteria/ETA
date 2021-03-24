import React, { useEffect, useState } from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";

function CurrentTime() {
  const [value, setValve] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValve(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="m-2">
      <Clock value={value} />
    </div>
  );
}

export default CurrentTime;
