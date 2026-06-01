const AboutPage = () => {
    return (
        <div className="about-page">
            <div className="page-header">
                <div className="container">
                    <h1>О питомнике</h1>
                    <p>История, философия и наши ценности</p>
                </div>
            </div>

            <div className="container">
                {/* Основная информация */}
                <section className="about-main">
                    <div className="about-main__content">
                        <h2>Наша история</h2>
                        <p>
                            Питомник британских кошек был основан в 2014 году. 
                            Все началось с любви к этой удивительной породе — 
                            их плюшевой шерсти, выразительным глазам и 
                            спокойному характеру.
                        </p>
                        <p>
                            Со временем наше увлечение переросло в серьезную 
                            селекционную работу. Сегодня мы занимаемся 
                            разведением британских короткошерстных кошек 
                            различных окрасов, участвуем в выставках и 
                            постоянно повышаем качество породы.
                        </p>
                        
                        <h2>Наша философия</h2>
                        <p>
                            Мы не просто разводим кошек — мы создаем здоровые 
                            и счастливые семьи. Каждый котенок получает 
                            необходимый уход, правильное питание и внимание 
                            с первых дней жизни.
                        </p>
                        <p>
                            Мы против ранней вязки и чрезмерного разведения. 
                            Здоровье кошек — наш главный приоритет. Каждый 
                            питомец проходит регулярные ветеринарные осмотры, 
                            получает все необходимые прививки.
                        </p>
                    </div>
                    <div className="about-main__image">
                        <img 
                            src="/src/assets/images/about/nursery.jpg" 
                            alt="Наш питомник"
                        />
                    </div>
                </section>

                {/* Наши принципы */}
                <section className="principles">
                    <h2>Наши принципы</h2>
                    <div className="principles-grid">
                        <div className="principle">
                            <div className="principle-number">01</div>
                            <h3>Здоровье прежде всего</h3>
                            <p>
                                Регулярные осмотры ветеринара, качественное 
                                питание и необходимые прививки
                            </p>
                        </div>
                        <div className="principle">
                            <div className="principle-number">02</div>
                            <h3>Племенная работа</h3>
                            <p>
                                Тщательный отбор пар, работа с лучшими 
                                заводчиками России и Европы
                            </p>
                        </div>
                        <div className="principle">
                            <div className="principle-number">03</div>
                            <h3>Социализация</h3>
                            <p>
                                Котята растут в домашних условиях, привыкают 
                                к людям и другим животным
                            </p>
                        </div>
                        <div className="principle">
                            <div className="principle-number">04</div>
                            <h3>Прозрачность</h3>
                            <p>
                                Предоставляем все документы, тесты и 
                                фотографии родителей
                            </p>
                        </div>
                    </div>
                </section>

                {/* Наши достижения */}
                <section className="achievements">
                    <h2>Наши достижения</h2>
                    <div className="achievements-list">
                        <div className="achievement-item">
                            <div className="achievement-year">2018</div>
                            <div className="achievement-desc">
                                Чемпион России — кот Леопольд
                            </div>
                        </div>
                        <div className="achievement-item">
                            <div className="achievement-year">2019</div>
                            <div className="achievement-desc">
                                Лучший котенок выставки "Котофей"
                            </div>
                        </div>
                        <div className="achievement-item">
                            <div className="achievement-year">2021</div>
                            <div className="achievement-desc">
                                Победитель международной выставки "Crown of Cats"
                            </div>
                        </div>
                        <div className="achievement-item">
                            <div className="achievement-year">2023</div>
                            <div className="achievement-desc">
                                Лучший питомник британских кошек по версии "КотоФест"
                            </div>
                        </div>
                    </div>
                </section>

              

                {/* Лицензии и сертификаты */}
                <section className="certificates">
                    <h2>Сертификаты и лицензии</h2>
                    <div className="certificates-grid">
                        <div className="certificate">
                            <img 
                                src="/src/assets/images/certificates/cert1.jpg" 
                                alt="Сертификат 1"
                            />
                            <p>Свидетельство о регистрации питомника</p>
                        </div>
                        <div className="certificate">
                            <img 
                                src="/src/assets/images/certificates/cert2.jpg" 
                                alt="Сертификат 2"
                            />
                            <p>Членство в клубе "Русская кошка"</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutPage;