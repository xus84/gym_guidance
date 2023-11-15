import React from 'react'

import ExerciseCard from './ExerciseCard';
import Header from '@/components/Header';

function Exercises() {

  const exercises = [
    {
      id: 1,
      name: 'Step Touch',
      description: 'Step side to side, lightly tapping your foot to the side. A low-impact exercise to warm up and improve coordination.',
      image: 'step-touch.jpg',
    },
    {
      id: 2,
      name: 'High Knees',
      description: 'Jog in place while lifting your knees as high as possible. Great for cardiovascular fitness and leg strength.',
      image: 'high-knees.jpg',
    },
    {
      id: 3,
      name: 'Butt Kicker',
      description: 'Jog in place, kicking your heels up towards your glutes. Works on cardiovascular endurance and targets the hamstrings.',
      image: 'butt-kicker.jpg',
    },
    {
      id: 4,
      name: 'Running in Place',
      description: 'Simulate running while staying in one spot. Excellent for warming up or maintaining an elevated heart rate.',
      image: 'running-in-place.jpg',
    },
    {
      id: 5,
      name: 'Front Kicks',
      description: 'Alternate kicking your legs forward. This exercise engages the core, improves flexibility, and works the hip flexors.',
      image: 'front-kicks.jpg',
    },
    {
      id: 6,
      name: 'Windmill',
      description: 'Stand with feet shoulder-width apart, arms outstretched. Rotate your torso, reaching opposite hand towards opposite foot. Enhances flexibility and works the core.',
      image: 'windmill.jpg',
    },
    {
      id: 7,
      name: 'Bend and Reach',
      description: 'Stand with feet shoulder-width apart. Bend at the waist, reaching down towards your toes. A simple stretch that targets the lower back and hamstrings.',
      image: 'bend-and-reach.jpg',
    },
    {
      id: 8,
      name: 'Calf Raises',
      description: 'Lift your heels off the ground while standing. Strengthens the calf muscles and helps improve ankle stability.',
      image: 'calf-raises.jpg',
    },
    {
      id: 9,
      name: 'Arm Circles',
      description: 'Extend your arms to the sides and make circular motions with your hands. A warm-up exercise that improves shoulder flexibility and circulation.',
      image: 'arm-circles.jpg',
    },
    {
      id: 10,
      name: 'Side Hops',
      description: 'Hop from side to side, landing softly on the balls of your feet. Enhances agility, balance, and leg strength.',
      image: 'side-hops.jpg',
    },
  ];


  return (
    <div className="bg-red-200">
      <Header />
      <div className="grid grid-cols-3 gap-4 p-4">
        {exercises.map((exercise, index) => (
          <div key={index}>
          <ExerciseCard  exercise={exercise}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Exercises