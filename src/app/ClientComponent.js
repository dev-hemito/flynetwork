// ClientComponent.js (Client-side component)
"use client"; // This enables client-side rendering

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ClientComponent({ children }) {
  // Initialize AOS in client component
  useEffect(() => {
    if (window.innerWidth > 500) {
      AOS.init({
        duration: 900,
        once: true,
      });
    }
    else
    {
      AOS.init({
        duration: 300,
        once: true,
      });
    }

  }, []);

  return <>{children}</>;
}