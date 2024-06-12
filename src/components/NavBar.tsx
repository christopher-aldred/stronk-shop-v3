import React from 'react';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import Link from 'next/link';

const trainingItems: MenuProps['items'] = [
  {
    label: <Link href="/training/strength-calc">Strength Calculator</Link>,
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: <Link href="/training/max-hangs">Max hangs</Link>,
    key: '0',
    disabled: true,
  },
  {
    label: 'Endurance protocol',
    key: '2',
    disabled: true,
  },
];

const socialItems: MenuProps['items'] = [
  {
    label: <Link href="/training/max-hangs">Instagram</Link>,
    key: '0',
    disabled: true,
  },
  {
    label: <Link href="/training/strength-calc">Youtube</Link>,
    key: '1',
    disabled: true,
  },
];

const shopItems: MenuProps['items'] = [
  {
    label: <Link href="/products">All products</Link>,
    key: '0',
    disabled: false,
  },
  {
    type: 'divider',
  },
  {
    label: <Link href="/training/max-hangs">Finger training</Link>,
    key: '1',
    disabled: true,
  },
  {
    label: <Link href="/training/strength-calc">Clothing</Link>,
    key: '',
    disabled: true,
  },
];

type Props = {
  className?: string;
};

export default function NavBar(props: Props) {
  return (
    <>
      <nav
        {...props}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Link href="/">
          <Space className="text-base leading-6 text-gray-500 hover:text-gray-900">Home</Space>
        </Link>
        <Dropdown menu={{ items: shopItems }} placement="bottom">
          <Link onClick={(e) => e.preventDefault()} href="/products">
            <Space className="text-base leading-6 text-gray-500 hover:text-gray-900">Shop</Space>
          </Link>
        </Dropdown>
        <Dropdown menu={{ items: trainingItems }} placement="bottom">
          <Link href="#" onClick={(e) => e.preventDefault()}>
            <Space className="text-base leading-6 text-gray-500 hover:text-gray-900">Training</Space>
          </Link>
        </Dropdown>
        <Dropdown menu={{ items: socialItems }} placement="bottom">
          <Link href="#" onClick={(e) => e.preventDefault()}>
            <Space className="text-base leading-6 text-gray-500 hover:text-gray-900">Articles</Space>
          </Link>
        </Dropdown>
      </nav>
    </>
  );
}
