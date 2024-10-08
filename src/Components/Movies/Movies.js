import React, { useEffect, useState, useRef } from 'react';
import YouTube from 'react-youtube';
import './Movies.css';
import { imageUrl, API_KEY } from '../../constants/constants';
import axios from '../../axios';

function Movies(props) {
  const [movies, setMovies] = useState([]);
  const [movieDetails, setMovieDetails] = useState('');
  const [video, setVideo] = useState('');
  const [loading, setLoading] = useState(false);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const rowRef = useRef(null);

  useEffect(() => {
    setLoading(true); // Set loading to true when fetching data
    axios.get(props.url).then(response => {
      setMovies(response.data.results);
      setLoading(false); // Set loading to false when data is fetched
    }).catch(err => {
      console.log(err);
      alert('Network Error');
      setLoading(false); // Set loading to false on error
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
    setLoading(true); // Set loading to true when fetching video data
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}`).then(response => {
      if (response.data.results.length !== 0) {
        setVideo(response.data.results[0]);
        setLoading(false); // Set loading to false when video data is fetched
      } else {
        alert('Not Available');
        setLoading(false); // Set loading to false if no video is available
      }
    }).catch(err => {
      console.log(err);
      setLoading(false); // Set loading to false on error
    });
  };

  const onVideoReady = () => {
    setLoading(false); // Set loading to false when video is ready
  };

  const scrollRight = () => {
    rowRef.current.scrollBy({ left: 500, behavior: 'smooth' });
    setShowLeftButton(true);
  };

  const scrollLeft = () => {
    rowRef.current.scrollBy({ left: -500, behavior: 'smooth' });
    if (rowRef.current.scrollLeft <= 500) {
      setShowLeftButton(false);
    }
  };

  return (
    <div className='row'>
      <h2 title='genre'>{props.title}</h2>
      <div className='scroll-buttons'>
        {showLeftButton && (
          <button className='scroll-button left' onClick={scrollLeft}>
            <i className="bi bi-arrow-left-circle-fill"></i>
          </button>
        )}
        <div className='posters' ref={rowRef}>
          {movies.map((movie) => (
            <div className="poster-container" key={movie.id} onClick={() => {
              handleMovie(movie.id);
              setMovieDetails({
                title: movie.title || movie.original_title,
                release: movie.release_date,
                overview: movie.overview,
                rating: movie.vote_average.toFixed(1) 
              });
            }}>
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
        <button className='scroll-button right' onClick={scrollRight}>
          <i className="bi bi-arrow-right-circle-fill"></i>
        </button>
      </div>

      {video && (
        <div className='video-overlay'>
          <div className='video-container'>
            <i className="bi bi-x-lg video-close-button" onClick={() => setVideo('')}></i>
            {loading && <img src={`${process.env.PUBLIC_URL}/loading.gif`} alt="Loading..." className="loading-gif" />}
            <YouTube opts={opts} videoId={video.key} onReady={onVideoReady} />
            <div className='movie-details'>
              <h2>Title: {movieDetails.title}</h2>
              <h4>Release: {movieDetails.release} &nbsp; Rating: {movieDetails.rating}</h4>
              <p>Overview: {movieDetails.overview}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Movies;
