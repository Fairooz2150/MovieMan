import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import { API_KEY, imageUrl } from '../../constants/constants';
import './Banner.css';
import axios from '../../axios';

function Banner() {
  const [movie, setMovie] = useState();
  const [video, setVideo] = useState('');
  const [movieDetails, setMovieDetails] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      const selectedMovie = response.data.results.sort(() => 0.5 - Math.random())[0];
      setMovie(selectedMovie);
    });
  }, []);

  const opts = {
    height: '500',
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
        setMovieDetails({
          title: movie.title || movie.original_title,
          release: movie.release_date,
          overview: movie.overview,
          rating: movie.vote_average
        });
      } else {
        alert('Video Not Available');
        setLoading(false);
      }
    });
  };

  const onVideoReady = () => {
    setLoading(false);
  };

  return (
    <div className='banner'>
      <div
        style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})` }}
        className='bannerImage'
      >
        <div className='content'>
          <h1 className='title' title='Movie Name'>{movie ? movie.title : "New Movie"}</h1>
          <div className='buttons'>
            <button className='button' title='Play' onClick={() => handleMovie(movie.id)}>Play <i className="bi bi-play-btn-fill "></i></button>
          </div>
          <h1 className='description' title='Overview'>{movie ? movie.overview : "Loading..."}</h1>
        </div>
        <div className="fade"></div>
      </div>

      {video && (
        <div className='video-overlay'>
          <i className="bi bi-x-lg" title='Close' onClick={() => setVideo('')}></i>
          {loading && <img src={`${process.env.PUBLIC_URL}/loading.gif`} alt="Loading..." className="loading-gif" />}
          <YouTube opts={opts} videoId={video.key} className='youtube' onReady={onVideoReady} />
          <div className='movie-details'>
            <h2>Title: {movieDetails.title}</h2>
            <h4>Release: {movieDetails.release} &nbsp; Rating: {movieDetails.rating}</h4>
            <p>Overview: {movieDetails.overview}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Banner;
