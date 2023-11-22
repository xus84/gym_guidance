import React, { useState, useEffect } from 'react';

function TimerComponent({ selectedExercises }) {
 
  const [duration, setDuration] = useState(0)
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if(isRunning){
      intervalId = setInterval(() => {
        setDuration((prevDuration) => prevDuration - 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    }
  }, [isRunning]);

  const handleStart = () => {

    const totalDuration = selectedExercises.length * 30;

    setDuration(totalDuration)

    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning((prevState) => !prevState);
  };

  const handleReset = () => {
    setIsRunning(false);
    setDuration(0);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-200 p-20 rounded-lg">
      <h2 className="text-5xl text-center mb-4">Timer: {formatTime(duration)}</h2>
      {selectedExercises.map((exercise) => (
        <div key={exercise.id} className="exercise-container">
          <h3>{exercise.name}</h3>
        </div>
      ))}
      <div className="flex justify-center">
        <button
          className="bg-red-300 hover:bg-red-400 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={handleStart}
        >
          Start
        </button>
        <button
          className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={handlePause}
        >
          {!isRunning ? "Continue" : "Pause"}
        </button>
        <button
          className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default TimerComponent;