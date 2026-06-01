import { useState, useEffect } from 'react';
import CatCard from '../components/common/CatCard';
import type { Cat } from '../types';
import catsData from '../data/cats.json';

const CatsPage = () => {
    const [cats, setCats] = useState<Cat[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Имитация загрузки (потом заменим на fetch)
        setTimeout(() => {
            setCats(catsData);
            setLoading(false);
        }, 500);
    }, []);

    if (loading) {
        return <div className="loading">Загрузка...</div>;
    }

    return (
        <div className="cats-page">
            <h1>Наши кошки-производители</h1>
            <div className="cats-grid">
                {cats.map(cat => (
                    <CatCard key={cat.id} cat={cat} />
                ))}
            </div>
        </div>
    );
};

export default CatsPage;
