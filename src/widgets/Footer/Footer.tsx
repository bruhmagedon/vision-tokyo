import { classNames } from 'shared/utils/classNames/classNames';
import styles from './Footer.module.scss';
import { pagesConfig } from 'shared/config/pagesConfig';
import { Link } from 'react-router-dom';

interface FooterProps {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={classNames(styles.footer, {}, [className])}>
      <nav className={styles.nav_container}>
        {pagesConfig.map((page) => (
          <Link key={page.name} to={page.path}>
            {page.name}
          </Link>
        ))}
      </nav>
      <div>© 2024 Vision Tokyo</div>
      <div>bigas production</div>
    </footer>
  );
};
