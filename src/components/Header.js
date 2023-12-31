import Link from "next/link";

const Header = () => {
    return (
      <header className="bg-gray-300 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src="/img/gymguidance_logo.jpeg" alt="Gym Guidance Logo" className="w-10 h-10 mr-2" />
          </div>
          <nav>
            <ul className="flex space-x-4">
              <Link href={"/"} className="hover:underline">Home</Link>
              <Link href={"/exercises"} className="hover:underline">Exercises</Link>
              <li className="hover:underline">Contact</li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
  
  export default Header;
  