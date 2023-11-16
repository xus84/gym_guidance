"use client"
import { useState } from 'react';
const ExerciseCard = ({ exercise, onSelect }) => {
    const { name, description, image } = exercise;
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
      setIsClicked(!isClicked);
      onSelect(exercise);
    };

    
  
    return (
        
        <div className="bg-white max-h-[18rem] min-h-[18rem]"
          onClick={handleClick}
          style={{
            border: `2px solid ${isClicked ? 'green' : 'gray'}`,
            borderWidth: `${isClicked ? '4px' : '2px'}`,
            padding: '10px',
            margin: '10px',
            cursor: 'pointer',
          }

          }> {/* Updated width class for lg */}
          <div className="border border-gray-300 p-2 rounded-md">
            <div className="flex flex-col items-center ">
            <img className="w-full h-16 object-cover mb-2 rounded-md" src={image} alt={name} style={{ width: exercise.width, height: exercise.height }}/>
            </div>
            <h3 className="text-lg font-bold mb-2">{name}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
            {/* Add a link to the individual exercise page if needed */}
          </div>
        </div>
      
    );
  };
  
  export default ExerciseCard;
  