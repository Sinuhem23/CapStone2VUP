import React, { useState, useEffect } from 'react';
import '../CSS/trendingmotorcycles.css';
import SearchBar from './SearchBar';

function TrendingVideo({ term, title }) {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    // YOUTUBE API SECTION ////////////
    const YT_API = `${process.env.REACT_APP_YOUTUBE_BASE_QUERY}${term}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;

    fetch(YT_API)
      .then((resp) => resp.json())
      .then((res) => setVideos(res.items || []))
      .catch((error) => console.log(error));
  }, [term]);
  return (
    <div>
      <SearchBar />
      {/* -- Motorcycle Videos Section -- */}

      <div className='motorcycle_uploads'>
        <h3>{title}</h3>
        <div className='recently_added_playlist_videos'>
          {videos.map((vid, idx) => (
            <div key={idx}>
              <iframe
                src={`https://www.youtube.com/embed/${vid.id}`}
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
      {/* -- End of Motorcycle Videos section -- */}
    </div>
  );
}

export default TrendingVideo;
