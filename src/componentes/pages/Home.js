import React, { useState, useEffect } from 'react';
import styles from './home.module.css'
import Button from '../layout/button'
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    const [featuredAnimes, setFeaturedAnimes] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchRandomAnimes = async () => {
            try {
                const randomPage = Math.floor(Math.random() * 50);
                const response = await fetch(
                    `https://kitsu.io/api/edge/anime?page[limit]=10&page[offset]=${randomPage * 10}&sort=-average_rating`
                );
                const data = await response.json();
                setFeaturedAnimes(data.data);
            } catch (error) {
                console.error('Erro ao buscar animes:', error);
            }
        };

        fetchRandomAnimes();
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === featuredAnimes.length - 4 ? 0 : prevIndex + 1
            );
        }, 10000);

        return () => clearInterval(timer);
    }, [featuredAnimes.length]);

    const handleAnimeClick = (anime) => {
        navigate('/animeInfo', { state: anime });
    };

    const nextSlide = () => {
        setCurrentIndex(currentIndex === featuredAnimes.length - 4 ? 0 : currentIndex + 1);
    };

    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? featuredAnimes.length - 4 : currentIndex - 1);
    };

    return (
        <div className={styles.home_container}>
            <div className={styles.hero_section}>
                <div className={styles.hero_content}>
                    <h1>Bem-vindo ao <span>Plak</span></h1>
                    <p>Acompanhe, avalie e descubra novos animes e mangás</p>
                    <Button onClick={() => navigate('/login')}>Entrar!</Button>
                </div>
            </div>
            
            <div className={styles.featured_section}>
                <h2>Em Destaque</h2>
                <div className={styles.carousel_container}>
                    <button 
                        className={`${styles.carousel_button} ${styles.prev}`}
                        onClick={prevSlide}
                    >
                        &#8249;
                    </button>
                    
                    <div className={styles.carousel_content}>
                        {featuredAnimes.slice(currentIndex, currentIndex + 4).map((anime, index) => (
                            <div 
                                key={index}
                                className={styles.featured_card}
                                onClick={() => handleAnimeClick(anime)}
                            >
                                <img 
                                    src={anime.attributes.posterImage.large} 
                                    alt={anime.attributes.canonicalTitle}
                                />
                                <div className={styles.card_overlay}>
                                    <h3>{anime.attributes.canonicalTitle}</h3>
                                    <p>Avaliação: {parseFloat(anime.attributes.averageRating).toFixed(1)}%</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button 
                        className={`${styles.carousel_button} ${styles.next}`}
                        onClick={nextSlide}
                    >
                        &#8250;
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;