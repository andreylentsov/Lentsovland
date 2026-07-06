import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import type { Kitten } from '../types';
import kittensData from '../data/kittens.json';

const KittensPage = () => {
    const [selectedGender, setSelectedGender] = useState<'all' | 'male' | 'female'>('all');
    const [selectedColor, setSelectedColor] = useState<string>('all');
    const [showOnlyAvailable, setShowOnlyAvailable] = useState<boolean>(true);
    const [selectedLitter, setSelectedLitter] = useState<string>('all');

    // Получаем уникальные цвета для фильтра
    const colors = useMemo(() => {
        const uniqueColors = new Set(kittensData.map(k => k.color));
        return ['all', ...Array.from(uniqueColors)];
    }, []);

    // Получаем уникальные пометы для фильтра
    const litters = useMemo(() => {
        const uniqueLitters = new Set(kittensData.map(k => k.litter));
        return ['all', ...Array.from(uniqueLitters)];
    }, []);

    // Группировка котят по пометам
    const groupedKittens = useMemo(() => {
        const filtered = kittensData.filter(kitten => {
            if (selectedGender !== 'all' && kitten.gender !== selectedGender) return false;
            if (selectedColor !== 'all' && kitten.color !== selectedColor) return false;
            if (selectedLitter !== 'all' && kitten.litter !== selectedLitter) return false;
            if (showOnlyAvailable && kitten.isBooked) return false;
            return true;
        });

        // Группируем по пометам
        const groups: { [key: string]: Kitten[] } = {};
        filtered.forEach(kitten => {
            if (!groups[kitten.litter]) {
                groups[kitten.litter] = [];
            }
            groups[kitten.litter].push(kitten);
        });
        return groups;
    }, [selectedGender, selectedColor, selectedLitter, showOnlyAvailable]);

    const totalKittens = kittensData.length;
    const availableCount = kittensData.filter(k => !k.isBooked).length;
    const bookedCount = kittensData.filter(k => k.isBooked).length;
    const litterCount = Object.keys(groupedKittens).length;

    return (
        <div className="kittens-page">
            <div className="page-header">
                <div className="container">
                    <h1>Наши котята</h1>
                    <p>Выберите своего будущего любимца</p>
                </div>
            </div>

            <div className="container">
                {/* Статистика */}
                <div className="kittens-stats">
                    <div className="stat-card">
                        <span className="stat-value">{totalKittens}</span>
                        <span className="stat-label">всего котят</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-value">{availableCount}</span>
                        <span className="stat-label">доступны</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-value">{bookedCount}</span>
                        <span className="stat-label">забронированы</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-value">{litterCount}</span>
                        <span className="stat-label">пометов</span>
                    </div>
                </div>

                <div className="kittens-layout">
                    {/* Боковая панель с фильтрами */}
                    <aside className="filters-sidebar">
                        <h3>Фильтры</h3>
                        
                        <div className="filter-group">
                            <label className="filter-label">Пол</label>
                            <div className="filter-buttons">
                                <button
                                    className={`filter-btn ${selectedGender === 'all' ? 'active' : ''}`}
                                    onClick={() => setSelectedGender('all')}
                                >
                                    Все
                                </button>
                                <button
                                    className={`filter-btn ${selectedGender === 'male' ? 'active' : ''}`}
                                    onClick={() => setSelectedGender('male')}
                                >
                                    ♂ Мальчики
                                </button>
                                <button
                                    className={`filter-btn ${selectedGender === 'female' ? 'active' : ''}`}
                                    onClick={() => setSelectedGender('female')}
                                >
                                    ♀ Девочки
                                </button>
                            </div>
                        </div>

                        <div className="filter-group">
                            <label className="filter-label">Окрас</label>
                            <select 
                                value={selectedColor} 
                                onChange={(e) => setSelectedColor(e.target.value)}
                                className="filter-select"
                            >
                                {colors.map(color => (
                                    <option key={color} value={color}>
                                        {color === 'all' ? 'Все окрасы' : color}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="filter-group">
                            <label className="filter-label">Помет</label>
                            <select 
                                value={selectedLitter} 
                                onChange={(e) => setSelectedLitter(e.target.value)}
                                className="filter-select"
                            >
                                {litters.map(litter => (
                                    <option key={litter} value={litter}>
                                        {litter === 'all' ? 'Все пометы' : litter}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="filter-group">
                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    checked={showOnlyAvailable}
                                    onChange={(e) => setShowOnlyAvailable(e.target.checked)}
                                />
                                Только доступные
                            </label>
                        </div>

                        {(selectedGender !== 'all' || selectedColor !== 'all' || selectedLitter !== 'all' || !showOnlyAvailable) && (
                            <button 
                                className="reset-filters"
                                onClick={() => {
                                    setSelectedGender('all');
                                    setSelectedColor('all');
                                    setSelectedLitter('all');
                                    setShowOnlyAvailable(true);
                                }}
                            >
                                Сбросить фильтры
                            </button>
                        )}
                    </aside>

                    {/* Список котят по пометам */}
                    <div className="kittens-content">
                        {Object.keys(groupedKittens).length === 0 ? (
                            <div className="no-results">
                                <p>К сожалению, котят по таким параметрам не найдено</p>
                                <button 
                                    className="outline-button"
                                    onClick={() => {
                                        setSelectedGender('all');
                                        setSelectedColor('all');
                                        setSelectedLitter('all');
                                        setShowOnlyAvailable(true);
                                    }}
                                >
                                    Сбросить фильтры
                                </button>
                            </div>
                        ) : (
                            <div className="litters-container">
                                {Object.entries(groupedKittens).map(([litterName, kittens]) => (
                                    <div key={litterName} className="litter-group">
                                        <div className="litter-header">
                                            <h2 className="litter-title">Помет «{litterName}»</h2>
                                            <span className="litter-count">{kittens.length} котенка</span>
                                        </div>
                                        <div className="kittens-grid">
                                            {kittens.map(kitten => (
                                                <div key={kitten.id} className="kitten-card">
                                                    <div className="kitten-card__badge">
                                                        {kitten.isBooked ? (
                                                            <span className="badge-booked">Забронирован</span>
                                                        ) : (
                                                            <span className="badge-available">Доступен</span>
                                                        )}
                                                    </div>
                                                    <Link to={`/kittens/${kitten.id}`} className="kitten-card__link">
                                                        <div className="kitten-card__image-wrapper">
                                                            <img 
                                                                src={kitten.photo} 
                                                                alt={kitten.name}
                                                                className="kitten-card__image"
                                                                loading="lazy"
                                                            />
                                                        </div>
                                                        <div className="kitten-card__content">
                                                            <div className="kitten-card__header">
                                                                <h3>{kitten.name}</h3>
                                                                <span className="kitten-card__gender">
                                                                    {kitten.gender === 'male' ? '♂' : '♀'}
                                                                </span>
                                                            </div>
                                                            <p className="kitten-card__breed">{kitten.breed}</p>
                                                            <p className="kitten-card__color">{kitten.color}</p>
                                                            <div className="kitten-details">
                                                                <p><strong>Дата рождения:</strong> {kitten.birthDate}</p>
                                                                <p><strong>Родители:</strong> {kitten.parents?.father} & {kitten.parents?.mother}</p>
                                                            </div>
                                                            <div className="kitten-card__footer">
                                                                <span className="card-link">Подробнее →</span>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Информация о покупке */}
                <section className="buy-info">
                    <h2>Как приобрести котенка?</h2>
                    <div className="buy-steps">
                        <div className="step">
                            <div className="step-number">1</div>
                            <div className="step-content">
                                <h3>Выберите котенка</h3>
                                <p>Познакомьтесь с нашими котятами на сайте или приезжайте в гости</p>
                            </div>
                        </div>
                        <div className="step">
                            <div className="step-number">2</div>
                            <div className="step-content">
                                <h3>Свяжитесь с нами</h3>
                                <p>Обсудите детали, задайте вопросы о характере и здоровье котенка</p>
                            </div>
                        </div>
                        <div className="step">
                            <div className="step-number">3</div>
                            <div className="step-content">
                                <h3>Заключите договор</h3>
                                <p>Мы предоставим договор купли-продажи и все необходимые документы</p>
                            </div>
                        </div>
                        <div className="step">
                            <div className="step-number">4</div>
                            <div className="step-content">
                                <h3>Заберите котенка</h3>
                                <p>Котенок переедет к вам после полной оплаты и подготовки дома</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default KittensPage;