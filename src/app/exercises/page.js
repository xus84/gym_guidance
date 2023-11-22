"use client"
import React, { useState } from 'react'
import ExerciseCard from './ExerciseCard';
import Header from '@/components/Header';
import { exercises } from './ExerciseData';
function Exercises() {

  const [selectedExercises, setSelectedExercises] = useState([]);


  const handleExerciseClick = (exercise) => {

    setSelectedExercises((prevExercises) => {
      const isAlreadySelected = prevExercises.some((selectedExercise) => selectedExercise.id === exercise.id);

      if (!isAlreadySelected) {
        return [...prevExercises, exercise];
      } else {
        return prevExercises.filter((e) => e.id !== exercise.id);
      }
    })
  };




  const selectedExercisesList = selectedExercises.map((exercise) => (
    <p key={exercise.id}>{exercise.name}</p>
  ))


  return (
    <div className="bg-red-200">
      <Header />
      <div>
        <h2 className='text-2xl font-bold mt-2 text-center'>Create your own routine and click the timer</h2>
      </div>
      <div className="grid grid-cols gap-4 p-3 md:grid-cols-5 sm:grid-cols-3">
        {exercises.map((exercise, index) => (
          <div key={index}>
            <ExerciseCard exercise={exercise} onSelect={handleExerciseClick} />
          </div>
        ))}
      </div>

      <div className="mt-8 p-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Selected Exercises</h2>
        <ul className="text-1xl font-semibold list-disc pl-8">{selectedExercisesList}
        </ul>
      </div>
    </div>
  )
}

export default Exercises