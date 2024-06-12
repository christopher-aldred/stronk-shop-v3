import { StoreLayout } from '@site/layouts/StoreLayout';
import { HeroSection } from '@site/sections/HeroSection';

export default function Page() {
  return (
    <StoreLayout>
      <HeroSection />

      <div className="relative top-0 mx-auto my-0 max-w-4xl py-0 sm:max-w-2xl sm:py-3 lg:-top-10">
        <div className="absolute inset-0 z-10 hidden -rotate-3 skew-y-0 rounded-3xl bg-gradient-to-r from-teal-500 to-cyan-600 shadow-lg md:inline md:-rotate-6"></div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="m-2 flex flex-col justify-center">
            <div className="relative z-20 rounded-3xl bg-white px-6 pt-6 md:bg-slate-100 md:p-8 md:shadow-lg">
              <h1 className="mb-2 text-2xl font-bold text-gray-800">About us 👋</h1>
              <p className="text-gray-500">
                We are a UK based business who are dedicated to providing quality training gear and clothing designed
                specifically for climbers. We aim to help climbers reach their full potential by offering products that
                enhance their training experience and performance. Whether you&apos;re just starting out or are a
                seasoned climber, our gear is crafted to meet your needs and help you achieve your climbing goals.
              </p>
            </div>
          </div>
          <div className="m-2 flex flex-col justify-center">
            <div className="absolute inset-0 z-30 hidden"></div>
            <div className="relative z-40 rounded-3xl bg-white p-6 md:bg-slate-100 md:p-8 md:shadow-lg">
              <h1 className="mb-2 text-2xl font-bold text-gray-800">Our goal 🏋🏽‍♂️</h1>
              <p className="text-gray-500">
                Climbing? It&apos;s not just a sport to us. it&apos;s a whole vibe that calls for real grit and skill.
                We&apos;re here to help you tackle those tough gravity days head-on, with all the top-notch gear and
                advice you need to bring your A-game. Whether you&apos;re working on nailing a tricky V3 at your local
                gym or conquering an 8a in Spain, we&apos;ve got your back with everything from finger training tips to
                stretching guides and beyond!
              </p>
            </div>
          </div>
        </div>
      </div>
    </StoreLayout>
  );
}
