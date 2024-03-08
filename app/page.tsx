// pages/index.tsx

import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to My Next.js App</h1>
      <p>This is the home page of my application.</p>
      <Link href="/signin">
        <span>Sign In</span>
      </Link>
    </div>
  );
};

export default HomePage;
