import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__grid">
                    {/* Колонка 1: О питомнике */}
                    <div className="footer__col">
                        <div className="footer__logo">
                            <span className="footer__logo-icon">🐱</span>
                            <span className="footer__logo-text">Британский Рай</span>
                        </div>
                        <p className="footer__description">
                            Питомник британских кошек с 2014 года. 
                            Здоровые и красивые котята с родословной, 
                            документы и ветеринарный паспорт.
                        </p>
                        <div className="footer__social">
                            <a 
                                href="https://instagram.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="social-link"
                                aria-label="Instagram"
                            >
                                📷
                            </a>
                            <a 
                                href="https://vk.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="social-link"
                                aria-label="VK"
                            >
                                📱
                            </a>
                            <a 
                                href="https://t.me" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="social-link"
                                aria-label="Telegram"
                            >
                                💬
                            </a>
                            <a 
                                href="https://youtube.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="social-link"
                                aria-label="YouTube"
                            >
                                ▶️
                            </a>
                        </div>
                    </div>

                    {/* Колонка 2: Навигация */}
                    <div className="footer__col">
                        <h3 className="footer__title">Навигация</h3>
                        <ul className="footer__nav">
                            <li><Link to="/">Главная</Link></li>
                            <li><Link to="/about">О питомнике</Link></li>
                            <li><Link to="/cats">Наши коты</Link></li>
                            <li><Link to="/kittens">Котята</Link></li>
                            <li><Link to="/contacts">Контакты</Link></li>
                        </ul>
                    </div>

                    {/* Колонка 3: Полезное */}
                    <div className="footer__col">
                        <h3 className="footer__title">Полезное</h3>
                        <ul className="footer__nav">
                            <li><Link to="/delivery">Условия доставки</Link></li>
                            <li><Link to="/contract">Договор купли-продажи</Link></li>
                            <li><Link to="/care">Советы по уходу</Link></li>
                            <li><Link to="/faq">Вопросы и ответы</Link></li>
                            <li><Link to="/reviews">Отзывы</Link></li>
                        </ul>
                    </div>

                    {/* Колонка 4: Контакты */}
                    <div className="footer__col">
                        <h3 className="footer__title">Контакты</h3>
                        <ul className="footer__contacts">
                            <li className="footer__contact-item">
                                <span className="footer__contact-icon">📍</span>
                                <span>г. Москва, ул. Кошачья, 15</span>
                            </li>
                            <li className="footer__contact-item">
                                <span className="footer__contact-icon">📞</span>
                                <a href="tel:+79123456789">+7 (912) 345-67-89</a>
                            </li>
                            <li className="footer__contact-item">
                                <span className="footer__contact-icon">✉️</span>
                                <a href="mailto:info@britcat.ru">info@britcat.ru</a>
                            </li>
                            <li className="footer__contact-item">
                                <span className="footer__contact-icon">🕐</span>
                                <span>Ежедневно: 10:00 - 20:00</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Нижняя часть с копирайтом */}
                <div className="footer__bottom">
                    <p className="footer__copyright">
                        © {currentYear} Питомник "Британский Рай". Все права защищены.
                    </p>
                    <p className="footer__dev">
                        Разработка сайта — 
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            Мамин разработчик
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;