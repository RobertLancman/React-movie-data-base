import React from 'react';
import ph from '../../images/placeholder.png';
import styles from './ActorCard.module.css';
import { Link } from 'react-router-dom';

const ActorCard = ({ actor }) => {

  const image = actor?.profile_path
    ? `https://image.tmdb.org/t/p/w500/${actor?.profile_path}`
    : ph;

  return (
    <Link className={styles.actor} to={`/actor/${actor.id}`} >
      <img src={image} alt={actor.name} />
      <h3>{actor.name}</h3>
      <span>{actor.character}</span>
    </Link >
  );
};

export default ActorCard;
