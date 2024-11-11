import { Preview } from '../Preview/Preview';
import styles from './MainPage.module.scss';

export const MainPage = () => {
  return (
    <div className={styles.MainPage}>
      <Preview />
    </div>
  );
};
