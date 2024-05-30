import { NextLink } from '@site/utilities/deps';

export function HeroSection() {
  return (
    <>
      <div className="bg-container bg-[url('/images/hero.jpeg')] bg-cover bg-no-repeat text-white">
        <div className="bg-black bg-opacity-50 shadow-[inset_0_0px_24px_rgba(0,0,0,0.2)]">
          <section className="mx-auto max-w-2xl py-10 py-10 sm:py-24">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight md:text-5xl">Climbing, Training, Gear & Apparel</h1>
              <p className="mt-6 px-2 text-sm leading-8 sm:text-lg hidden sm:block">
                Elevating climbers skills, performance and style
              </p>
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <NextLink
                href="/products"
                className="z-50 rounded-md bg-[#0080fe] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#1466b7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Browse Products
              </NextLink>
              <a href="/training/max-hangs" className="z-50 text-sm font-semibold leading-6 text-white" target="_blank">
                Go to training <span aria-hidden="true">→</span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
