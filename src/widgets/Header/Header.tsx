import { classNames } from 'shared/utils/classNames/classNames';
import styles from './Header.module.scss';
import { BellRing, Search } from 'lucide-react';
import { Input } from 'shared/ui/Input/Input';
import UserAvatar from 'shared/assets/User/UserAvatar.jpg';
import { Link } from 'react-router-dom';
import { pagesConfig } from 'shared/config/pagesConfig';
interface HeaderProps {
  className?: string;
}

// TODO* пофиксить размер хедера (чтобы был поменьбше)
export const Header = ({ className }: HeaderProps) => {
  return (
    <header className={classNames(styles.header, {}, [className])}>
      <div className={styles.logo_container}>Tokyo Vision</div>
      <nav className={styles.nav_container}>
        {pagesConfig.map((page) => (
          <Link key={page.name} to={page.path}>
            {page.name}
          </Link>
        ))}
      </nav>
      <div className={styles.user_container}>
        <Input icon={<Search />} type='text' placeholder='Поиск' />
        <div className={styles.user_notification}>
          <BellRing />
        </div>
        <div className={styles.user_avatar}>
          <img src={UserAvatar} alt='Аватар' />
        </div>
      </div>
    </header>
  );
};
