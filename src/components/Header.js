"use client"
import Link from "next/link";
import { useSession } from "next-auth/react";

function Header() {

  const { data: session } = useSession();

  // Check if the user is authenticated
  const isAuthenticated = session?.user;

  return (
    <header className="bg-gray-300 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/img/gymguidance_logo.jpeg" alt="Gym Guidance Logo" className="w-10 h-10 mr-2" />
        </div>
        <nav>
          <ul className="flex space-x-4">
            <Link href={"/"} className="hover:underline">Home</Link>
            <Link href={"/routines"} className="hover:underline">Routines</Link>
            <Link href={"/exercises"} className="hover:underline">Exercises</Link>

            {/* Conditionally render links based on authentication status */}
            {isAuthenticated ? (
              <>
                <Link href={"/dashboard/profile"} className="hover:underline">Profile</Link>
              </>
            ) : (
              <>
                <Link href={"/signup"} className="hover:underline">Sign Up</Link>
                <Link href={"/login"} className="hover:underline">Login</Link>
              </>
            )}

          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
