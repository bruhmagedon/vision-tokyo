import { Outlet } from 'react-router-dom';
import styles from './BaseLayout.module.scss';

const BaseLayout = () => {
    return (
        <div className={styles.layout}>
            <h1>jost</h1>
            <span>BaseLayout</span>
            <Outlet />
        </div>
    );
};

export default BaseLayout;
