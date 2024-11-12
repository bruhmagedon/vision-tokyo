export interface MoviesApiResponse {
  docs: Movie[];
}

export interface MoviePosterResponse {
  total: number;
  totalPages: number;
  items: PreviewImage[];
}

interface PreviewImage {
  imageUrl?: string;
  previewUrl?: string;
}

// Вложенные типы
export interface FilmCountry {
  country: string; // Страна производства фильма
}

export interface FilmGenre {
  genre: string; // Жанр фильма, например, фантастика, боевик и т.д.
}

// Основной интерфейс Film
export interface Film {
  kinopoiskId: number; // Уникальный идентификатор фильма на Кинопоиске
  kinopoiskHDId?: string | null; // Уникальный идентификатор HD-версии на Кинопоиске, может отсутствовать
  imdbId?: string | null; // Уникальный идентификатор фильма в базе IMDB, может отсутствовать
  nameRu?: string | null; // Название фильма на русском языке
  nameEn?: string | null; // Название фильма на английском языке
  nameOriginal?: string | null; // Оригинальное название фильма
  posterUrl: string; // URL-адрес постера фильма
  posterUrlPreview: string; // URL-адрес предпросмотра постера фильма
  coverUrl?: string | null; // URL-адрес обложки фильма, может отсутствовать
  logoUrl?: string | null; // URL-адрес логотипа фильма, может отсутствовать
  reviewsCount: number; // Количество отзывов на фильм
  ratingGoodReview?: number | null; // Рейтинг положительных отзывов, может отсутствовать
  ratingGoodReviewVoteCount?: number | null; // Количество голосов за положительные отзывы, может отсутствовать
  ratingKinopoisk?: number | null; // Рейтинг фильма на Кинопоиске, может отсутствовать
  ratingKinopoiskVoteCount?: number | null; // Количество голосов за рейтинг на Кинопоиске, может отсутствовать
  ratingImdb?: number | null; // Рейтинг фильма в IMDB, может отсутствовать
  ratingImdbVoteCount?: number | null; // Количество голосов за рейтинг в IMDB, может отсутствовать
  ratingFilmCritics?: number | null; // Рейтинг от критиков, может отсутствовать
  ratingFilmCriticsVoteCount?: number | null; // Количество голосов от критиков, может отсутствовать
  ratingAwait?: number | null; // Ожидаемый рейтинг, может отсутствовать
  ratingAwaitCount?: number | null; // Количество голосов для ожидаемого рейтинга, может отсутствовать
  ratingRfCritics?: number | null; // Рейтинг от российских критиков, может отсутствовать
  ratingRfCriticsVoteCount?: number | null; // Количество голосов от российских критиков, может отсутствовать
  webUrl: string; // URL-адрес страницы фильма на Кинопоиске
  year?: number | null; // Год выпуска фильма, может отсутствовать
  filmLength?: number | null; // Длительность фильма в минутах, может отсутствовать
  slogan?: string | null; // Слоган фильма, может отсутствовать
  description?: string | null; // Описание фильма, может отсутствовать
  shortDescription?: string | null; // Краткое описание фильма, может отсутствовать
  editorAnnotation?: string | null; // Примечание от редакторов, может отсутствовать
  isTicketsAvailable: boolean; // Доступность билетов на фильм
  productionStatus?:
    | 'POST_PRODUCTION'
    | 'COMPLETED'
    | 'IN_PRODUCTION'
    | 'ANNOUNCED'
    | 'UNKNOWN'
    | null; // Статус производства фильма
  type: 'FILM' | 'VIDEO' | 'TV_SERIES' | 'MINI_SERIES' | 'TV_SHOW'; // Тип фильма
  ratingMpaa?: string | null; // Рейтинг MPAA, может отсутствовать
  ratingAgeLimits?: string | null; // Возрастное ограничение, может отсутствовать
  hasImax?: boolean | null; // Наличие формата IMAX, может отсутствовать
  has3D?: boolean | null; // Наличие формата 3D, может отсутствовать
  lastSync: string; // Дата последней синхронизации данных
  countries: FilmCountry[]; // Список стран производства фильма
  genres: FilmGenre[]; // Список жанров фильма
  startYear?: number | null; // Год начала выпуска сериала, если это сериал
  endYear?: number | null; // Год окончания выпуска сериала, если это сериал
  serial?: boolean | null; // Является ли фильм сериалом
  shortFilm?: boolean | null; // Является ли фильм короткометражным
  completed?: boolean | null; // Завершено ли производство фильма
}

export interface Movie {
  id: number; //Id фильма с кинопоиска
  externalId: ExternalId;
  name?: string;
  alternativeName?: string;
  enName?: string;
  names: Names[];
  type: Type; //Тип тайтла
  typeNumber: number; // №Возможно как record 1 (movie) | 2 (tv-series) | 3 (cartoon) | 4 (anime) | 5 (animated-series) | 6 (tv-show)
  year?: number; //Год премьеры №(1860-2030) протипизировать диапазон
  description?: string; //Описание тайтла
  shortDescription?: string; //Сокращенное описание
  slogan?: string; //Слоган
  status?: Status; //Статус релиза тайтла
  rating?: Rating;
  votes?: Votes;
  movieLength?: number; //Продолжительность фильма
  ratingMpaa?: string; //Возрастной рейтинг по MPAA
  ageRating?: number; //Возрастной рейтинг
  logo?: Logo;
  poster?: Poster;
  backdrop?: Poster;
  videos?: Videos;
  genres?: Genre[];
  countries?: Country[];
  persons?: Person[];
  reviewInfo?: ReviewInfo;
  seasonsInfo?: SeasonInfo[];
  budget?: Budget;
  fees?: Fees;
  premiere?: Premiere;
  similarMovies?: SimilarMovie[];
  sequelsAndPrequels?: SequelOrPrequel[];
  watchability?: WatchabilityItem[];
  releaseYears?: ReleaseYears[];
  top10?: number; //Позиция тайтла в топ 10
  top250?: number; //Позиция тайтла в топ 250
  ticketsOnSale?: boolean; //Признак того, что тайтл находится в прокате
  totalSeriesLength?: number; //Продолжительность всех серий
  seriesLength?: number; //Средняя продолжительность серии
  isSeries?: boolean; //Признак сериала
  audience?: Audience[];
  lists?: string[];
  networks: { items: Network[] };
  updatedAt: string;
  createdAt: string;
  facts: Fact[];
  imagesInfo: ImagesInfo;
}

interface ExternalId {
  kpHD?: string; //ID из kinopoisk HD
  imdb?: string;
  tmdb?: number;
}

interface Names {
  name?: string;
  language?: string;
  type?: string;
}

type Type = 'movie' | 'tv-series' | 'cartoon' | 'anime' | 'animated-series' | 'tv-show';

type Status = 'filming' | 'pre-production' | 'completed' | 'announced' | 'post-production';

interface Rating {
  kp?: number; //Рейтинг кинопоиска
  imdb?: number; //Рейтинг IMDB
  tmdb?: number; //Рейтинг TMDB
  filmCritics?: number; //Рейтинг кинокритиков
  russianFilmCritics?: number; //Рейтинг кинокритиков из РФ
  await?: number; //Рейтинг основанный на ожиданиях пользователей
}

interface Votes {
  kp?: string;
  imdb?: number;
  tmdb?: number;
  filmCritics?: number; //Количество голосов кинокритиков
  russianFilmCritics?: number; //Количество голосов кинокритиков из РФ
  await?: number; //Количество ожидающих выхода
}

interface Logo {
  url?: string;
}

interface Poster {
  url?: string;
  previewUrl?: string;
}

interface Videos {
  trailers?: Video[];
  teasers?: Video[];
}

interface Video {
  url?: string; //Url трейлера
  name?: string;
  site?: string;
  type?: string;
  size: number;
}

interface Genre {
  name?: string;
}

interface Country {
  name?: string;
}

export interface Person {
  id?: number; //Id персоны с кинопоиска
  photo?: string;
  name?: string;
  enName?: string;
  description: string;
  profession: string;
  enProfession: string;
}

interface ReviewInfo {
  count?: number;
  positiveCount?: number;
  percentage?: string;
}

interface SeasonInfo {
  number?: number;
  episodesCount?: number;
}

interface Budget {
  value?: number; //Сумма
  currency?: string; //Валюта
}

interface Fees {
  world?: Budget;
  russia?: Budget;
  usa?: Budget;
}

interface Premiere {
  country?: string;
  world?: string; //№ 01.02.2022-01.02.2023 типизировать
  russia?: string; //№ 01.02.2022-01.02.2023 типизировать
  digital?: string;
  cinema?: string; //№ 01.02.2022-01.02.2023 типизировать
  bluray: string;
  dvd: string;
}

export interface SimilarMovie {
  id?: number;
  rating: Rating;
  year: number;
  name: string;
  enName: string;
  alternativeName: string;
  type?: string;
  poster: Poster;
}

interface SequelOrPrequel {
  id?: number;
  rating: Rating;
  year: number;
  name: string;
  enName: string;
  alternativeName: string;
  type?: string;
  poster: Poster;
}

interface WatchabilityItem {
  name?: string;
  logo: Logo;
  url: string;
}

interface ReleaseYears {
  start?: number;
  end?: number;
}

interface Audience {
  count: number; //Количество просмотров в кино
  country: string; //Страна в которой проходил показ
}

interface Network {
  name: string;
  logo: Logo;
}

interface Fact {
  value: string;
  type: string;
  spoiler: boolean;
}

interface ImagesInfo {
  postersCount: number;
  backdropsCount: number;
  framesCount: number;
}
