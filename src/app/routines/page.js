"use client"
import React, { useState } from 'react'
import ExerciseCard from './ExerciseCard';
import Header from '@/components/Header';
import { exercises } from './ExerciseData';
import TimerComponent from '@/components/TimerComponent';
function Routine() {
  
  const [selectedExercises, setSelectedExercises] = useState([]);
  const [isConfirming, setIsConfirming] = useState(false);

  const handleExerciseClick = (exercise) => {
    setSelectedExercises((prevExercises) => {
      const isAlreadySelected = prevExercises.some(
        (selectedExercise) => selectedExercise.id === exercise.id
      );
  
      if (isAlreadySelected) {
        return [...prevExercises, exercise];
      } else {
        return [...prevExercises, exercise];
      }
    });
  };
  


  const handleDeleteExercise = (exercise) => {
    setSelectedExercises((prevExercises) => {
      const updatedExercises = [...prevExercises];
      const index = updatedExercises.findIndex((e) => e.id === exercise.id);
      if (index !== -1) {
        updatedExercises.splice(index, 1);
      }
      return updatedExercises;
    });
  };
  

  const handleConfirmClick = () => {
    setIsConfirming(!isConfirming);
  };


  const selectedExercisesList = selectedExercises.map((exercise) => (
    <div key={exercise.id} className="inline-flex gap-20 bg-white m-4 p-4 rounded">
      <p>{exercise.name}</p>
      <button onClick={() => handleDeleteExercise(exercise)}>❌</button>
    </div>
  ))


  return (
    <div className="bg-red-200">
      <Header />
      <div>
        <h2 className='text-2xl font-bold mt-5 mb-5 text-center'>Create your own routine and click the timer</h2>
      </div>
      {!isConfirming ? (
         <div className="grid grid-cols gap-4 p-3 md:grid-cols-5 sm:grid-cols-3">
         {exercises.map((exercise, index) => (
           <div key={index}>
             <ExerciseCard exercise={exercise} onSelect={handleExerciseClick} selectedExercises={selectedExercises}/>
           </div>
         ))}
       </div>
      ) : (
        <TimerComponent selectedExercises={selectedExercises} />
      )}
     
      <div className="mt-8 p-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Selected Exercises</h2>
        <ul className="text-1xl font-semibold list-disc pl-8">{selectedExercisesList}
        </ul>
        <div className='flex justify-center'>
        <button className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded' onClick={handleConfirmClick}>{isConfirming ? 'Cancel' : 'Confirm'}</button>
        </div>
      </div>
    </div>
  )
}

export default Routine