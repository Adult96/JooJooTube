import { useEffect } from 'react';
import { useState } from 'react';
import styles from './app.module.css';
import DetailPage from './components/video_detail/video_detail';
import VideoSearch from './components/video_search/video_search';
import VideoList from './components/vidoe_list/video_list';

function App({ joojootube }) {
  const [video, setVideo] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const search = (query) => {
    joojootube
      .search(query) //
      .then((videos) => {
        setVideo(videos);
        setSelectedVideo(null);
      });
  };

  useEffect(() => {
    joojootube
      .mostPopualr() //
      .then((videos) => setVideo(videos));
  }, []);

  return (
    <div className={styles.app}>
      <VideoSearch onSearch={search} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <DetailPage videos={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={video}
            onVideoClick={selectVideo}
            display={selectedVideo ? 'list' : 'grid'}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
