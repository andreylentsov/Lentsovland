import { Link } from 'react-router-dom';
import type { Cat } from '../../types';

interface CatCardProps {
    cat: Cat;
    showPrice?: boolean;
    price?: number;
    variant?: 'default' | 'compact';  // Добавляем вариант отображения
}

const CatCard = ({ cat, showPrice = false, price, variant = 'default' }: CatCardProps) => {
    const getGenderIcon = (gender: string) => {
        return gender === 'male' ? '♂' : '♀';
    };

    const getGenderColor = (gender: string) => {
        return gender === 'male' ? '#3498db' : '#e91e63';
    };

    return (
        <div className={`cat-card cat-card--${variant}`}>
            <Link to={`/cats/${cat.id}`} className="cat-card__link">
                <div className="cat-card__image-wrapper">
                    <img 
                        src={cat.photo} 
                        alt={cat.name}
                        className="cat-card__image"
                        loading="lazy"
                    />
                    {cat.title && (
                        <div className="cat-card__title-badge">
                            🏆 {cat.title}
                        </div>
                    )}
                </div>
                <div className="cat-card__content">
                    <div className="cat-card__header">
                        <h3>{cat.name}</h3>
                        <span 
                            className="cat-card__gender"
                            style={{ color: getGenderColor(cat.gender) }}
                        >
                            {getGenderIcon(cat.gender)}
                        </span>
                    </div>
                    <p className="cat-card__breed">{cat.breed}</p>
                    <p className="cat-card__color">{cat.color}</p>
                    <p className="cat-card__age">{cat.age} года</p>
                    {cat.character && variant === 'default' && (
                        <p className="cat-card__character">❤️ {cat.character}</p>
                    )}
                    {showPrice && price && (
                        <p className="cat-card__price">{price.toLocaleString()} ₽</p>
                    )}
                    <span className="cat-card__link-text">
                        Подробнее →
                    </span>
                </div>
            </Link>
        </div>
    );
};

export default CatCard;