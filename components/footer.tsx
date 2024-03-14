import React from 'react';
import Link from 'next/link';

const Footer=() => {
  const currentYear=new Date().getFullYear();

  return (
    <footer className="flex md:flex-row flex-col p-2 items-center justify-center w-full text-gray-500 text-sm font-medium mt-8 sm:flex-row space-x-8 border-t">
      <span className="text-sm text-gray-500">&copy; {currentYear} Digitote.co</span>
        <Link href="/PrivacyPolicy">
          <span className="">Privacy Policy</span>
        </Link>
        <Link href="/TermsOfService">
          <span className="">Terms Of Service</span>
        </Link>
    </footer>
  );
};

export default Footer;
