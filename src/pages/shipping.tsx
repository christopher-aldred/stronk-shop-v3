import { StoreLayout } from '@site/layouts/StoreLayout';

export default function ShippingPage() {
  return (
    <StoreLayout>
      <div className="mx-auto my-6 max-w-4xl rounded-lg p-6 text-center sm:shadow-sm lg:border lg:border-gray-200">
        <h1 className="mb-6 text-4xl font-semibold text-gray-800">Shipping Information</h1>
        <p className="text-lg text-gray-600">
          We tailor our shipping approach for each order, taking into account the specific item and the region of the
          customer. This ensures that we can provide the most efficient and cost-effective shipping solutions for our
          diverse customer base.
        </p>
        <p className="mt-4 text-lg text-gray-600">
          Due to the varied nature of our products and the wide range of locations we ship to, shipping costs and
          delivery times are calculated on a per-item basis. This allows us to offer you the best possible shipping
          rates and delivery times for your region.
        </p>
        <p className="mt-4 text-lg text-gray-600">
          For detailed information about shipping costs and delivery times for your specific location, please get in
          touch with our customer service team. We&apos;re here to help make your shopping experience as smooth and
          enjoyable as possible.
        </p>
      </div>
    </StoreLayout>
  );
}
