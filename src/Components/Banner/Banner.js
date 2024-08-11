import React, { useEffect, useState } from 'react';
import { API_KEY } from '../../constants/constants';
import './Banner.css';
import axios from '../../axios';

function Banner() {
 const [movie, setMovie] = useState()

useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[0]);
      setMovie(response.data.results[0])
    })
}, [])

  return (
    <div className='banner'>
       <div className='content'>
            <h1 className='title'>Movie Name</h1>
            <div className='buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document</h1>
       </div>
            <div className="fade"></div>
      
    </div>
  )
}

export default Banner
