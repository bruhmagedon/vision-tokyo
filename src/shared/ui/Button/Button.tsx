import { ButtonHTMLAttributes, FC } from 'react';
import styles from './Button.module.scss';
import { classNames } from 'shared/utils/classNames/classNames';

// Comming soon
export enum ButtonTheme {}
export enum ButtonSize {
  XS = 'size_xs',
  M = 'size_m'
}

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
  const {
    className,
    children,
    disabled,
    preffix,
    suffix,
    size = ButtonSize.M,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    // [styles[theme]]: true,
    [styles[size]]: true
  };

  return (
    <button
      type='button'
      //   disabled={disabled}
      className={classNames(styles.button, mods, [className])}
      {...otherProps}
    >
      {preffix}
      {children}
      {suffix}
    </button>
  );
};
