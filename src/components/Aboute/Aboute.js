import './Aboute.css';

function Aboute() {
    return (
        <section className='aboute'>
            <div className='aboute__container'>
                <h1 className='aboute__title'>Включим вашу продукцию<br></br> в реестры Минпромторга</h1>
                <h2 className='aboute__subtitle'>Сопровождаем полный цикл процедуры по 719, 616, 878 ПП<br></br> для получения Заключения Минпромторга на вашу продукцию</h2>
                <div className='aboute__btns'>
                    <div className='aboute__block'>
                        <button className='aboute__btn'></button>
                        <p className='aboute__btn-text'>Оставить заявку</p>
                    </div>
                    <div className='aboute__block'>
                        <button className='aboute__btn'></button>
                        <p className='aboute__btn-text'>Подробнее</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Aboute;