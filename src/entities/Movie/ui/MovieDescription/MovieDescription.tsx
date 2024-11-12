import { classNames } from 'shared/utils/classNames/classNames';
import styles from './MovieDescription.module.scss';
import { TextGroup } from 'shared/ui/TextGroup/TextGroup';
import { Movie } from 'entities/Movie/model/types';
import { Button } from 'shared/ui/Button/Button';
import { Play } from 'lucide-react';
import { Badge, BadgeTheme } from 'shared/ui/Badge/Badge';
import { getCaseByNumber } from 'shared/utils/getCaseByNumber/getCaseByNumber';

interface MovieDescriptionProps {
  className?: string;
  fullInfo?: boolean;
  film: Movie;
  hasBtn?: boolean;
}

export const MovieDescription = ({ className, fullInfo, film, hasBtn }: MovieDescriptionProps) => {
  return (
    <div className={classNames(styles.movie_description__container, {}, [className])}>
      <h1 className={styles.movie_description__main_title}>{film.name}</h1>
      <ul className={styles.movie_description__list}>
        <Badge border theme={BadgeTheme.BRIGHT}>
          {film.ageRating ?? '18'}+
        </Badge>
        <Badge border theme={BadgeTheme.BRIGHT}>
          HD
        </Badge>
        <Badge border theme={BadgeTheme.BRIGHT}>
          {film.year ?? '2013'}
        </Badge>
        <Badge border theme={BadgeTheme.BRIGHT}>
          {film.type}
        </Badge>
        <Badge border theme={BadgeTheme.BRIGHT}>
          {getCaseByNumber(film.seasonsInfo.length - 1, 'ceзон')}
        </Badge>
      </ul>
      {fullInfo && <h2 className={styles.movie_desctiption__title}>Об истории</h2>}
      {fullInfo && (
        <p className={styles.movie_description}>
          Огненный Хашира Кёдзюро Ренгоку получает новые приказы: отправиться на поезд Муген, где
          пропали без вести более сорока человек, и провести расследование. Покинув штаб-квартиру
          Корпуса Истребителей Демонов, он отправляется на эту новую миссию.
        </p>
      )}
      <TextGroup
        title='Сэйю'
        textList={film.persons
          .slice(0, 5)
          .map((person) => person.name)
          .join(', ')}
      />
      {fullInfo && (
        <TextGroup
          title='Языки'
          textList='Japanese, English, English (India), Español (América Latina)'
        />
      )}
      {hasBtn && <Button preffix={<Play width={'1.5rem'} height={'1.5rem'} />}>Смотреть</Button>}
    </div>
  );
};
