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
        // Находим кота по id
        const foundCat = catsData.find(c => c.id === Number(id));
        if (foundCat) {
            setCat(foundCat);
        } else {
            // Если кота нет — перенаправляем на 404
            navigate('/404', { replace: true });
        }
        setLoading(false);
    }, [id, navigate]);

    if (loading) return <div>Загрузка...</div>;
    if (!cat) return null;

    return (
        <div className="cat-page">
            <div className="cat-page__gallery">
                <img src={cat.photo} alt={cat.name} />
            </div>
            <div className="cat-page__info">
                <h1>{cat.name}</h1>
                <p className="breed">Порода: {cat.breed}</p>
                <p className="color">Окрас: {cat.color}</p>
                <p className="age">Возраст: {cat.age} года</p>
                <div className="description">
                    <h2>О характере:</h2>
                    <p>{cat.description}</p>
                </div>
            </div>
        </div>
    );
};

export default CatPage;