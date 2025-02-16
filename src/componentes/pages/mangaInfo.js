import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './info.module.css';
import Button from '../layout/button';

function MangaInfo() {
  const navigate = useNavigate();
  const location = useLocation();
  const manga = location.state;

  return (
    <div className={styles.info_container}>
      <div 
        className={styles.header_image}
        style={{
          backgroundImage: `url(${manga.attributes.coverImage?.large || manga.attributes.posterImage.large})`
        }}
      >
        <Button onClick={() => navigate('/manga')} className={styles.back_button}>
          Voltar
        </Button>
      </div>

      <div className={styles.content}>
        <div className={styles.poster}>
          <img
            src={manga.attributes.posterImage.large}
            alt={manga.attributes.canonicalTitle}
          />
        </div>

        <div className={styles.details}>
          <h1>{manga.attributes.canonicalTitle}</h1>
          
          <div className={styles.meta_info}>
            <span>Lançamento: {manga.attributes.startDate}</span>
            <span>Capítulos: {manga.attributes.chapterCount}</span>
            <span>Avaliação: {manga.attributes.averageRating}%</span>
          </div>

          <p className={styles.synopsis}>{manga.attributes.synopsis}</p>
        </div>

        <div className={styles.stats_container}>
          <h4>Informações</h4>
          <p>Status: {manga.attributes.status}</p>
          <p>Classificação: {manga.attributes.ageRating}</p>
          <p>Popularidade: #{manga.attributes.popularityRank}</p>
        </div>
      </div>
    </div>
  );
}

export default MangaInfo;