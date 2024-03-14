import { signIn, SessionProvider, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import  '@/app/globals.css';

export default function SignIn() {
  return (
    <SessionProvider session={null}>
      <SignInContent />
    </SessionProvider>
  );
}

function SignInContent() {
  const { data: session } = useSession();
  const [showSignInMessage, setShowSignInMessage] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Redirect to dashboardpage page if user is already signed in
    if (session) {
      setShowSignInMessage(true);
      setTimeout(() => {
        router.push('/dashboardpage');
      }, 2000); // Redirect after 2 seconds
    }
  }, [session, router]);

  return (
    <div>
      {/* Render sign-in button only if user is not already signed in */}
      {!session && (
        <button className='bg-blue-500 m-4 p-2 text-white rounded-full' onClick={() => signIn('google')}>Sign in with Google</button>
      )}
      {/* Display sign-in message */}
      {showSignInMessage && <p>Thanks for signing in!</p>}
    </div>
  );
}