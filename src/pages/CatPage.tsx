import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import type { Cat } from '../types';
import catsData from '../data/cats.json';

const CatPage = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [cat, setCat] = useState<Cat | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const foundCat = catsData.find(c => c.id === Number(id));
        if (foundCat) {
            setCat(foundCat);
        } else {
            navigate('/404', { replace: true });
        }
        setLoading(false);
    }, [id, navigate]);

    if (loading) {
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
                <p>Загрузка...</p>
            </div>
        );
    }
    
    if (!cat) return null;

    const getGenderIcon = (gender: string) => gender === 'male' ? '♂' : '♀';
    const getGenderText = (gender: string) => gender === 'male' ? 'Кот' : 'Кошка';
    const getGenderColor = (gender: string) => gender === 'male' ? '#3498db' : '#e91e63';

    return (
        <div className="cat-page">
            <div className="container">
                <div className="cat-page__gallery">
                    <img src={cat.photo} alt={cat.name} />
                </div>
                <div className="cat-page__info">
                    <div className="cat-page__header">
                        <h1>{cat.name}</h1>
                        <span 
                            className="cat-page__gender"
                            style={{ color: getGenderColor(cat.gender) }}
                        >
                            {getGenderIcon(cat.gender)} {getGenderText(cat.gender)}
                        </span>
                    </div>
                    
                    {cat.title && (
                        <div className="cat-page__title">
                            🏆 {cat.title}
                        </div>
                    )}
                    
                    <div className="cat-page__details">
                        <p><strong>Порода:</strong> {cat.breed}</p>
                        <p><strong>Окрас:</strong> {cat.color}</p>
                        <p><strong>Возраст:</strong> {cat.age} года</p>
                        {cat.character && (
                            <p><strong>Характер:</strong> {cat.character}</p>
                        )}
                    </div>
                    
                    <div className="description">
                        <h2>О питомце</h2>
                        <p>{cat.description}</p>
                    </div>
                    
                    <div className="cat-page__actions">
                        <a href="/kittens" className="cta-button">
                            Посмотреть котят
                        </a>
                        <a href="/contacts" className="outline-button">
                            Связаться с нами
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CatPage;