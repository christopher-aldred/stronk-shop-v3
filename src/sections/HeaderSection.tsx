import { useState, NextLink, useRouter, clsx } from '@site/utilities/deps';
import { useCart } from '@shopify/hydrogen-react';
import { ShoppingBagIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

export function HeaderSection() {
  const router = useRouter();
  const { totalQuantity } = useCart();

  return (
    <header className="border-b bg-white/70 py-2 backdrop-blur-2xl sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between pt-1 px-8" aria-label="Global">
        <div className="flex flex-1">
          <NextLink href="/products" className="-m-1.5 p-1.5">
            <span className="sr-only">Storefront</span>
            <ShoppingBagIcon className="h-6 w-6"></ShoppingBagIcon>
          </NextLink>
        </div>
        <Link href="/">
          <Image src="/stronk.png" alt="logo" width="200" height="150" />
        </Link>

        <div className="flex flex-1 justify-end pt-1">
          <NextLink href="/cart">
            <span className="sr-only">Cart</span>
            <span className="relative inline-block">
              <ShoppingCartIcon className="h-6 w-6"></ShoppingCartIcon>
              {!!totalQuantity && (
                <span className="absolute right-0 top-0 inline-flex -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-red-600 px-2 py-1 text-xs font-bold leading-none text-red-100">
                  {totalQuantity}
                </span>
              )}
            </span>
          </NextLink>
        </div>
      </nav>
    </header>
  );
}
