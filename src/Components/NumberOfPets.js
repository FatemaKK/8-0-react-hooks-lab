import React, { useState } from "react";
import "./NumberOfPets.css";

const NumberOfPets = () => {
  const [numOfPets, setNumOfPets] = useState(0);

  const decrementNum = () => {
    if (numOfPets > 0) {
      setNumOfPets((prevNum) => prevNum - 1);
    }
  };
  const incrementNum = () => {
    setNumOfPets((prevNum) => prevNum + 1);
  };

  return (
    <section className="num-of-pets">
      <h4>Number of Pets</h4>
      <h5>{numOfPets}</h5>
      <div>
        <button onClick={decrementNum} id="less">
          -
        </button>
        <button onClick={incrementNum} id="more">
          +
        </button>
      </div>
    </section>
  );
};

export default NumberOfPets;
