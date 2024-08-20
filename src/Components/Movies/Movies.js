import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import './Movies.css';
import { imageUrl, API_KEY } from '../../constants/constants';
import axios from '../../axios';

function Movies(props) {
  const [movies, setMovies] = useState([]);
  const [movieDetails, setMovieDetails] = useState('');
  const [video, setVideo] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get(props.url).then(response => {
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
    setLoading(true);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}`).then(response => {
      if (response.data.results.length !== 0) {
        setVideo(response.data.results[0]);
      } else {
        alert('Not Available');
        setLoading(false);
      }
    });
  };

  const onVideoReady = () => {
    setLoading(false);
  };

  return (
    <div className='row'>
      <h2 title='genre'>{props.title}</h2>
      <div className='posters'>
        {movies.map((movie) => (
          <div className="poster-container" key={movie.id} onClick={() => {
              handleMovie(movie.id);
              setMovieDetails({
                title: movie.title || movie.original_title,
                release: movie.release_date,
                overview: movie.overview,
                rating: movie.vote_average
              });
            }}
          >
            <img 
              className="movie"
              src={`${imageUrl + movie.backdrop_path}`} 
              alt="Poster" 
            />
            <div className="overlay">
              <h4>{movie.original_title || movie.title}</h4>
            </div>
          </div>
        ))}
      </div>

      <div className='video'>
        {video && <i className="bi bi-x-lg" onClick={() => setVideo('')}></i>}
        {loading && <img src="/loading.gif" alt="Loading..." className="loading-gif" />}
        {video && <YouTube opts={opts} videoId={video.key} onReady={onVideoReady} /> }

        {video && (
          <div className='movie-details'>
            <h2>Title: {movieDetails.title}</h2>
            <h4>Release: {movieDetails.release} &nbsp; Rating: {movieDetails.rating}</h4>
            <p>Overview: {movieDetails.overview}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Movies;
