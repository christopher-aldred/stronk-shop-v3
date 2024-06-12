import { StoreLayout } from '@site/layouts/StoreLayout';
import { HeroSection } from '@site/sections/HeroSection';

export default function Page() {
  return (
    <StoreLayout>
      <HeroSection />
      <div className="flex flex-col justify-center">
        <div className="relative top-0 py-0 sm:-top-10 sm:mx-auto sm:max-w-2xl sm:py-3">
          <div className="absolute inset-0 z-10 hidden -rotate-6 skew-y-0 rounded-3xl bg-gradient-to-r from-teal-500 to-cyan-600 shadow-lg sm:inline"></div>
          <div className="relative z-20 rounded-3xl bg-white p-20 px-4 py-10 sm:bg-slate-50 sm:shadow-lg">
            <h1 className="mb-2 text-2xl font-bold text-gray-900">About Us</h1>
            <p className="text-gray-500">
              Our business is dedicated to providing quality training gear and clothing designed specifically for
              climbers. We aim to help climbers reach their full potential by offering products that enhance their
              training experience and performance. Whether you&apos;re just starting out or are a seasoned climber, our
              gear is crafted to meet your needs and help you achieve your climbing goals.
            </p>
          </div>
        </div>
      </div>
    </StoreLayout>
  );
}
