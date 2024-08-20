import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube'
import { API_KEY, imageUrl } from '../../constants/constants';
import './Banner.css';
import axios from '../../axios';

function Banner() {
 const [movie, setMovie] = useState()
 const [video, setVideo] = useState('')
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
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
   
  },
}

const handleMovie = (id)=>{
  console.log(id);
  axios.get(`/movie/${id}/videos?api_key=${API_KEY}`).then(response=>{
    console.log(response.data);
    if(response.data.results.length!==0){
      setVideo(response.data.results[0])
    }else{
      console.log('Array is empty!');
      alert('Not Available')
    }
  })
  
}

  return (
    <div className='banner'>
       <div style={{backgroundImage: `url(${movie? imageUrl+movie.backdrop_path : ""})` }} 
     className='bannerImage' >
       <div className='content'>
            <h1 className='title'>{movie? movie.title : "New Movie"}</h1>
            <div className='buttons'>
                <button className='button' onClick={()=>handleMovie(movie.id)} >Play  <i class="bi bi-play-btn-fill "></i></button>
            </div>
          <h1 className='description'>{movie ? movie.overview : "Loading..." }</h1>
       </div>
            <div className="fade"></div>
      
    </div>
    { video && <YouTube opts={opts} videoId={video.key}  /> }
    </div>
   
  )
}

export default Banner
