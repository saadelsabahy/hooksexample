import React, { useState, useMemo } from 'react';

function UseMemo() {
   const [counterOne, setCounterOne] = useState(0);
   const [counterTwo, setCounterTwo] = useState(0);

   const isEven = useMemo(() => {
      let x = 0;
      while (x < 2000000) {
         x++;
      }
      return counterOne % 2 === 0 ? 'even' : 'odd';
   }, [counterOne]);

   return (
      <div>
         <div>
            <button onClick={() => setCounterOne(counterOne + 1)}>
               counterOne-{counterOne}
            </button>
            {isEven}
         </div>

         <div>
            <button onClick={() => setCounterTwo(counterTwo + 1)}>
               counterTwo-{counterTwo}
            </button>
         </div>
      </div>
   );
}

export default UseMemo;
