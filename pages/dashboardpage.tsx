"use client"
import { useEffect } from 'react';
import { useSession, SessionProvider } from 'next-auth/react';
import '@/app/globals.css';
import Amplify from 'aws-amplify';

// Configure Amplify
Amplify.configure({
 Auth: {
    region: process.env.NEXT_PUBLIC_AWS_REGION,
    userPoolId: process.env.NEXT_PUBLIC_USER_POOL_ID,
    userPoolWebClientId: process.env.NEXT_PUBLIC_USER_POOL_WEB_CLIENT_ID,
    oauth: {
      domain: process.env.NEXT_PUBLIC_COGNITO_DOMAIN,
      scope: [ 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
      redirectSignIn: 'http://localhost:3000/',
      redirectSignOut: 'http://localhost:3000/',
      responseType: 'code' // or 'token'
    }
 }
});

export default function DashboardPage() {
 return (
    <SessionProvider>
      <DashboardPageContent />
    </SessionProvider>
 );
}

function DashboardPageContent() {
 const { data: session, status } = useSession();

   useEffect(() => {
      if (status === 'loading') return; // Don't redirect while session is loading
   },[session,status]);

   return (
      <div>
         {status === 'loading' && <p>Loading...</p>}
         {status === 'authenticated' && (
            <div>
               <h1>Welcome, {session?.user?.name}!</h1>
            </div>
         )}
      </div>
   );
}
