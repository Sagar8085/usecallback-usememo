import React, { useMemo, useState } from 'react'

export default function UseMemo() {
    const [countOne, setCountOne] = useState(0);
    const [countTwo, setCountTwo] = useState(0);
  
    const increseOne = () => {
      setCountOne(countOne + 1);
    };
    const increseTwo = () => {
      setCountTwo(countTwo + 1);
    };
  
    const checkEvenOdd = useMemo(() => {
      console.log("------");
      let i = 0;
      while (i < 200) i++;
  
      return countOne % 2 === 0;
    }, [countOne]);
  
  return (
    <div>
    <h1>{countOne}</h1>
    <button onClick={increseOne}>increseOne</button>
    <br />
    <span>{checkEvenOdd ? "Even" : "Odd"}</span>
    <h1>{countTwo}</h1>
    <button onClick={increseTwo}>increseTwo</button>
    <h2>Start editing to see some magic happen!</h2>
  </div>
  )
}
