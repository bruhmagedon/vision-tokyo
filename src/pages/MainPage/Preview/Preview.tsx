import { classNames } from 'shared/utils/classNames/classNames';
import styles from './Preview.module.scss';
import { MovieDescription } from 'entities/Movie';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Movie, MoviePosterResponse } from 'entities/Movie/model/types';
import { MovieDetailCard } from 'entities/Movie/ui/MovieDetailCard/MovieDetailCard';
interface PreviewProps {
  className?: string;
}

// Апи с плохими картинками
const API_URL_DEV = 'https://api.kinopoisk.dev/v1.4';
// Апи с хорошими картинками
const API_URL_TECH = 'https://kinopoiskapiunofficial.tech/api/v2.2/films';

const ATACK_ON_TITAN_ID = '749374';

export const Preview = ({ className }: PreviewProps) => {
  const [film, setFilm] = useState<Movie>(null);
  const [filmPoster, setFilmPoster] = useState<MoviePosterResponse>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get<Movie>(`${API_URL_DEV}/movie/${ATACK_ON_TITAN_ID}`, {
          headers: {
            'X-API-KEY': 'MHMPMBA-E7CMG4F-J1CBPAS-ZSVK32F'
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

  return (
    <section className={classNames(styles.preview, {}, [className])}>
      <div className={styles.main_poster}>
        {filmPoster && (
          <img
            className={styles.main_poster__img}
            src={filmPoster.items[0].imageUrl}
            alt='Главный постер'
          />
        )}
        {film && <MovieDescription film={film} hasBtn={true} />}
      </div>
      <div className={styles.sub_poster__container}></div>
      <MovieDetailCard film={film} />
    </section>
  );
};
