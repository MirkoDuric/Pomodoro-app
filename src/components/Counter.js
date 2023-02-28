import { useState, useEffect } from "react";
import Button from "./Button";
export default function Counter() {
  const [learningCounterMin, setLearningCounterMin] = useState(1);
  const [learningCounterSec, setLearningCounterSec] = useState(1);
  const [isCounterRunning, setIsCounterRunning] = useState(false);

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
  function restartClockAndStop() {
    setIsCounterRunning(false);
    setLearningCounterMin(29);
    setLearningCounterSec(59);
  }
  return (
    <div>
      {learningCounterMin.toString()}:{learningCounterSec.toString()}
      <div>
        <Button name={"Start"} onClick={handleStartButtonClick}></Button>
        <Button name={"Stop"} onClick={handleStopButtonClick}></Button>
        <Button name={"Restart"} onClick={handleRestartButtonClick}></Button>
      </div>
    </div>
  );
}
