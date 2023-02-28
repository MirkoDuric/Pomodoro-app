import { useState, useEffect } from "react";
import Button from "./Button";
export default function Counter() {
  const [learningCounterMin, setLearningCounterMin] = useState(29);
  const [learningCounterSec, setLearningCounterSec] = useState(59);
  const [isCounterRunning, setIsCounterRunning] = useState(false);

  const [learningCounter, setLearningCounter] = useState(true);

  const [brakeCounterRunning, setBrakeCounterRunning] = useState(false);
  const [brakeCounterSec, setBrakeCounterSec] = useState(59);
  const [brakeCounterMin, setBrakeCounterMin] = useState(4);

  useEffect(() => {
    let intervalId;

    if (isCounterRunning) {
      intervalId = setInterval(() => {
        if (learningCounterSec === 0) {
          setLearningCounterMin((prevMin) => prevMin - 1);
          setLearningCounterSec(59);
        } else {
          setLearningCounterSec((prevSec) => prevSec - 1);
        }
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isCounterRunning, learningCounterSec]);

  useEffect(() => {
    let intervalId;

    if (brakeCounterRunning) {
      intervalId = setInterval(() => {
        if (brakeCounterSec === 0) {
          setBrakeCounterMin((prevMin) => prevMin - 1);
          setBrakeCounterSec(59);
        } else {
          setBrakeCounterSec((prevSec) => prevSec - 1);
        }
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [brakeCounterRunning, brakeCounterSec]);

  useEffect(() => {
    if (learningCounterMin === 0 && learningCounterSec === 0) {
      setIsCounterRunning(false);
      setLearningCounterMin(29);
      setLearningCounterSec(59);
      setLearningCounter(false);
    }
    if (brakeCounterMin === 0 && brakeCounterSec === 0) {
      setBrakeCounterRunning(false);
      setBrakeCounterMin(4);
      setBrakeCounterSec(59);
      setLearningCounter(true);
    }
  }, [isCounterRunning, learningCounterSec, brakeCounterSec]);

  function handleStartLearningButtonClick() {
    setIsCounterRunning(true);
  }
  function handleStartBrakeButtonClick() {
    setBrakeCounterRunning(true);
    console.log(brakeCounterRunning);
  }
  function handleStopLearningButtonClick() {
    setIsCounterRunning(false);
  }
  function handleStopBrakeButtonClick() {
    setBrakeCounterRunning(false);
  }
  function handleRestartLearningButtonClick() {
    setIsCounterRunning(false);
    setLearningCounterMin(29);
    setLearningCounterSec(59);
  }
  function handleReastartBrakeButtonClick() {
    setBrakeCounterRunning(false);
    console.log(brakeCounterRunning);
    setBrakeCounterMin(4);
    setBrakeCounterSec(59);
  }

  return (
    <div>
      <div>
        {learningCounter ? (
          <div>
            {learningCounterMin.toString()}:{learningCounterSec.toString()}
            <div>
              <Button
                onClick={handleStartLearningButtonClick}
                name={"Start"}
              ></Button>
              <Button
                name={"Stop"}
                onClick={handleStopLearningButtonClick}
              ></Button>
              <Button
                onClick={handleRestartLearningButtonClick}
                name={"Restart"}
              ></Button>
            </div>
          </div>
        ) : (
          <div>
            {brakeCounterMin.toString()}:{brakeCounterSec.toString()}
            <div>
              <Button
                onClick={handleStartBrakeButtonClick}
                name={"Start"}
              ></Button>
              <Button
                name={"Stop"}
                onClick={handleStopBrakeButtonClick}
              ></Button>
              <Button
                onClick={handleReastartBrakeButtonClick}
                name={"Restart"}
              ></Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
