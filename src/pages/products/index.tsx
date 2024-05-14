import { PageProps, NextSeo, fetchServerSideProps } from '@site/utilities/deps';
import { StoreLayout } from '@site/layouts/StoreLayout';
import { ProductListSection, fetchProductListSection } from '@site/sections/ProductListSection';

export const getStaticProps = fetchServerSideProps(async () => {
  return {
    props: {
      data: {
        productListSection: await fetchProductListSection(),
      },
    },
  };
});

export default function Page(props: PageProps<typeof getStaticProps>) {
  return (
    <StoreLayout>
      <NextSeo title="Shop" description="All Products from Next Shopify Storefront" />
      <div className="mx-auto max-w-7xl p-6 lg:p-8">
        <ProductListSection data={props.data.productListSection} />
      </div>
    </StoreLayout>
  );
}
