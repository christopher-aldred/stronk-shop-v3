import StrengthCalc from '@site/components/StrengthCalc';
import { StoreLayout } from '@site/layouts/StoreLayout';
import { NextSeo } from '@site/utilities/deps';

export default function Page() {
  return (
    <StoreLayout>
      <NextSeo title="Strength calc" description="Climbing finger strength assessment" />
      <div className="mx-auto max-w-7xl p-6 lg:p-8">
        <div className="text-center">
          <h1 className="pb-6 text-3xl font-bold tracking-tight text-gray-500 sm:text-6xl lg:pb-9">
            Finger strength assessment
          </h1>
        </div>
        <StrengthCalc />
      </div>
    </StoreLayout>
  );
}
