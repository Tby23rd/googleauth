// pages/protected-page.tsx
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function ProtectedPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return; // Do nothing while loading
    if (!session) router.push('/signin'); // Redirect to sign-in page if not authenticated
  }, [session, status, router]);

  if (status === 'loading') return <p>Loading...</p>;

  return (
    <div>
      <h1>Protected Page</h1>
      <p>This page is protected. You can only see this if you are signed in.</p>
    </div>
  );
}
