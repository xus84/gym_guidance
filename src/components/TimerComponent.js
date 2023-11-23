import React, { useState, useEffect } from 'react';

function TimerComponent({ selectedExercises }) {
 
  const [duration, setDuration] = useState(0)
  const [isRunning, setIsRunning] = useState(false);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);

  useEffect(() => {
    let intervalId;
  
    if (isRunning) {
      intervalId = setInterval(() => {
        setDuration((prevDuration) => {
          const newDuration = prevDuration - 1;
          if (newDuration === 0) {
            setIsRunning(false);
            // Additional logic or actions when the timer reaches 00:00
          }
          return newDuration;
        });
  
        if (duration % 30 === 0) {
          setCurrentExerciseIndex((prevIndex) => (prevIndex + 1) % selectedExercises.length);
        }
      }, 1000);
    }
  
    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning, selectedExercises, duration]);

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

  const currentExercise = selectedExercises[currentExerciseIndex];
  const { name, image } = currentExercise;


 

  return (
    <div className="flex flex-col items-center justify-center bg-gray-200 p-20 rounded-lg">
      <h2 className="text-5xl text-center mb-4">Timer: {formatTime(duration)}</h2>
      {selectedExercises.length > 0 && (
        <div className="exercise-container">
          <img className="w-50 h-50" src={image} alt={name} />
          <h3 className='text-2xl text-center mb-3' >{name}</h3>
        </div>
      )}
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