import { useState, useEffect, useMemo } from 'react';
import CatCard from '../components/common/CatCard';
import type { Cat } from '../types';
import catsData from '../data/cats.json';

const CatsPage = () => {
    const [cats, setCats] = useState<Cat[]>([]);
    const [loading, setLoading] = useState(true);
    const [filterGender, setFilterGender] = useState<'all' | 'male' | 'female'>('all');

    useEffect(() => {
        // Имитация загрузки
        setTimeout(() => {
            setCats(catsData);
            setLoading(false);
        }, 500);
    }, []);

    // Фильтрация по полу
    const filteredCats = useMemo(() => {
        if (filterGender === 'all') return cats;
        return cats.filter(cat => cat.gender === filterGender);
    }, [cats, filterGender]);

    // Статистика
    const maleCount = cats.filter(c => c.gender === 'male').length;
    const femaleCount = cats.filter(c => c.gender === 'female').length;

    if (loading) {
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
                <p>Загрузка...</p>
            </div>
        );
    }

    return (
        <div className="cats-page">
            <div className="page-header">
                <div className="container">
                    <h1>Наши производители</h1>
                    <p>Лучшие представители породы британская короткошерстная</p>
                </div>
            </div>

            <div className="container">
                {/* Статистика */}
                <div className="cats-stats">
                    <div className="stat-card">
                        <span className="stat-value">{cats.length}</span>
                        <span className="stat-label">всего производителей</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-value">♂ {maleCount}</span>
                        <span className="stat-label">котов</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-value">♀ {femaleCount}</span>
                        <span className="stat-label">кошек</span>
                    </div>
                </div>

                {/* Фильтры */}
                <div className="cats-filters">
                    <div className="filter-group">
                        <label className="filter-label">Пол:</label>
                        <div className="filter-buttons">
                            <button
                                className={`filter-btn ${filterGender === 'all' ? 'active' : ''}`}
                                onClick={() => setFilterGender('all')}
                            >
                                Все
                            </button>
                            <button
                                className={`filter-btn ${filterGender === 'male' ? 'active' : ''}`}
                                onClick={() => setFilterGender('male')}
                            >
                                ♂ Коты
                            </button>
                            <button
                                className={`filter-btn ${filterGender === 'female' ? 'active' : ''}`}
                                onClick={() => setFilterGender('female')}
                            >
                                ♀ Кошки
                            </button>
                        </div>
                    </div>
                </div>

                {/* Список котов */}
                {filteredCats.length === 0 ? (
                    <div className="no-results">
                        <p>Нет производителей с выбранным полом</p>
                    </div>
                ) : (
                    <div className="cats-grid">
                        {filteredCats.map(cat => (
                            <CatCard key={cat.id} cat={cat} />
                        ))}
                    </div>
                )}

                {/* Информационный блок */}
                <section className="breed-info">
                    <h2>О наших производителях</h2>
                    <div className="breed-info__content">
                        <p>
                            Все наши коты и кошки имеют документы, подтверждающие их 
                            происхождение и выставочные титулы. Мы тщательно отбираем 
                            производителей, чтобы сохранять и улучшать породные качества 
                            британских короткошерстных кошек.
                        </p>
                        <p>
                            <strong>Здоровье:</strong> Все производители регулярно проходят 
                            ветеринарные осмотры, имеют актуальные прививки и тесты на 
                            генетические заболевания.
                        </p>
                        <p>
                            <strong>Характер:</strong> Мы ценим не только экстерьер, но и 
                            характер наших питомцев. Все они обладают дружелюбным, 
                            уравновешенным нравом, что важно для создания здорового 
                            потомства.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CatsPage;