import { classNames } from 'shared/utils/classNames/classNames';
import styles from './MovieDescription.module.scss';
import { TextGroup } from 'shared/ui/TextGroup/TextGroup';
import { Movie } from 'entities/Movie/model/types';

interface MovieDescriptionProps {
  className?: string;
  fullInfo?: boolean;
  film: Movie;
}

export const MovieDescription = ({ className, fullInfo, film }: MovieDescriptionProps) => {
  return (
    <div className={classNames(styles.movie_description__container, {}, [className])}>
      <h1 className={styles.movie_description__main_title}>Истребитель демонов</h1>
      <ul className={styles.movie_description__list}>
        <li className={styles.movie_description_list_item}>{film.ageRating ?? '18'}+</li>
        <li>HD</li>
        <li>{film.year ?? '2013'}</li>
        <li>{film.type}</li>
        <li>{film.seasonsInfo.length - 1} сезонов</li>
      </ul>
      <h2 className={styles.movie_desctiption__title}>Об истории</h2>
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
          .join(' ')}
      />
      {fullInfo && (
        <TextGroup
          title='Языки'
          textList='Japanese, English, English (India), Español (América Latina)'
        />
      )}
    </div>
  );
};
