import { NextLink } from '@site/utilities/deps';

export function HeroSection() {
  return (
    <>
      <div className="bg-container bg-[url('/images/bg.jpeg')] bg-cover bg-no-repeat text-white">
        <div className="bg-black/50 shadow-[inset_0_0px_24px_rgba(0,0,0,0.2)]">
          <section className="mx-auto max-w-2xl py-10 md:py-24">
            <div className="text-center">
              <h1 className="z-50 px-1 text-4xl tracking-tight md:text-5xl">Climbing, Training, Gear & Apparel</h1>
              <p className="z-[999] mt-6 hidden px-2 text-sm leading-8 sm:text-lg md:block">
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
              <NextLink href="/training/strength-calc" className="z-50 text-sm font-semibold leading-6 text-white">
                Go to training <span aria-hidden="true">→</span>
              </NextLink>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
