import { classNames } from 'shared/utils/classNames/classNames';
import styles from './Preview.module.scss';
import { MovieDescription } from 'entities/Movie';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Movie, MoviePosterResponse } from 'entities/Movie/model/types';
interface PreviewProps {
  className?: string;
}
const API_URL = 'https://api.kinopoisk.dev/v1.4';

export const Preview = ({ className }: PreviewProps) => {
  const [film, setFilm] = useState<Movie>(null);
  const [filmPoster, setFilmPoster] = useState<MoviePosterResponse>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get<Movie>(`${API_URL}/movie/749374`, {
          headers: {
            'X-API-KEY': 'XXVGHXZ-GKHMNNR-PCBSJKV-8SFT6AE'
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
          `${API_URL}/image?page=1&limit=10&movieId=749374&height=1-1000&width=1000-2000`,
          {
            headers: {
              'X-API-KEY': 'XXVGHXZ-GKHMNNR-PCBSJKV-8SFT6AE'
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
          <img className={styles.main_poster__img} src={filmPoster.docs[0]?.url} alt='mainPoster' />
        )}
        {film && <MovieDescription film={film} />}
      </div>
      <div className={styles.sub_poster__container}></div>
    </section>
  );
};
