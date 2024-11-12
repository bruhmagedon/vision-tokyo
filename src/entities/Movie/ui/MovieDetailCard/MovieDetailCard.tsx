import { classNames } from 'shared/utils/classNames/classNames';
import styles from './MovieDetailCard.module.scss';
import { Button, ButtonSize } from 'shared/ui/Button/Button';
import { Play } from 'lucide-react';
import { Film, Movie } from 'entities/Movie/model/types';
import { Badge, BadgeTheme } from 'shared/ui/Badge/Badge';

interface MovieDetailCardProps {
  className?: string;
  // film: Movie;
  film: Film;
}

export const MovieDetailCard = ({ className, film }: MovieDetailCardProps) => {
  return (
    <div className={classNames(styles.movie_detail__card, {}, [className])}>
      <img className={styles.movie_detail__poster} src={film.coverUrl} alt='Постер фильма' />
      <div className={styles.movie_detail_description__container}>
        <div className={styles.movie_detail__title}>{film.nameRu}</div>
        <ul className={styles.movie_detail_list}>
          <Badge theme={BadgeTheme.PALE}>2019</Badge>
          <Badge border theme={BadgeTheme.PALE}>
            18+
          </Badge>
          <Badge theme={BadgeTheme.PALE}>{film.year ?? '2013'}</Badge>
          <Badge theme={BadgeTheme.PALE}>4 сезона</Badge>
        </ul>
        <div className={styles.movie_detail__description}>{film.shortDescription}</div>
        <Button size={ButtonSize.XS} preffix={<Play width={'1rem'} height={'1rem'} />}>
          Смотреть
        </Button>
      </div>
    </div>
  );
};
