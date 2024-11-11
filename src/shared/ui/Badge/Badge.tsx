import { ButtonHTMLAttributes, FC } from 'react';
import styles from './Badge.module.scss';
import { classNames } from 'shared/utils/classNames/classNames';

// Comming soon
export enum BadgeTheme {
  PALE = 'pale',
  BRIGHT = 'bright'
}
export enum BadgeSize {
  M = 'size_m',
  L = 'size_l'
}

interface BadgeProps {
  className?: string;
  theme?: BadgeTheme;
  size?: BadgeSize;
  border?: boolean;
  children: React.ReactNode;
  // square?: boolean;
}

export const Badge = (props: BadgeProps) => {
  const { children, className, theme = BadgeTheme.PALE, size = BadgeSize.M, border } = props;

  const mods: Record<string, boolean> = {
    [styles[theme]]: true,
    [styles.border]: border,
    [styles[size]]: true
  };

  return <div className={classNames(styles.badge, mods, [className])}>{children}</div>;
};
