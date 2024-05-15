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
        <div className="bg-[url('/images/outdoor_2.jpg')] bg-cover text-white bg-no-repeat w-[100%]">
          <section className="mx-auto max-w-2xl py-10 sm:py-20 lg:py-32">
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-6xl drop-shadow-[0_0.0px_10.0px_rgba(0,0,0,0.8)]">
                Climbing training gear and apparel
              </h1>
              <p className="mt-6 text-lg leading-8 px-2 drop-shadow-[0_0.0px_5.0px_rgba(0,0,0,0.9)]">
                Elevating climbers skills, performance and looks.
              </p>
            </div>
          </section>
        </div>
      </div>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <NextLink
          href="/products"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
