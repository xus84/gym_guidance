import React, { useState, useEffect } from 'react';

function TimerComponent({ selectedExercises }) {
 
  const [duration, setDuration] = useState(0)
  const [isRunning, setIsRunning] = useState(false);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [initialExercise, setInitialExercise] = useState({
    name: selectedExercises[0]?.name,
    image: selectedExercises[0]?.image
  });

  useEffect(() => {
    let intervalId;
    let elapsedTime = 0;

    if (isRunning) {
      intervalId = setInterval(() => {
        setDuration((prevDuration) => {
          const newDuration = prevDuration - 1;
          elapsedTime += 1;

          if (newDuration === 0) {
            setIsRunning(false);
          }

          if (elapsedTime === 60) {
            setCurrentExerciseIndex((prevIndex) =>
              (prevIndex + 1) % selectedExercises.length
            );
            elapsedTime = 0; 
          }

          return newDuration;
        });
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning, selectedExercises]);
  
  
  

  const handleStart = () => {

    const totalDuration = selectedExercises.length * 30;

    setDuration(totalDuration)

    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning((prevState) => !prevState);
  };

  const handleReset = () => {
    setCurrentExerciseIndex(0);
    setIsRunning(false);
    setDuration(0);
    setInitialExercise({
      name: selectedExercises[0]?.name,
      image: selectedExercises[0]?.image,
    });
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const currentExercise = selectedExercises[currentExerciseIndex];
  const { name, image } = currentExercise;
  const exercise = selectedExercises[currentExerciseIndex] || initialExercise ;

  return (
    <div className="flex flex-col items-center justify-center bg-gray-200 p-5 rounded-lg">
      <h2 className="text-5xl text-center mb-4">Timer: {formatTime(duration)}</h2>
      {selectedExercises.length > 0 && (
        <div className="exercise-container">
          <div className='flex items-center justify-center'>
          <img className='w-1/3 h-1/3' src={image} alt={name}/>
          </div>
          <div>
          <h3 className='text-2xl text-center mb-3'>{name}</h3>
          </div>
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