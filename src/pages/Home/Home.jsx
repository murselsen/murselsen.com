import React from 'react';
import styles from './Css/Home.module.css';
import HomeContent from './HomeContent';

const Home = () => {
    return (
        <div className={styles.HomePage}>
            <HomeContent/>
            {/*<HomeMedia/>*/}
        </div>
    );
}

export default Home;