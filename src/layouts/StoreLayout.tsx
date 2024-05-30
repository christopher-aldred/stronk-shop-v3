import { ReactNode } from '@site/utilities/deps';
import { HeaderSection } from '@site/sections/HeaderSection';
import NavBar from '@site/components/NavBar';
import { FooterSection } from '@site/sections/FooterSection';

interface Props {
  children: ReactNode;
}

export function StoreLayout(props: Props) {
  return (
    <>
      <HeaderSection />
      <hr />
      <NavBar className="mx-auto max-w-7xl px-8 py-1 lg:py-2 " />
      <hr />
      <main>{props.children}</main>
      <FooterSection />
    </>
  );
}
