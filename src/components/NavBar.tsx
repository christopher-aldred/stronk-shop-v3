import React from 'react';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import Link from 'next/link';

const trainingItems: MenuProps['items'] = [
  {
    label: <a href="/training/max-hangs">Max hangs</a>,
    key: '0',
  },
  {
    label: <a href="/training/strength-calc">Strength Calculator</a>,
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: 'Endurance protocol',
    key: '2',
    disabled: true,
  },
];

const socialItems: MenuProps['items'] = [
  {
    label: <a href="/training/max-hangs">Instagram</a>,
    key: '0',
    disabled: true,
  },
  {
    label: <a href="/training/strength-calc">Youtube</a>,
    key: '1',
    disabled: true,
  },
];

const shopItems: MenuProps['items'] = [
  {
    label: <a href="/training/max-hangs">Finger training</a>,
    key: '0',
    disabled: true,
  },
  {
    label: <a href="/training/strength-calc">Clothing</a>,
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
          <a style={{ cursor: 'pointer' }} onClick={(e) => e.preventDefault()}>
            <Space>Training</Space>
          </a>
        </Dropdown>
        <Dropdown menu={{ items: socialItems }} placement="bottom">
          <a style={{ cursor: 'pointer' }} onClick={(e) => e.preventDefault()}>
            <Space>Socials</Space>
          </a>
        </Dropdown>
        <a href="#">Login</a>
      </nav>
    </>
  );
}
