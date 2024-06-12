import { StoreLayout } from '@site/layouts/StoreLayout';
import Image from 'next/image';

export default function ShippingPage() {
  return (
    <StoreLayout>
      <div className="mx-auto my-0 max-w-4xl rounded-lg p-6 text-center sm:shadow-sm lg:my-6 lg:border lg:border-gray-200">
        <h1 className="text-4xl font-semibold text-gray-800">Contact Information</h1>
        <center>
          <Image src="/contact.png" width={100} height={100} alt="Shipping logo" />
        </center>
        <p className="text-lg text-gray-600">
          We&apos;re here to help you with any questions or concerns you may have. Our customer service team is
          available to assist you with any inquiries about our products, shipping, returns, and more. Please don&apos;t
          hesitate to get in touch with us if you need assistance.
          <br />
          <br />
          Email us at
          <br />
          <b>
            <a href="mailto:contact@stronk-climbing.com">contact@stronk-climbing.com</a>
          </b>
        </p>
      </div>
    </StoreLayout>
  );
}
