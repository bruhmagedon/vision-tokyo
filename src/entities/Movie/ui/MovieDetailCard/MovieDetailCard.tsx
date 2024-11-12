import { classNames } from 'shared/utils/classNames/classNames';
import styles from './MovieDetailCard.module.scss';
import { Button } from 'shared/ui/Button/Button';
import { Play } from 'lucide-react';
import { Movie } from 'entities/Movie/model/types';

interface MovieDetailCardProps {
  className?: string;
  film: Movie;
}

export const MovieDetailCard = ({ className, film }: MovieDetailCardProps) => {
  return (
    <div className={classNames(styles.movie_detail_card, {}, [className])}>
      <img
        className={styles.movie_detail_poster}
        src={film?.poster?.previewUrl}
        alt='Постер фильма'
      />
      <div className={styles.movie_detail_title}>{film?.name}</div>

      <Button preffix={<Play />}>Смотреть</Button>
    </div>
  );
};
