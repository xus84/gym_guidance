"use client"
import Header from '@/components/Header';
import { exercises } from '../routines/ExerciseData';

function Exercises() {
  return (
    <>
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-red-200">
        {exercises.map((exercise) => (
          <div key={exercise.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div key={exercise.id} className="border rounded-lg p-4 mb-2">
              <img src={exercise.image} alt={exercise.name} className="w-32 h-32 object-cover mx-auto" />
              <h3 className="text-lg font-bold mt-4">{exercise.name}</h3>
              <p className="mt-2">{exercise.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Exercises;