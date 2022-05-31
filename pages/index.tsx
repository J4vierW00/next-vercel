import Link from 'next/link';
import {MainLayout} from '../components/layouts/MainLayout';

 function Home()  {
  return (
    <MainLayout>
      <h1 className="title">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <div className="grid">
        <h1>
          {' '}
          Ir a{' '}
          <Link href="/about">
            <a>Carpeta</a>
          </Link>
        </h1>
      </div>
    </MainLayout>
  );
 }

export default Home;
