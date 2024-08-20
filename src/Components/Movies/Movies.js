import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import './Movies.css';
import { imageUrl, API_KEY } from '../../constants/constants';
import axios from '../../axios';

function Movies(props) {
  const [movies, setMovies] = useState([]);
  const [video, setVideo] = useState('');
  const [loading, setLoading] = useState(false); // State for loading GIF

  useEffect(() => {
    axios.get(props.url).then(response => {
      console.log(response.data);
      setMovies(response.data.results);
    }).catch(err => {
      console.log(err);
      alert('Network Error');
    });
  }, [props.url]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    setLoading(true); // Set loading to true when starting to load the video
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}`).then(response => {
      console.log(response.data);
      if (response.data.results.length !== 0) {
        setVideo(response.data.results[0]);
      } else {
        console.log('Array is empty!');
        alert('Not Available');
        setLoading(false); // Stop loading if no video is available
      }
    });
  };

  // This function will be called when the video has loaded
  const onVideoReady = () => {
    setLoading(false); // Set loading to false when the video is ready
  };

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((movie) =>
          <img onClick={() => handleMovie(movie.id)} className={props.others ? 'others' : 'trending'} src={`${imageUrl + movie.backdrop_path}`} alt="Poster" />
        )}
      </div>

      <div className='video '>
        {video && <i className="bi bi-x-lg" onClick={() => {
          setVideo('')
        }}> </i>}

        {loading && <img src="/loading.gif" alt="Loading..." className="loading-gif" />}

        {video && <YouTube opts={opts} videoId={video.key} onReady={onVideoReady} />}

      </div>
    </div>
  );
}

export default Movies;
