import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieCard from '../../components/MovieCard/MovieCard'
import style from './SearchPage.module.css'


const SearchPage = () => {

  const { query } = useParams();
  const [result, setResult] = useState([]);

  const URL = `https://api.themoviedb.org/3/search/movie?api_key=42199dba31be6aeaee9e0207eecc5b2e&query=${query}`


  useEffect(() => {
    getData()
  }, [query])


  const getData = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setResult(data.results)
    } catch (error) {
      console.log(error.message);
    }
  };


  return (
    <div className={style.searchContainer}>
      {result?.map((list, index) => (
        <MovieCard movie={list} key={index} />
      ))}
    </div>
  );
};

export default SearchPage;
