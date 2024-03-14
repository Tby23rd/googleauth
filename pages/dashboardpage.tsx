"use client"
import {useEffect} from 'react';
import {useSession,SessionProvider} from 'next-auth/react';
import '@/app/globals.css';

export default function DashboardPage() {
   return (
      <SessionProvider>
         <DashboardPageContent />
      </SessionProvider>
   );
}

function DashboardPageContent() {
   const {data: session,status}=useSession();

   useEffect(() => {
      if(status==='loading') return; // Don't redirect while session is loading
      
   },[session,status]);

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
