import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import type { Kitten } from '../types';
import kittensData from '../data/kittens.json';

const KittensPage = () => {
    const [selectedGender, setSelectedGender] = useState<'all' | 'male' | 'female'>('all');
    const [selectedColor, setSelectedColor] = useState<string>('all');
    const [priceRange, setPriceRange] = useState<number>(100000);
    const [showOnlyAvailable, setShowOnlyAvailable] = useState<boolean>(true);

    // Получаем уникальные цвета для фильтра
    const colors = useMemo(() => {
        const uniqueColors = new Set(kittensData.map(k => k.color));
        return ['all', ...Array.from(uniqueColors)];
    }, []);

    // Фильтрация котят
    const filteredKittens = useMemo(() => {
        let filtered = [...kittensData];

        // Фильтр по полу
        if (selectedGender !== 'all') {
            filtered = filtered.filter(k => k.gender === selectedGender);
        }

        // Фильтр по цвету
        if (selectedColor !== 'all') {
            filtered = filtered.filter(k => k.color === selectedColor);
        }

        // Фильтр по цене
        filtered = filtered.filter(k => k.price <= priceRange);

        // Фильтр по доступности
        if (showOnlyAvailable) {
            filtered = filtered.filter(k => !k.isBooked);
        }

        return filtered;
    }, [selectedGender, selectedColor, priceRange, showOnlyAvailable]);

    const availableCount = kittensData.filter(k => !k.isBooked).length;
    const bookedCount = kittensData.filter(k => k.isBooked).length;

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
                        <span className="stat-value">{availableCount}</span>
                        <span className="stat-label">доступны</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-value">{bookedCount}</span>
                        <span className="stat-label">забронированы</span>
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
                                    Мальчики
                                </button>
                                <button
                                    className={`filter-btn ${selectedGender === 'female' ? 'active' : ''}`}
                                    onClick={() => setSelectedGender('female')}
                                >
                                    Девочки
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
                            <label className="filter-label">
                                Цена до {priceRange.toLocaleString()} ₽
                            </label>
                            <input
                                type="range"
                                min="10000"
                                max="100000"
                                step="5000"
                                value={priceRange}
                                onChange={(e) => setPriceRange(Number(e.target.value))}
                                className="price-slider"
                            />
                            <div className="price-range-labels">
                                <span>10 000 ₽</span>
                                <span>100 000 ₽</span>
                            </div>
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

                        {(selectedGender !== 'all' || selectedColor !== 'all' || priceRange < 100000 || showOnlyAvailable) && (
                            <button 
                                className="reset-filters"
                                onClick={() => {
                                    setSelectedGender('all');
                                    setSelectedColor('all');
                                    setPriceRange(100000);
                                    setShowOnlyAvailable(true);
                                }}
                            >
                                Сбросить фильтры
                            </button>
                        )}
                    </aside>

                    {/* Список котят */}
                    <div className="kittens-content">
                        {filteredKittens.length === 0 ? (
                            <div className="no-results">
                                <p>К сожалению, котят по таким параметрам не найдено</p>
                                <button 
                                    className="outline-button"
                                    onClick={() => {
                                        setSelectedGender('all');
                                        setSelectedColor('all');
                                        setPriceRange(100000);
                                        setShowOnlyAvailable(true);
                                    }}
                                >
                                    Сбросить фильтры
                                </button>
                            </div>
                        ) : (
                            <div className="kittens-grid">
                                {filteredKittens.map(kitten => (
                                    <div key={kitten.id} className="kitten-card">
                                        <div className="kitten-card__badge">
                                            {kitten.isBooked ? (
                                                <span className="badge-booked">Забронирован</span>
                                            ) : (
                                                <span className="badge-available">Доступен</span>
                                            )}
                                        </div>
                                        <img 
                                            src={kitten.photo} 
                                            alt={kitten.name}
                                            className="kitten-card__image"
                                        />
                                        <div className="kitten-card__content">
                                            <h3>{kitten.name}</h3>
                                            <div className="kitten-details">
                                                <p><strong>Пол:</strong> {kitten.gender === 'male' ? 'Мальчик' : 'Девочка'}</p>
                                                <p><strong>Окрас:</strong> {kitten.color}</p>
                                                <p><strong>Дата рождения:</strong> {kitten.birthDate}</p>
                                                <p><strong>Родители:</strong> {kitten.parents?.father} & {kitten.parents?.mother}</p>
                                            </div>
                                            <div className="kitten-card__footer">
                                                <span className="price">{kitten.price.toLocaleString()} ₽</span>
                                                <Link 
                                                    to={`/kittens/${kitten.id}`} 
                                                    className="card-link"
                                                >
                                                    Подробнее
                                                </Link>
                                            </div>
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