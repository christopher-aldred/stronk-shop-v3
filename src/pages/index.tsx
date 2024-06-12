import { StoreLayout } from '@site/layouts/StoreLayout';
import { HeroSection } from '@site/sections/HeroSection';

export default function Page() {
  return (
    <StoreLayout>
      <HeroSection />
      <div className="flex flex-col justify-center">
        <div className="relative -top-10 py-3 sm:mx-auto sm:max-w-xl">
          <div className="absolute inset-0 z-10 -rotate-6 -skew-y-6 skew-y-0 rounded-3xl bg-gradient-to-r from-teal-500 to-cyan-600 shadow-lg"></div>
          <div className="relative z-20 rounded-3xl bg-slate-50 p-20 px-4 py-10 shadow-lg">
            <h1 className="mb-2 text-2xl font-bold text-gray-900">About Us</h1>
            <p className="text-gray-500">
              Our business is dedicated to providing quality training gear and clothing designed specifically for
              climbers. We aim to help climbers reach their full potential by offering products that enhance their
              training experience and performance. Whether you're just starting out or are a seasoned climber, our gear
              is crafted to meet your needs and help you achieve your climbing goals.
            </p>
          </div>
        </div>
      </div>
    </StoreLayout>
  );
}
