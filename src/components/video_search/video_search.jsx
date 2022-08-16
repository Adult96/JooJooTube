import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import styles from './video_search.module.css';

const VideoSearch = ({ onSearch }) => {
  const searchRef = useRef();

  const handleSumit = (e) => {
    const searchItem = searchRef.current.value;
    e.preventDefault();
    onSearch(searchItem);
  };

  return (
    <form className={styles.header} onSubmit={handleSumit}>
      <div className={styles.logo_container}>
        <img className={styles.logo} src='images/logo.png' alt='logo' />
        <p className={styles.name}>JooJooTube</p>
      </div>
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
  );
};

export default VideoSearch;
