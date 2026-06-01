import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="not-found-page">
            <div className="container">
                <div className="not-found-content">
                    <div className="not-found-code">404</div>
                    <h1>Страница не найдена</h1>
                    <p>
                        К сожалению, страница, которую вы ищете, не существует или была перемещена.
                    </p>
                    <p className="cat-message">
                        Возможно, котенок убежал играть в другую комнату? 🐱
                    </p>
                    <div className="not-found-actions">
                        <Link to="/" className="cta-button">
                            На главную
                        </Link>
                        <Link to="/kittens" className="outline-button">
                            Посмотреть котят
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
