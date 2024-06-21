// import React from 'react';
// import styles from './index.module.css'

// const index = () => {
//   return (
//     <>
// 		<div className={styles.book}>
// 	<div className={styles.book__pgshadow}></div>
// 	<div className={styles.book__pg}></div>
// 	<div className={`${styles.book__pg} ${styles['book__pg--2']}`}></div>
// <div className={`${styles.book__pg} ${styles['book__pg--3']}`}></div>
// <div className={`${styles.book__pg} ${styles['book__pg--4']}`}></div>
// <div className={`${styles.book__pg} ${styles['book__pg--5']}`}></div>
// </div>
//     </>
//   )
// }

// export default index

import React from 'react';
import styles from './index.module.css';

const Index = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.book}>
        <div className={styles.book__pgshadow}></div>
        <div className={styles.book__pg}></div>
        <div className={`${styles.book__pg} ${styles['book__pg--2']}`}></div>
        <div className={`${styles.book__pg} ${styles['book__pg--3']}`}></div>
        <div className={`${styles.book__pg} ${styles['book__pg--4']}`}></div>
        <div className={`${styles.book__pg} ${styles['book__pg--5']}`}></div>
      </div>
    </div>
  );
};

export default Index;
