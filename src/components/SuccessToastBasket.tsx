import Link from 'next/link';
import React from 'react';

function SuccessToastBasket() {
  const greeting = '✅ Item added to basket. Click to view basket';

  return (
    <Link href="/cart">
      <div className="h-10 rounded-lg bg-white p-2 shadow-lg">{greeting}</div>
    </Link>
  );
}

export default SuccessToastBasket;
