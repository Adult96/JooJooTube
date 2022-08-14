import { useEffect } from 'react';
import { useState } from 'react';
import './app.css';
import VideoList from './components/vidoe_list/video_list';

function App() {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyA4jfMuXNN1wszcF0lnumWJDxKFC7SuNg0',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideo(result.items))
      .catch((error) => console.log('error', error));
  }, []);
  return <VideoList videos={video} />;
}

export default App;
