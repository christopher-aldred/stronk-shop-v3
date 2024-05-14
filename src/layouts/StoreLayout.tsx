import { ReactNode } from '@site/utilities/deps';
import { HeaderSection } from '@site/sections/HeaderSection';
import NavBar from '@site/components/NavBar';

interface Props {
  children: ReactNode;
}

export function StoreLayout(props: Props) {
  return (
    <>
      <HeaderSection />
      <NavBar className="mx-auto max-w-7xl px-8 py-3 " />
      <hr />
      <main>{props.children}</main>
    </>
  );
}
