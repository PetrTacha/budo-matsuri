import React, { useState, useEffect } from "react";


const CounterTime = () => {

    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

    function calculateTimeRemaining() {
      const endTime = new Date('2024-04-20T00:00:00Z');
      const currentTime = new Date();
      let difference = Math.max(endTime - currentTime, 0);
  
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      difference -= days * (1000 * 60 * 60 * 24);
  
      const hours = Math.floor(difference / (1000 * 60 * 60));
      difference -= hours * (1000 * 60 * 60);
  
      const minutes = Math.floor(difference / (1000 * 60));
      difference -= minutes * (1000 * 60);
  
      return {
        days,
        hours,
        minutes,
        seconds: Math.floor(difference / 1000),
      };
    }
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setTimeRemaining(calculateTimeRemaining());
      }, 1000);
  
      return () => clearInterval(intervalId);
    }, []);
  
return (
    <div>
    <p>Days: {timeRemaining.days}</p>
    <p>Hours: {timeRemaining.hours}</p>
    <p>Minutes: {timeRemaining.minutes}</p>
    <p>Seconds: {timeRemaining.seconds}</p>
  </div>
)

}

export default CounterTime;