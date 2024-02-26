"use client"
import Header from '@/components/Header';
import { useSession, signOut} from 'next-auth/react';

function Profile() {

    const { data: session, status } = useSession();
    const userEmail = session?.user?.email;
    const userName = userEmail ? userEmail.split('@')[0] : '';
    console.log(session, status)
    
  return (
    <div>
      <Header/>
      <div className='flex flex-col justify-center items-center h-screen bg-red-200'>
      <p className="text-xl mb-2">Welcome, {userName}</p>
      <button
      className="w-1/3 bg-gray-300 text-white font-bold py-2 px-4 rounded"
      onClick={() => signOut()}>Logout</button>
      </div>
    
    </div>
  )
}

export default Profile;