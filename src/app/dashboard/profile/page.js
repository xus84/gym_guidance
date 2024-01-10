"use client"
import Header from '@/components/Header';
import { useSession, signOut} from 'next-auth/react';

function Profile() {

    const { data: session, status } = useSession();

    console.log(session, status)
    
  return (
    <div>
      <Header/>
      <h1>Profile</h1>
      <div className='flex flex-col justify-center items-center h-screen bg-red-200'>
      <pre>
        {JSON.stringify({
          session,
          status,
        },
        null,
        2
        )}
      </pre>
      <button
      className="w-1/3 bg-gray-300 text-white font-bold py-2 px-4 rounded"
      onClick={() => signOut()}>Logout</button>
      </div>
    
    </div>
  )
}

export default Profile;