import { useEffect } from 'react';
import { useSession, SessionProvider } from 'next-auth/react';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Welcome() {
 return (
    <SessionProvider session={null}>
      <WelcomeContent />
    </SessionProvider>
 );
}

function WelcomeContent() {
 const { data: session } = useSession();
 const router = useRouter();

 useEffect(() => {
  console.log(session); // Add this line to debug
  if (!session) {
     router.push('/dummy');
  }
 }, [session, router]);

 return (
    <div>
      <h1>Welcome, {session?.user?.name}!</h1>
      {session?.user?.image && (
        <Image
        width={50} height={50}
         src={session.user.image} alt='name' />
      )}
      {/* Your welcome page content */}
    </div>
 );
}
