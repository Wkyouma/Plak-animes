import Searchinput from "../eventos/searchinput";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./animes.module.css";
import Button from "../layout/button";

function NewProject() {
  const [text, setText] = useState("");
  const api = "https://kitsu.io/api/edge/";
  const [info, setInfo] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate();

  const fetchAnime = async (query, pageOffset = 0) => {
    try {
      const url = query
        ? `${api}anime?filter[text]=${query}&page[limit]=20&page[offset]=${pageOffset}&sort=popularityRank`
        : `${api}anime?page[limit]=20&page[offset]=${pageOffset}&sort=popularityRank`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.data.length > 0) {
        if (pageOffset === 0) {
          // Se for a primeira página, substitui completamente o estado
          setInfo(data.data);
        } else {
          // Se não, adiciona ao estado existente, evitando duplicatas
          setInfo(prevInfo => {
            const newItems = data.data.filter(newItem => 
              !prevInfo.some(existingItem => existingItem.id === newItem.id)
            );
            return [...prevInfo, ...newItems];
          });
        }
        setHasMore(data.data.length === 20);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setPage(0);
      fetchAnime(text, 0);
    }, 300); // Debounce de 300ms

    return () => clearTimeout(timeoutId);
  }, [text]);

  useEffect(() => {
    if (page > 0) {
      fetchAnime(text, page * 20);
    }
  }, [page]);

  const handleImageClicks = (anime) => {
    navigate("/AnimeInfo", { state: anime });
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className={styles.div}>
      <div className={styles.search}>
        <Searchinput value={text} onChange={(str) => setText(str)} />
      </div>

      {info.length > 0 && (
        <ul className={styles.Anime_list}>
          {info.map((anime) => (
            <li key={anime.id} onClick={() => handleImageClicks(anime)}>
              <img
                src={anime.attributes.posterImage.small}
                alt={anime.attributes.canonicalTitle}
              />
              {anime.attributes.canonicalTitle}
            </li>
          ))}
        </ul>
      )}

      <div className={styles.positionButtonMore}>
        {hasMore && (
          <Button onClick={loadMore}>Carregar mais</Button>
        )}
      </div>
    </div>
  );
}

export default NewProject;
