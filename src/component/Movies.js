import Video from './Video';
import axios from 'axios';
import React,{ useEffect, useState } from 'react';

const Movies=()=> {
    const [movieList,setMovieList]=useState([]);
    const getMovieList=async()=>{
        
      let movieLists= await axios.get("http://localhost:3001/movie/list");
      
      setMovieList(movieLists.data);
    }
    useEffect(()=>{
        console.log("movieLists");
        getMovieList();
    },[])
    

  return (
    <>
    {movieList && movieList.map((item,index)=>(<Video key={index} data={item} />))}
    )
    </>
  );
}

export default Movies;