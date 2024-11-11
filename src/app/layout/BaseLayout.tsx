import { Outlet } from 'react-router-dom';
import styles from './BaseLayout.module.scss';
import { Header } from 'widgets/Header/Header';
import { Footer } from 'widgets/Footer/Footer';

const BaseLayout = () => {
  return (
    <>
      <Header />
      <div className={styles.layout}>
        <div className={styles.outlet}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default BaseLayout;
