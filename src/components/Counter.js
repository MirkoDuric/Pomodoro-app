import { useState, useEffect } from "react";
import Button from "./Button";
export default function Counter() {
  const [learningCounterMin, setLearningCounterMin] = useState(0);
  const [learningCounterSec, setLearningCounterSec] = useState(10);
  const [isCounterRunning, setIsCounterRunning] = useState(false);
  const [brakeCounterRunning, setBrakeCounterRunning] = useState(false);
  const [brakeCounterSec, setBrakeCounterSec] = useState(59);
  const [brakeCounterMin, setBrakeCounterMin] = useState(4);
  useEffect(() => {
    let intervalId;

    if (brakeCounterRunning) {
      intervalId = setInterval(() => {
        if (brakeCounterSec === 0) {
          setBrakeCounterMin((prevMin) => prevMin - 1);
          setBrakeCounterSec(59);
        } else {
          setLearningCounterSec((prevSec) => prevSec - 1);
        }
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [brakeCounterRunning, brakeCounterSec]);
  useEffect(() => {
    if (brakeCounterMin === 0 && brakeCounterSec === 0) {
      setBrakeCounterRunning(false);
      setBrakeCounterMin(4);
      setBrakeCounterSec(59);
    }
  }, [brakeCounterRunning, brakeCounterSec]);
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
    if (learningCounterMin === 0 && learningCounterSec === 0) {
      setIsCounterRunning(false);
      setLearningCounterMin(29);
      setLearningCounterSec(59);
      setBrakeCounterRunning(true);
    }
  }, [isCounterRunning, learningCounterSec]);
  function handleStartButtonClick() {
    setIsCounterRunning(true);
  }

  function handleStopButtonClick() {
    setIsCounterRunning(false);
  }
  function handleRestartButtonClick() {
    setIsCounterRunning(false);
    setLearningCounterMin(29);
    setLearningCounterSec(59);
  }

  return (
    <div>
      <div>
        {brakeCounterRunning ? (
          <div>
            {brakeCounterMin.toString()}:{brakeCounterSec.toString()}
          </div>
        ) : (
          <div>
            {learningCounterMin.toString()}:{learningCounterSec.toString()}
          </div>
        )}
      </div>
      <div>
        <Button name={"Start"} onClick={handleStartButtonClick}></Button>
        <Button name={"Stop"} onClick={handleStopButtonClick}></Button>
        <Button name={"Restart"} onClick={handleRestartButtonClick}></Button>
      </div>
    </div>
  );
}
