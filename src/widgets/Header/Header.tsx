import { classNames } from 'shared/utils/classNames/classNames';
import styles from './Header.module.module.scss';

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  return <div className={classNames(styles.Header, {}, [className])}></div>;
};
