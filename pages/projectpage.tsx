"use client"
import {useEffect} from 'react';
import {useSession,SessionProvider} from 'next-auth/react';
import {useRouter} from 'next/router';
import '@/app/globals.css';

export default function ProjectPage() {
   return (
      <SessionProvider>
         <ProjectPageContent />
      </SessionProvider>
   );
}

function ProjectPageContent() {
   const {data: session,status}=useSession();
   const router=useRouter();

   useEffect(() => {
      if(status==='loading') return; // Don't redirect while session is loading
      if(!session) {
         router.push('/dummy');
      }
   },[session,status,router]);

   return (
      <div>
         {status==='loading'&&<p>Loading...</p>}
         {status==='authenticated'&&(
            <div>
               <h1>Welcome, {session?.user?.name}!</h1>
            </div>
         )}
      </div>
   );
}
