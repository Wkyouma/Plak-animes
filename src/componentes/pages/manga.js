import Searchinput from "../eventos/searchinput";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./animes.module.css";
import Button from "../layout/button";

function Manga() {
  const [text, setText] = useState("");
  const api = "https://kitsu.io/api/edge/";
  const [info, setInfo] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate();

  const fetchAnime = (query, pageOffset = 0) => {
    const url = query
      ? `${api}manga?filter[text]=${query}&page[limit]=20&page[offset]=${pageOffset}&sort=popularityRank`
      : `${api}manga?page[limit]=20&page[offset]=${pageOffset}&sort=popularityRank`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.data.length > 0) {
          setInfo((prevInfo) => [...prevInfo, ...data.data]);
          setHasMore(true);
        } else {
          setHasMore(false);
        }
      })
      .catch((error) => {
        console.error("Erro ao buscar os dados:", error);
      });
  };

  useEffect(() => {
    fetchAnime(text, page * 20);
  }, [text, page]);

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

      {info.length >0 && (
        <ul className={styles.Anime_list}>
          {info.map((manga) => (
            <li key={manga.id} onClick={() => handleImageClicks(manga)}>
              <img
                src={manga.attributes.posterImage.small}
                alt={manga.attributes.canonicalTitle}
              />
              {manga.attributes.canonicalTitle}
            </li>
          ))}
        </ul>
      )}

      <div className={styles.positionButtonMore}>
        {hasMore && <Button onClick={loadMore}>Carregar mais</Button>}
      </div>
    </div>
  );
}

export default Manga;
