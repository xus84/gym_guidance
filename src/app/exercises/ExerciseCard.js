"use client"
const ExerciseCard = ({ exercise}) => {
    const { name, description, image } = exercise;

    
  
    return (
        
        <div className="bg-white"> {/* Updated width class for lg */}
          <div className="border border-gray-300 p-4 rounded-md">
            <img className="w-full h-32 object-cover mb-4 rounded-md" src={image} alt={name} />
            <h3 className="text-lg font-bold mb-2">{name}</h3>
            <p className="text-gray-600">{description}</p>
            {/* Add a link to the individual exercise page if needed */}
          </div>
        </div>
      
    );
  };
  
  export default ExerciseCard;
  