import { ButtonHTMLAttributes, FC } from 'react';
import styles from './Button.module.scss';
import { classNames } from 'shared/utils/classNames/classNames';

// Comming soon
export enum ButtonTheme {}
export enum ButtonSize {}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  disabled?: boolean;
  preffix?: React.ReactNode;
  suffix?: React.ReactNode;
  // Comming soon
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
}

export const Button = (props: ButtonProps) => {
  const { className, children, disabled, preffix, suffix, ...otherProps } = props;

  return (
    <button
      type='button'
      //   disabled={disabled}
      className={classNames(styles.button, {}, [className])}
      {...otherProps}
    >
      {preffix}
      {children}
      {suffix}
    </button>
  );
};
