import React,{useEffect,useState} from 'react'
import './Movies.css'
import {imageUrl} from '../../constants/constants'
import axios from '../../axios'
function Movies(props) {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios.get(props.url).then(response=>{
      console.log(response.data);
      setMovies(response.data.results);
    }).catch(err=>{
      console.log(err);
      
      alert('Network Error')
    })
  }, [])

  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((movie)=>
             <img className={props.others? 'others' : 'trending'} src={`${imageUrl+movie.backdrop_path}`} alt="Poster" />
          )}
        
        </div>
    </div>
  )
}

export default Movies
