import { classNames } from 'shared/utils/classNames/classNames';
import styles from './Preview.module.scss';
import { MovieDescription } from 'entities/Movie';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Film, Movie, MoviePosterResponse } from 'entities/Movie/model/types';
import { MovieDetailCard } from 'entities/Movie/ui/MovieDetailCard/MovieDetailCard';
interface PreviewProps {
  className?: string;
}

// Апи с плохими картинками
const API_URL_DEV = 'https://kinopoiskapiunofficial.tech/api/v2.2/films';
// Апи с хорошими картинками
const API_URL_TECH = 'https://kinopoiskapiunofficial.tech/api/v2.2/films';

const ATACK_ON_TITAN_ID = '749374';

export const Preview = ({ className }: PreviewProps) => {
  const [film, setFilm] = useState<Film>(null);
  const [filmPoster, setFilmPoster] = useState<MoviePosterResponse>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get<Film>(`${API_URL_DEV}/${ATACK_ON_TITAN_ID}`, {
          headers: {
            'X-API-KEY': 'c0bba299-8c50-497e-8f8c-a8e2ec14de14'
          }
        });
        setFilm(response.data);
        return response.data;
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, []);

  useEffect(() => {
    const fetchFilmPoster = async () => {
      try {
        const response = await axios.get<MoviePosterResponse>(
          `${API_URL_TECH}/${ATACK_ON_TITAN_ID}/images?type=STILL&page=1`,
          {
            headers: {
              'X-API-KEY': 'c0bba299-8c50-497e-8f8c-a8e2ec14de14'
            }
          }
        );
        setFilmPoster(response.data);
        return response.data;
      } catch (error) {
        console.error(error);
      }
    };
    fetchFilmPoster();
  }, []);

  if (!film) {
    return <div>Пизда</div>;
  }

  return (
    <section className={classNames(styles.preview, {}, [className])}>
      <div className={styles.main_poster}>
        {filmPoster && (
          <img
            className={styles.main_poster__img}
            src={filmPoster.items[2].imageUrl}
            alt='Главный постер'
          />
        )}
        {film && (
          <div className={styles.main_poster__desc}>
            <MovieDescription film={film} hasBtn={true} />
          </div>
        )}
      </div>
      <div className={styles.sub_poster__container}>
        <MovieDetailCard film={film} />
        <MovieDetailCard film={film} />
      </div>
    </section>
  );
};
