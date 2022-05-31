import { FC } from 'react';
import Head from 'next/head';
import { Navbar } from '../Navbar';

type Props = {
  children: React.ReactNode
};

export const MainLayout:FC<Props> = ({ children }) => {
  return (
    <div className="container">
      <Head>
        <title>Home- Woo</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="main">{children}</main>
    </div>
  );
};


