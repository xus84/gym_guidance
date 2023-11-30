import Header from '@/components/Header'
import React from 'react'
import { exercises } from '../routines/ExerciseData'

function Exercises() {
  return (
    <div className="bg-red-200">
      <Header />
      <h1 className="text-2xl font-bold mt-5 mb-5 text-center">Exercises</h1>
      <div className="grid grid-cols-2 gap-3 ml-5">
        {exercises.map((exercise) => (
          <div key={exercise.id} className="flex items-center">
            <div className="mr-4">
              <img src={exercise.image} alt={exercise.name} className="w-40" />
            </div>
            <div className="bg-rose-100 p-4">
              <h1 className="text-xl font-bold text-center mb-3">{exercise.name}</h1>
              <h2 className='text-md font-bold'>{exercise.description}</h2>
              <p className="text-sm text-gray-500">{exercise.exerciseType.name}</p>
              <p>{exercise.exerciseType.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Exercises