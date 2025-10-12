import './Main.css';

function Main () {
    return (
        <section className='main'>
          <div className='main__container'>
            <h1 className='main__title'>Включим вашу продукцию<br></br> в реестры Минпромторга</h1>
            <h2 className='main__subtitle'>Сопровождаем полный цикл процедуры по 719, 616, 878 ПП<br></br> для получения Заключения Минпромторга на вашу продукцию</h2>
            <div className='main__btns'>
              <div className='main__block'>
                <button className='main__btn'></button>
                <p className='main__btn-text'>Оставить заявку</p>
              </div>
              <div className='main__block'>
                <button className='main__btn'></button>
                <p className='main__btn-text'>Подробнее</p>
              </div>
            </div>
          </div>
        </section>
    )
}

export default Main;