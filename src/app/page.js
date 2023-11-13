import Header from "@/components/Header";
import Image from "next/image";
import gymPic from "../../public/img/gym_image.jpg";

export default function Home() {
  return (
    <main>
      <div className="relative z-10">
      <Header/>
      </div>
      <div className="bg-red-200 p-8  text-white relative z-10">
        <p className="text-2xl mb-4 font-bold">Gym Guidance</p>
        <p className="text-lg md:text-base mb-3">
          Gym Guidance is your personalized fitness companion, designed with
          beginners in mind. This innovative application empowers users to
          create tailor-made exercise routines that cater to individual
          preferences and fitness levels.
        </p>

        <p className="text-lg md:text-base mb-3">
          With a focus on low-impact exercises, Gym Guidance prioritizes yourWith a focus on low-impact exercises, Gym Guidance prioritizes your well-being, ensuring a safe and effective 
          well-being, ensuring a safe and effective fitness journey. Say goodbye
          to worries about potential harm to your body and embrace a guided
          approach to achieving your health and wellness goals.
        </p>

        <p className="text-lg md:text-base mb-3">
          Whether you're new to the gym or looking for a gentler approach to
          fitness, Gym Guidance is here to support you every step of the way.
        </p>
      </div>
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <Image
          src={gymPic}
          alt="Gym Image"
          className="object-cover w-full h-auto md:h-full absolute"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 33vw"
        />
      </div>
    </main>
  );
}
