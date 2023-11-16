"use client"
const ExerciseCard = ({ exercise}) => {
    const { name, description, image } = exercise;

    
  
    return (
        
        <div className="bg-white max-h-[17rem] min-h-[17rem]"> {/* Updated width class for lg */}
          <div className="border border-gray-300 p-4 rounded-md">
            <div className="flex flex-col items-center ">
            <img className="w-full h-16 object-cover mb-4 rounded-md" src={image} alt={name} style={{ width: exercise.width, height: exercise.height }}/>
            </div>
            <h3 className="text-lg font-bold mb-2">{name}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
            {/* Add a link to the individual exercise page if needed */}
          </div>
        </div>
      
    );
  };
  
  export default ExerciseCard;
  