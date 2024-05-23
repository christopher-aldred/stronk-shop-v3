import { NextLink } from '@site/utilities/deps';
import React, { useEffect } from 'react';
import styles from '/assets/filmgrain.module.css';

export function HeroSection() {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = '/grained.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className="bg-container w-[100%]">
        <div className="w-[100%] bg-[url('/images/outdoor_2.jpg')] bg-cover bg-no-repeat text-white">
          <section className="mx-auto max-w-2xl py-10 sm:py-20 lg:py-32">
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tight drop-shadow-[0_0.0px_10.0px_rgba(0,0,0,0.8)] sm:text-6xl">
                Climbing training gear and apparel
              </h1>
              <p className="mt-6 px-2 text-sm leading-8 drop-shadow-[0_0.0px_5.0px_rgba(0,0,0,0.9)] sm:text-lg">
                Elevating climbers skills, performance and style.
              </p>
            </div>
          </section>
        </div>
      </div>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <NextLink
          href="/products"
          className="rounded-md bg-[#0080fe] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#1466b7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Browse Products
        </NextLink>
        <a href="/training/max-hangs" className="text-sm font-semibold leading-6 text-gray-900" target="_blank">
          Go to training <span aria-hidden="true">→</span>
        </a>
      </div>
    </>
  );
}
