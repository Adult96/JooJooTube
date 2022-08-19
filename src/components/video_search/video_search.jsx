import React, { memo, useEffect } from 'react';
import { useRef } from 'react';
import styles from './video_search.module.css';

const VideoSearch = memo(({ onSearch, onLogoClick }) => {
  const searchRef = useRef();

  const handleSumit = (e) => {
    const searchItem = searchRef.current.value;
    e.preventDefault();
    onSearch(searchItem);
  };

  const handleLogoClick = () => {
    onLogoClick();
  };

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo_container} onClick={handleLogoClick}>
          <img className={styles.logo} src='images/logo.png' alt='logo' />
          <p className={styles.name}>JooJooTube</p>
        </div>
        <button className={`${styles.search_btn} ${styles.search_bar}`}>
          <img
            className={styles.search_img}
            src='images/search.png'
            alt='search'
          />
        </button>
      </div>
      <form className={styles.search_container} onSubmit={handleSumit}>
        <input
          ref={searchRef}
          className={styles.search}
          type='text'
          placeholder='Search...'
        />
        <button className={styles.search_btn}>
          <img
            className={styles.search_img}
            src='images/search.png'
            alt='search'
          />
        </button>
      </form>
    </div>
  );
});

export default VideoSearch;
