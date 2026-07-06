import { Link } from 'react-router-dom';
import type { Cat, Kitten } from '../types';
import catsData from '../data/cats.json';
import kittensData from '../data/kittens.json';

const HomePage = () => {
    // Берем первых 3 котов и 3 котят для отображения на главной
    const featuredCats = catsData.slice(0, 3);
    const featuredKittens = kittensData.slice(0, 3);

    return (
        <div className="home-page">
            {/* Hero секция - исправлено центрирование */}
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <h1>Питомник британских кошек</h1>
                        <p className="hero-subtitle">
                            Здоровые и красивые котята с родословной
                        </p>
                        <Link to="/kittens" className="cta-button">
                            Выбрать котенка
                        </Link>
                    </div>
                    <div className="hero-decoration">
                        <div className="hero-cat-silhouette"></div>
                    </div>
                </div>
            </section>

            {/* О питомнике кратко */}
            <section className="about-short">
                <div className="container">
                    <h2>О нашем питомнике</h2>
                    <div className="about-short__content">
                        <div className="about-short__text">
                            <p>
                                Наш питомник занимается разведением британских кошек 
                                более 10 лет. Все наши питомцы имеют документы, 
                                привиты и полностью здоровы.
                            </p>
                            <p>
                                Мы гордимся каждым котенком и подбираем для них 
                                только лучшие семьи.
                            </p>
                            <Link to="/about" className="link-button">
                                Подробнее о нас →
                            </Link>
                        </div>
                        <div className="about-short__stats">
                            <div className="stat">
                                <span className="stat-number">10+</span>
                                <span className="stat-label">лет опыта</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">50+</span>
                                <span className="stat-label">счастливых котят</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">15</span>
                                <span className="stat-label">наград выставок</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Наши производители - исправлены фото */}
<section className="featured-cats">
    <div className="container">
        <h2>Наши производители</h2>
        <div className="featured-grid">
            {featuredCats.map(cat => (
                <div key={cat.id} className="featured-card">
                    <Link to={`/cats/${cat.id}`} className="featured-card__link">
                        <div className="featured-card__image-wrapper">
                            <img 
                                src={cat.photo} 
                                alt={cat.name}
                                className="featured-card__image"
                                loading="lazy"
                                onError={(e) => {
                                    // Запасной вариант при ошибке загрузки
                                    const target = e.target as HTMLImageElement;
                                    target.src = '/images/placeholder.jpg';
                                }}
                            />
                        </div>
                        <div className="featured-card__content">
                            <h3>{cat.name}</h3>
                            <p>{cat.breed}, {cat.color}</p>
                            <span className="card-link">Подробнее →</span>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
        <div className="section-footer">
            <Link to="/cats" className="outline-button">
                Смотреть всех производителей
            </Link>
        </div>
    </div>
</section>

            {/* Доступные котята */}
            <section className="featured-kittens">
                <div className="container">
                    <h2>Котята в поиске семьи</h2>
                    <div className="featured-grid">
                        {featuredKittens.map(kitten => (
                            <div key={kitten.id} className="featured-card">
                                <Link to={`/kittens/${kitten.id}`} className="featured-card__link">
                                    <div className="featured-card__image-wrapper">
                                        <div className="featured-card__badge">
                                            {kitten.isBooked ? 'Забронирован' : 'Доступен'}
                                        </div>
                                        <img 
                                            src={kitten.photo} 
                                            alt={kitten.name}
                                            className="featured-card__image"
                                        />
                                    </div>
                                    <div className="featured-card__content">
                                        <h3>{kitten.name}</h3>
                                        <p>{kitten.breed}, {kitten.color}</p>
                                        <p className="price">{kitten.price.toLocaleString()} ₽</p>
                                        <span className="card-link">Подробнее →</span>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="section-footer">
                        <Link to="/kittens" className="cta-button">
                            Выбрать котенка
                        </Link>
                    </div>
                </div>
            </section>

            {/* Почему выбирают нас */}
            <section className="advantages">
                <div className="container">
                    <h2>Почему выбирают нас</h2>
                    <div className="advantages-grid">
                        <div className="advantage">
                            <div className="advantage-icon">📄</div>
                            <h3>Документы</h3>
                            <p>Все котята имеют метрики и родословные</p>
                        </div>
                        <div className="advantage">
                            <div className="advantage-icon">💉</div>
                            <h3>Прививки</h3>
                            <p>Своевременная вакцинация и обработка</p>
                        </div>
                        <div className="advantage">
                            <div className="advantage-icon">🏠</div>
                            <h3>Адаптация</h3>
                            <p>Помогаем котенку привыкнуть к новому дому</p>
                        </div>
                        <div className="advantage">
                            <div className="advantage-icon">💚</div>
                            <h3>Поддержка</h3>
                            <p>Консультируем на всех этапах</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Отзывы */}
            <section className="reviews">
                <div className="container">
                    <h2>Отзывы наших владельцев</h2>
                    <div className="reviews-grid">
                        <div className="review">
                            <div className="review__text">
                                "Спасибо большое за нашего любимца! 
                                Котенок здоровый, социализированный, 
                                очень ласковый. Процесс покупки был 
                                максимально прозрачным."
                            </div>
                            <div className="review__author">
                                <strong>Анна</strong>
                                <span>взяла котенка Марселя</span>
                            </div>
                        </div>
                        <div className="review">
                            <div className="review__text">
                                "Питомник очень понравился! 
                                Все кошки ухоженные, условия отличные. 
                                Нам дали все документы и подробно 
                                рассказали о породе."
                            </div>
                            <div className="review__author">
                                <strong>Дмитрий</strong>
                                <span>взял котенка Симбу</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA секция */}
            <section className="cta-section">
                <div className="container">
                    <h2>Готовы подарить любовь?</h2>
                    <p>Приезжайте знакомиться с нашими котами и котятами</p>
                    <Link to="/contacts" className="cta-button inverse">
                        Связаться с нами
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default HomePage;