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
    label: <Link href="/training/max-hangs">Finger training</Link>,
    key: '0',
    disabled: true,
  },
  {
    label: <Link href="/training/strength-calc">Clothing</Link>,
    key: '1',
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
        <Dropdown menu={{ items: shopItems }} placement="bottom">
          <Link style={{ cursor: 'pointer' }} href="/products">
            <Space>Shop</Space>
          </Link>
        </Dropdown>
        <Dropdown menu={{ items: trainingItems }} placement="bottom">
          <Link href="#" style={{ cursor: 'pointer' }} onClick={(e) => e.preventDefault()}>
            <Space>Training</Space>
          </Link>
        </Dropdown>
        <Dropdown menu={{ items: socialItems }} placement="bottom">
          <Link href="#" style={{ cursor: 'pointer' }} onClick={(e) => e.preventDefault()}>
            <Space>Socials</Space>
          </Link>
        </Dropdown>
        <a href="#">Login</a>
      </nav>
    </>
  );
}
