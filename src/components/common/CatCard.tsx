import { Link } from 'react-router-dom';
import type { Cat } from '../../types';

interface CatCardProps {
    cat: Cat;
    showPrice?: boolean;
    price?: number;
}

const CatCard = ({ cat, showPrice = false, price }: CatCardProps) => {
    return (
        <div className="cat-card">
            <Link to={`/cats/${cat.id}`}>
                <img 
                    src={cat.photo} 
                    alt={cat.name}
                    className="cat-card__image"
                />
                <div className="cat-card__content">
                    <h3>{cat.name}</h3>
                    <p>{cat.breed}, {cat.color}</p>
                    <p>{cat.age} года</p>
                    {showPrice && price && (
                        <p className="cat-card__price">{price.toLocaleString()} ₽</p>
                    )}
                </div>
            </Link>
        </div>
    );
};

export default CatCard;