import React,{useEffect,useState} from 'react'
import './Movies.css'
import { API_KEY,imageUrl} from '../../constants/constants'
import axios from '../../axios'
function Movies() {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then(response=>{
      console.log(response.data);
      setMovies(response.data.results);
    }).catch(err=>{
      alert('Network Error')
    })
  }, [])

  return (
    <div className='row'>
        <h2>Trendings</h2>
        <div className='posters'>
          {movies.map((movie)=>
             <img className='poster' src={`${imageUrl+movie.backdrop_path}`} alt="Poster" />

          )}
        
        </div>
    </div>
  )
}

export default Movies
