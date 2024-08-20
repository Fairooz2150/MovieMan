import React,{useEffect,useState} from 'react'
import YouTube from 'react-youtube'
import './Movies.css'
import {imageUrl,API_KEY} from '../../constants/constants'
import axios from '../../axios'

function Movies(props) {
  const [movies, setMovies] = useState([])
  const [video, setVideo] = useState('')
  useEffect(() => {
    axios.get(props.url).then(response=>{
      console.log(response.data);
      setMovies(response.data.results);
    }).catch(err=>{
      console.log(err);
      alert('Network Error')
    })
  }, [])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
     
    },
  };
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
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((movie)=>
             <img onClick={()=>handleMovie(movie.id)} className={props.others? 'others' : 'trending'} src={`${imageUrl+movie.backdrop_path}`} alt="Poster" />
          )}
        </div>
       { video && <YouTube opts={opts} videoId={video.key}  /> }
    </div>
  )
}

export default Movies
