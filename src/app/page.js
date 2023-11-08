import Header from '@/components/Header'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Header/>
      <div className="bg-red-200 p-8  text-white">
      <p className="text-2xl mb-4 font-bold">Gym Guidance</p>
      <p className="text-lg mb-3">
        Gym Guidance is your personalized fitness companion, designed with beginners in mind. This innovative application empowers users to create tailor-made exercise routines that cater to individual preferences and fitness levels.
      </p>
     
      <p className="text-lg mb-3">
         With a focus on low-impact exercises,  Gym Guidance prioritizes your well-being, ensuring a safe and effective fitness journey. Say goodbye to worries about potential harm to your body and embrace a guided approach to achieving your health and wellness goals.
      </p>
     
      <p className="text-lg mb-3">
        Whether you're new to the gym or looking for a gentler approach to fitness, Gym Guidance is here to support you every step of the way.
      </p>
    
    </div>
    </main>
    )
}
