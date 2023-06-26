import React from 'react';
import ph from '../../images/placeholder.png'
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import style from './ActorPage.module.css';


const ActorPage = () => {

  const { id } = useParams()
  const { data } = useFetch(`person/${id}`);

  // const imageURL = `https://image.tmdb.org/t/p/w500/${data?.profile_path}`;

  const imageURL = data?.profile_path
    ? `https://image.tmdb.org/t/p/w500/${data?.profile_path}`
    : ph;

  return (
    // <div>{data.name}</div>
    <div className={style.container}>
      <h1>{data.name}</h1>
      <img src={imageURL} alt="" className={style.imagePerson} />
      <p><strong>Born:</strong> {data.place_of_birth} {data.birthday}</p>
      <br />
      <p>{data.biography}</p>
    </div>
  )
};

export default ActorPage;
