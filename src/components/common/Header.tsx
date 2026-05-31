import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    // Закрываем меню при смене страницы
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    // Отслеживаем скролл для изменения стиля шапки
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Закрываем меню при клике на ссылку (для мобильных)
    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
            <div className="container">
                <div className="header__inner">
                    {/* Логотип */}
                    <Link to="/" className="logo" onClick={handleLinkClick}>
                        <div className="logo__icon">🐱</div>
                        <div className="logo__text">
                            <span className="logo__title">LentsovLand</span>
                            <span className="logo__subtitle">Питомник британских кошек</span>
                        </div>
                    </Link>

                    {/* Десктопная навигация */}
                    <nav className="nav nav--desktop">
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => 
                                isActive ? 'nav__link nav__link--active' : 'nav__link'
                            }
                        >
                            Главная
                        </NavLink>
                        <NavLink 
                            to="/about" 
                            className={({ isActive }) => 
                                isActive ? 'nav__link nav__link--active' : 'nav__link'
                            }
                        >
                            О питомнике
                        </NavLink>
                        <NavLink 
                            to="/cats" 
                            className={({ isActive }) => 
                                isActive ? 'nav__link nav__link--active' : 'nav__link'
                            }
                        >
                            Наши коты
                        </NavLink>
                        <NavLink 
                            to="/kittens" 
                            className={({ isActive }) => 
                                isActive ? 'nav__link nav__link--active' : 'nav__link'
                            }
                        >
                            Котята
                        </NavLink>
                        <NavLink 
                            to="/contacts" 
                            className={({ isActive }) => 
                                isActive ? 'nav__link nav__link--active' : 'nav__link'
                            }
                        >
                            Контакты
                        </NavLink>
                    </nav>

                    {/* Контактная информация */}
                    <div className="header__contact">
                        <a href="tel:+79123456789" className="header__phone">
                            <span className="header__phone-icon">📞</span>
                            <span>+7 (991) 118-30-92</span>
                        </a>
                    </div>

                    {/* Бургер-меню (мобильная версия) */}
                    <button 
                        className={`burger ${isMenuOpen ? 'burger--active' : ''}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Меню"
                    >
                        <span className="burger__line"></span>
                        <span className="burger__line"></span>
                        <span className="burger__line"></span>
                    </button>
                </div>

                {/* Мобильное меню */}
                <div className={`mobile-menu ${isMenuOpen ? 'mobile-menu--open' : ''}`}>
                    <nav className="mobile-menu__nav">
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => 
                                isActive ? 'mobile-menu__link mobile-menu__link--active' : 'mobile-menu__link'
                            }
                            onClick={handleLinkClick}
                        >
                            <span className="mobile-menu__icon">🏠</span>
                            Главная
                        </NavLink>
                        <NavLink 
                            to="/about" 
                            className={({ isActive }) => 
                                isActive ? 'mobile-menu__link mobile-menu__link--active' : 'mobile-menu__link'
                            }
                            onClick={handleLinkClick}
                        >
                            <span className="mobile-menu__icon">📖</span>
                            О питомнике
                        </NavLink>
                        <NavLink 
                            to="/cats" 
                            className={({ isActive }) => 
                                isActive ? 'mobile-menu__link mobile-menu__link--active' : 'mobile-menu__link'
                            }
                            onClick={handleLinkClick}
                        >
                            <span className="mobile-menu__icon">🐱</span>
                            Наши коты
                        </NavLink>
                        <NavLink 
                            to="/kittens" 
                            className={({ isActive }) => 
                                isActive ? 'mobile-menu__link mobile-menu__link--active' : 'mobile-menu__link'
                            }
                            onClick={handleLinkClick}
                        >
                            <span className="mobile-menu__icon">🐾</span>
                            Котята
                        </NavLink>
                        <NavLink 
                            to="/contacts" 
                            className={({ isActive }) => 
                                isActive ? 'mobile-menu__link mobile-menu__link--active' : 'mobile-menu__link'
                            }
                            onClick={handleLinkClick}
                        >
                            <span className="mobile-menu__icon">📞</span>
                            Контакты
                        </NavLink>
                    </nav>
                    <div className="mobile-menu__contact">
                        <a href="tel:+791183092" className="mobile-menu__phone">
                            📞 +7(991)1183092
                        </a>
                        <a href="mailto:info@britcat.ru" className="mobile-menu__email">
                            ✉️ info@britcat.ru
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;