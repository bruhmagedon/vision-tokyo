import { classNames } from 'shared/utils/classNames/classNames';
import styles from './MovieDetailCard.module.scss';

interface MovieDetailCardProps {
  className?: string;
}

export const MovieDetailCard = ({ className }: MovieDetailCardProps) => {
  return (
    <div className={classNames(styles.movie_detail_card, {}, [className])}>
      <div></div>
    </div>
  );
};
