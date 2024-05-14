import StrengthCalc from '@site/components/StrengthCalc';
import { StoreLayout } from '@site/layouts/StoreLayout';
import { NextSeo } from '@site/utilities/deps';

export default function Page() {
  return (
    <StoreLayout>
      <NextSeo title="Strength calc" description="Climbing finger strength calculator" />
      <div className="mx-auto max-w-7xl p-6 lg:p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-500 sm:text-6xl pb-6 lg:pb-9">
            Strength calculator
          </h1>
        </div>
        <StrengthCalc />
      </div>
    </StoreLayout>
  );
}
