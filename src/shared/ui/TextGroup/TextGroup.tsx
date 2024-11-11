import { classNames } from 'shared/utils/classNames/classNames';
import styles from './TextGroup.module.scss';

interface TextGroupProps {
  title: string;
  textList: string;
  className?: string;
}

export const TextGroup = ({ className, title, textList }: TextGroupProps) => {
  return (
    <div className={classNames(styles.text_group, {}, [className])}>
      <span className={styles.text_title}>{title}</span>
      <p className={styles.text_}>{textList}</p>
    </div>
  );
};
