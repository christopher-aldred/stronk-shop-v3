import { StoreLayout } from '@site/layouts/StoreLayout';

export default function ShippingPage() {
  return (
    <StoreLayout>
      <div className="mx-auto my-6 max-w-4xl rounded-lg p-6 text-center sm:shadow-sm lg:border lg:border-gray-200">
        <h1 className="mb-6 text-4xl font-semibold text-gray-800">Contact Information</h1>
        <p className="text-lg text-gray-600">
          We&apos;re here to help you with any questions or concerns you may have. Our customer service team is
          available to assist you with any inquiries about our products, shipping, returns, and more. Please don&apos;t
          hesitate to get in touch with us if you need assistance.
          <br />
          <br />
          Email us at:{' '}
          <b>
            <a href="mailto:contact@stronk-climbing.com">contact@stronk-climbing.com</a>
          </b>
        </p>
      </div>
    </StoreLayout>
  );
}
