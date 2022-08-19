import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = ({ videos, videos: { snippet } }) => {
  console.log(videos);
  return (
    <section className={styles.detailVideo}>
      <iframe
        className={styles.player}
        type='text/html'
        title='joojootube video player'
        width='100%'
        height='500px'
        src={`https://www.youtube.com/embed/${videos.id}`}
        frameBorder='0'
        allowFullScreen
      ></iframe>
      <h2>{snippet.title}</h2>
      <h3>{snippet.channelTitle}</h3>
      <pre className={styles.description}>{snippet.description}</pre>
    </section>
  );
};

export default VideoDetail;
