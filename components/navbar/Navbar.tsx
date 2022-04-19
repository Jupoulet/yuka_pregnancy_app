import React from 'react';
import Link from 'next/link';

export const NavBar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/barcode/scanner">Scanner</Link>
        </li>
      </ul>
    </nav>
  );
};
