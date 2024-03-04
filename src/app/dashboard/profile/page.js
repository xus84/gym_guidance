"use client"
import Header from '@/components/Header';
import { useSession, signOut} from 'next-auth/react';

function Profile() {

    const { data: session, status } = useSession();

    const emailName = session?.user?.email.split('@')[0];
    
  return (
    <div>
      <Header/>
      <div className='flex flex-col justify-center items-center h-screen bg-red-200'>
      <h1 className='text-2xl font-bold mb-4'>Welcome, {emailName}!</h1>
      <button
      className="w-1/3 bg-gray-300 text-white font-bold py-2 px-4 rounded"
      onClick={() => signOut()}>Logout</button>
      </div>
    
    </div>
  )
}

export default Profile;