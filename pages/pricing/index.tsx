import Link from 'next/link';
import {MainLayout} from '../../components/layouts/MainLayout';
import {DarkLayout} from '../../components/layouts/DarkLayout';

 const Pricing =() => {
  return (
    <>
      <h1>Woo-Pricing</h1>
      <h2 className="title">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h2>

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

Pricing.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};

export default Pricing;
