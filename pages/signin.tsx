// pages/signin.tsx
import { signIn, SessionProvider, useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function SignIn() {
  return (
    <SessionProvider session={null}>
      <SignInContent />
    </SessionProvider>
  );
}

function SignInContent() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    // Redirect to home page if user is already signed in
    if (session) router.push('/');
  }, [session, router]);

  return (
    <div>
      <h1>Sign in</h1>
      {/* Render sign-in button only if user is not already signed in */}
      {!session && (
        <button onClick={() => signIn('google')}>Sign in with Google</button>
      )}
    </div>
  );
}
