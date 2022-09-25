import './banner.css'
import axios from 'axios';
import { useState, useEffect } from 'react';

const Banner = () => {
  const { banner, setBanner } = useState([])

  useEffect(() => {
    axios.get()
      .then((response) => {
        setBanner(response.data.results)
      }).catch(err => {
        console.log('Oh noooo!!');
        console.log(err);
      })
  }, [])
  console.log(banner)



  return (
    <div className='hero'>Banner</div>
  );
}

export default Banner;
