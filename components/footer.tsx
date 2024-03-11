import React from 'react';
import Link from 'next/link';

const Footer=() => {
  const currentYear=new Date().getFullYear();

  return (
    <footer className="space-x-8 p-2 border-t mt-auto">
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
