"use client"
import { useState } from 'react';

{/* 
ExerciseCard component displays an exercise card with name, description, and image.

Props:
- exercise: Object representing the exercise data
- onSelect: Function called when the exercise card is clicked
*/}

 
const ExerciseCard = ({ exercise, onSelect }) => {
  const { name, description, image } = exercise;
  const [isClicked, setIsClicked] = useState();
  
  const handleClick = () => {
    setIsClicked(!isClicked);
    onSelect(exercise);
  };



  return (
    
    <div
    className={`bg-white max-h-[18rem] min-h-[18rem] ${
      isClicked ? 'border-green-500 border-4' : 'border-gray-500 border-2'
    } p-2 m-3 cursor-pointer`}
    onClick={handleClick}
    >
      <div className="border border-gray-300 p-2 rounded-md">
        <div className="flex flex-col items-center ">
          <img className="w-full h-16 object-cover mb-2 rounded-md exercise-image" src={image} alt={name}/>
        </div>
        <h3 className="text-lg font-bold mb-2">{name}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
        {/* Add a link to the individual exercise page if needed */}
      </div>
    </div>
  );
};

export default ExerciseCard;
