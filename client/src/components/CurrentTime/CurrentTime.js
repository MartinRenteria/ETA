import React, { useEffect, useState } from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";

function CurrentTime() {
  const [value, setValve] = useState(new Date());

<<<<<<< HEAD
  useEffect(() => {
=======
const [value, setValve] = useState(new Date())

const myMonth = value.toLocaleString("default", {month: "long"});

    const myDate = myMonth + " " + value.getDate() + ", " + value.getFullYear();

useEffect(()=> {
>>>>>>> fd4ed6fb6bcf2fc306044fe652cb785f9e3927c0
    const interval = setInterval(() => setValve(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

<<<<<<< HEAD
  return (
    <div className="m-2">
      <Clock value={value} />
    </div>
  );
=======
    return (
        <div className="m-2">
            <Clock value={value} className="m-auto"/>

            <h3 className="mt-2 text-center">
                {myDate}
            </h3>

        </div>
    )
>>>>>>> fd4ed6fb6bcf2fc306044fe652cb785f9e3927c0
}

export default CurrentTime;
