import React, { useEffect, useState, useRef } from 'react';

function UseRef() {
   const [timer, setTimer] = useState(0);
   const timerRef = useRef(null);
   useEffect(() => {
      console.log('useEffect');

      timerRef.current = setInterval(
         () => setTimer(prevTimer => prevTimer + 1),
         1000
      );
      return () => {
         clearInterval(timerRef.current);
      };
   }, []);
   return (
      <div>
         <span>{timer}</span>
         <button onClick={() => clearInterval(timerRef.current)}>stop</button>
      </div>
   );
}

export default UseRef;
