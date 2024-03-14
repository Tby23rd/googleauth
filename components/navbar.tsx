"use client"
import {useSession,SessionProvider,signOut,signIn} from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';
import {useState} from 'react';
import {useRouter} from 'next/router';

const Navbar=() => {
    return (
        <SessionProvider session={null}>
            <NavbarContent />
        </SessionProvider>
    );
};

function NavbarContent() {
    const {data: session}=useSession();
    const [isNavVisible,setIsNavVisible]=useState(false);

    const handleSignOut=() => {
        signOut(); // Call the signOut function to sign the user out
    };
    const toggleNav=() => {
        setIsNavVisible(!isNavVisible);
    };

    return (
        <nav className="flex md:flex-row flex-col justify-between items-center p-2 mb-2 border-b">
            {/* Logo */}
            <div className="md:flex items-center">
                <Image width={30} height={30}
                    src="/images/logos/logo.png" alt='Logo' />
            </div>

            {/* Hamburger Menu */}
            <div className="md:hidden">
                <button onClick={toggleNav} className="focus:outline-none">
                    {/* Hamburger icon */}
                    <svg className="h-6 w-6 fill-current" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm1 6a1 1 0 100 2h12a1 1 0 100-2H4z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>

            <div className={`flex flex-col md:flex-row font-semibold items-center space-x-4 ${isNavVisible? 'block':'hidden'} md:flex`}>
                {/* Home Link */}
                <Link href="/dashboardpage">
                    My Dashboard
                </Link>

                {/* Project Page Link */}
                <Link href="/projectpage">
                    Projects
                </Link>

                {/* Companies Page Link */}
                <Link href="/companypage">
                    Company
                </Link>

                {/* Talents Page Link */}
                <Link href="/talentpage">
                    Talent
                </Link>

                {/* Accounting Page Link */}
                <Link href="/accountingpage">
                    Accounting
                </Link>
            </div>

            {/* Session Info */}
            <div className="flex items-center space-x-4">
                {session? (
                    <div className="md:flex space-x-2 items-center">
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
        </nav>
    );
}

export default Navbar;