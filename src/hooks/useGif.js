import React from 'react'
import { useState , useEffect} from 'react';
import axios from 'axios';

const API_KEY = 'nRiQZNfiy97Mc5JpDD4FynWCTMtZn46q';
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
  
  const[gif, setGif] = useState('');
  const[loading, setloading] = useState(false);

    //API Call
    async function fetchData(tag){
      setloading(true);
      const {data} = await axios.get(tag ? `${url}&tag=${tag}`  : url);
      const imageSource = data.data.images.downsized_large.url;
      setGif(imageSource);
      setloading(false);
    }
  
    useEffect( () => {
      fetchData();
    }, [])

    return {gif,loading, fetchData}; 

}

export default useGif