import { InputHTMLAttributes } from 'react';
import styles from './Input.module.scss';
import { classNames } from 'shared/utils/classNames/classNames';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;
// Передаём иконку как пропс, можно переделать на type
interface InputProps extends HTMLInputProps {
  icon?: React.ReactNode;
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

// TODO фокус на контейнер (рамки выделяются)
export const Input = ({
  icon,
  className,
  //   value,
  //   onChange,
  type = 'text',
  placeholder
}: InputProps) => {
  return (
    <div className={classNames(styles.input_container, {}, [className])}>
      {icon}
      <input type={type} placeholder={placeholder} />
    </div>
  );
};
