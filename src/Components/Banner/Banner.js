import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube'
import { API_KEY, imageUrl } from '../../constants/constants';
import './Banner.css';
import axios from '../../axios';

function Banner() {
 const [movie, setMovie] = useState()
 const [video, setVideo] = useState('')
 const [loading, setLoading] = useState(false); // State for loading GIF
useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[0]);
      setMovie(response.data.results.sort(function (a, b) { return 0.5 - Math.random() })[0])
    })
}, [])

const opts = {
  height: '390',
  width: '100%',
  playerVars: {
    autoplay: 1,
  },
}

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
    <div className='banner'>
       <div style={{backgroundImage: `url(${movie? imageUrl+movie.backdrop_path : ""})` }} 
     className='bannerImage' >
       <div className='content'>
            <h1 className='title' title='Movie Name'>{movie? movie.title : "New Movie"}</h1>
            <div className='buttons'>
                <button className='button' title='Play' onClick={()=>handleMovie(movie.id)} >Play  <i className="bi bi-play-btn-fill "></i></button>
            </div>
          <h1 className='description' title='Overview'>{movie ? movie.overview : "Loading..." }</h1>
       </div>
            <div className="fade"></div>
      
    </div>
    <div className='video '>
    { video && <i className="bi bi-x-lg" title='close' onClick={()=>{
      setVideo('')
    }}> </i> }
    
    {loading && <img src="/loading.gif" alt="Loading..." className="loading-gif" />}

    { video && <YouTube opts={opts} videoId={video.key} onReady={onVideoReady}  /> }

    </div>
   
    </div>
   
  ) 
}

export default Banner
