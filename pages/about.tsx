import { CSSProperties, FC } from 'react';
import Link from 'next/link';
import {DarkLayout} from '../components/layouts/DarkLayout';
import {MainLayout} from '../components/layouts/MainLayout';



 const About = () => {
  return (
    <>
      <h1>Woo-About</h1>
      <h1 className="title">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <div className="grid">
        <h1>
          {' '}
          Ir a{' '}
          <Link href="/">
            <a>Home</a>
          </Link>
        </h1>
      </div>
    </>
  );
}

export default About;


About.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
