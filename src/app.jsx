import { useEffect } from 'react';
import { useState } from 'react';
import styles from './app.module.css';
import VideoSearch from './components/video_search/video_search';
import VideoList from './components/vidoe_list/video_list';

function App({ joojootube }) {
  const [video, setVideo] = useState([]);

  const search = (query) => {
    joojootube
      .search(query) //
      .then((videos) => setVideo(videos));
  };

  useEffect(() => {
    joojootube
      .mostPopualr() //
      .then((videos) => setVideo(videos));
  }, []);

  return (
    <div className={styles.app}>
      <VideoSearch onSearch={search} />
      <VideoList videos={video} />
    </div>
  );
}

export default App;
