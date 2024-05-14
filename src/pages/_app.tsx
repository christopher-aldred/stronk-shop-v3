import '@site/assets/style.css';
import '@site/assets/filmgrain.css';
import ProgressBar from 'nextjs-progressbar';
import { NextAppProps, DefaultSeo } from '@site/utilities/deps';
import { ShopifyProvider, CartProvider } from '@shopify/hydrogen-react';

import { storeDomain, publicStorefrontToken, storefrontApiVersion } from '@site/utilities/storefront';

export default function App({ Component, pageProps }: NextAppProps) {
  return (
    <ShopifyProvider
      languageIsoCode="EN"
      countryIsoCode="US"
      storeDomain={storeDomain}
      storefrontToken={publicStorefrontToken}
      storefrontApiVersion={storefrontApiVersion}
    >
      <DefaultSeo
        defaultTitle="STRØNK climbing"
        titleTemplate="%s • STRØNK climbing"
        description="⛰️ An online site specialising in climbing training equipment and apparel"
      />
      <CartProvider>
        <ProgressBar options={{ showSpinner: false }} color="green" />
        <Component {...pageProps} />
      </CartProvider>
    </ShopifyProvider>
  );
}
