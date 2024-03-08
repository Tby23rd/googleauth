"use client"
import {useSession,SessionProvider,signOut} from 'next-auth/react';
import Link from 'next/link';
import {signIn} from 'next-auth/react';
import Image from 'next/image';

const Navbar=() => {
    return (
        <SessionProvider session={null}>
            <NavbarContent />
        </SessionProvider>
    );
};

function NavbarContent() {
    const {data: session}=useSession();

    const handleSignOut=() => {
        signOut(); // Call the signOut function to sign the user out
    };

    return (
        <nav className="flex justify-between items-center m-4 p-4 shadow rounded-xl">
            {/* Logo */}
            <div className="flex items-center">
                <span className="text-xl font-bold">My App</span>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-4">
                {/* Home Link */}
                <Link href="/">
                    <span className="text-blue-500 hover:underline">Home</span>
                </Link>

                {/* Welcome Page Link */}
                <Link href="/welcome">
                    <span className="text-blue-500 hover:underline">Welcome</span>
                </Link>

                {/* Session Info */}
                {/* Session Info */}
                <div> {/* Adjust space-x-2 as needed */}
                    {session? (
                        <div className="flex space-x-2 items-center">
                            <Image width={20} height={20} className='rounded-full'
                                //@ts-ignore 
                                src={session.user?.image} alt="name" />
                            <span>{session.user?.name}</span>
                            <button className='bg-blue-500 rounded-full text-white font-bold py-2 px-6' onClick={handleSignOut}>Sign out</button>
                        </div>
                    ):(
                        <button className='bg-blue-500 rounded-full text-white font-bold py-2 px-6' onClick={() => signIn()}>Sign In</button>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
