import { classNames } from 'shared/utils/classNames/classNames';
import styles from './MovieDetailCard.module.scss';
import { Button } from 'shared/ui/Button/Button';
import { Play } from 'lucide-react';

interface MovieDetailCardProps {
  className?: string;
}

export const MovieDetailCard = ({ className }: MovieDetailCardProps) => {
  return (
    <div className={classNames(styles.movie_detail_card, {}, [className])}>
      <img className={classNames(styles.movie_detail_poster, {}, [className])} />
      <div className={classNames(styles.movie_detail_title, {}, [className])}>My Hero Academia</div>

      <Button preffix={<Play />}>Смотреть</Button>
    </div>
  );
};
