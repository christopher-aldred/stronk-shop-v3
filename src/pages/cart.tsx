import { NextSeo } from '@site/utilities/deps';
import { StoreLayout } from '@site/layouts/StoreLayout';
import { CartSection } from '@site/sections/CartSection';

export default function Page() {
  return (
    <StoreLayout>
      <NextSeo title="Cart" />
      <div className="mx-auto max-w-7xl p-6 lg:p-8">
        <CartSection />
      </div>
    </StoreLayout>
  );
}
