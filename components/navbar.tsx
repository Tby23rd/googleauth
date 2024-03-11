"use client"
import { useSession, SessionProvider, signOut, signIn } from 'next-auth/react';
import Image from 'next/image';
import { useState, ChangeEvent } from 'react';

const Navbar = () => {
    return (
        <SessionProvider session={null}>
            <NavbarContent />
        </SessionProvider>
    );
};

function NavbarContent() {
    const { data: session } = useSession();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedTheme, setSelectedTheme] = useState<string>('Light'); // State for selected theme

    const handleSignOut = () => {
        signOut(); // Call the signOut function to sign the user out
    };

    const handleThemeChange = (event: ChangeEvent<HTMLSelectElement>) => { // Handle theme change
        setSelectedTheme(event.target.value);
    };

    return (
        <nav className="flex justify-between border p-1 w-full items-center mb-2">
            {/* Logo */}
            <div className="md:flex space-x-4 items-center">
                <Image width={30} height={30} src="/images/logos/logo.png" alt="Digitote Logo" />
                {/**search input */}
                <input type="text" placeholder="Search.." className="pl-4 border rounded-full" />
              </div>

            {/* Navigation Links */}
            <div className="flex items-center  font-semibold space-x-4">
                {/* Home Link */}
                <span className="cursor-pointer">My Dashboard</span>
                <span className="cursor-pointer">Projects</span>
                <span className="cursor-pointer">Companies</span>
                <span className="cursor-pointer">Talent</span>
                <span className="cursor-pointer">Accounting</span>

                {/* Session Info */}
                <div className="relative">
                    {session ? (
                        <div className="md:flex space-x-2 items-center">
                            <Image width={20} height={20} className='rounded-full'
                            // @ts-ignore 
                            src={session.user?.image} alt={session.user?.name} />
                            <span onClick={() => setIsDropdownOpen(!isDropdownOpen)}>{session.user?.name}
                             {/* Dropdown Content Replaced with Theme Select */}
                    {isDropdownOpen && ( // Use isDropdownOpen to conditionally render the dropdown content
                        <div className="absolute top-full right-0 mt-2 w-48 bg-white border rounded shadow-md">
                            <select value={selectedTheme} onChange={handleThemeChange} className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                                <option value="Light">Light</option>
                                <option value="Dark">Dark</option>
                            </select>
                            {session && (
                                <button
                                    className='m-2 bg-blue-500 rounded-full text-white font-bold py-2 px-6'
                                    onClick={handleSignOut}
                                >
                                    Sign Out
                                </button>
                            )}
                        </div>
                    )}
                            
                            </span>
                        </div>
                    ) : (
                        <button className='bg-blue-500 rounded-full text-white font-bold py-2 px-6' onClick={() => signIn()}>Sign In</button>
                    )}

                   
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
