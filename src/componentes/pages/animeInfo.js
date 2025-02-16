import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './info.module.css';
import Button from '../layout/button';

function AnimeInfo() {
  const navigate = useNavigate();
  const location = useLocation();
  const anime = location.state;

  return (
    <div className={styles.info_container}>
      <div 
        className={styles.header_image}
        style={{
          backgroundImage: `url(${anime.attributes.coverImage?.large || anime.attributes.posterImage.large})`
        }}
      >
        <Button onClick={() => navigate('/animes')}>
          Voltar
        </Button>
      </div>

      <div className={styles.content}>
        <div className={styles.poster}>
          <img
            src={anime.attributes.posterImage.large}
            alt={anime.attributes.canonicalTitle}
          />
        </div>

        <div className={styles.details}>
          <h1>{anime.attributes.canonicalTitle}</h1>
          
          <div className={styles.meta_info}>
            <span>Lançamento: {anime.attributes.startDate}</span>
            <span>Episódios: {anime.attributes.episodeCount}</span>
            <span>Avaliação: {anime.attributes.averageRating}%</span>
          </div>

          <p className={styles.synopsis}>{anime.attributes.synopsis}</p>

          {anime.attributes.youtubeVideoId && (
            <div className={styles.video_container}>
              <iframe
                src={`https://www.youtube.com/embed/${anime.attributes.youtubeVideoId}`}
                title="Trailer"
                allowFullScreen
              />
            </div>
          )}
        </div>

        <div className={styles.stats_container}>
          <h4>Informações</h4>
          <p>Status: {anime.attributes.status}</p>
          <p>Classificação: {anime.attributes.ageRating}</p>
          <p>Popularidade: #{anime.attributes.popularityRank}</p>
        </div>
      </div>
    </div>
  );
}

export default AnimeInfo;