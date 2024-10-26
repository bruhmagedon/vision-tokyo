import { classNames } from 'shared/utils/classNames/classNames';
import styles from './Footer.module.scss';

interface FooterProps {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
  return <div className={classNames(styles.Footer, {}, [className])}></div>;
};
