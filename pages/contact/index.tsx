import Link from 'next/link';
import {MainLayout} from '../../components/layouts/MainLayout';
import {DarkLayout} from '../../components/layouts/DarkLayout';

const Contact=() => {
  return (
    <>
      <h1>Woo-Contact</h1>
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

Contact.getLayout = function getLayout(page: JSX.Element){
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};

export default Contact;
