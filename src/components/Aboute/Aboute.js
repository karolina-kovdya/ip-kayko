import './Aboute.css';
import { Link } from 'react-router-dom';

function Aboute() {
    return (
        <section className='aboute'>
            <div className='aboute__container'>
                <h1 className='aboute__title'>Внесем вашу продукцию<br></br> в реестр МИНПРОМТОРГ РФ</h1>
                <h2 className='aboute__subtitle'>Сопровождаем полный цикл процедуры по 719, 616, 878 ПП<br></br> для получения Заключения Минпромторга на вашу продукцию</h2>
                <div className='aboute__btns'>
                    <a
                      className='aboute__link' 
                      href='https://wa.me/+79190532886'
                      target='blanc'
                      title='Перейти в WhatsApp'
                    >
                      <button className='aboute__btn'>
                        <span className='aboute__circle'></span>
                        <span className='aboute__btn-text'>Оставить заявку</span>
                      </button>
                    </a>
                    <Link to='/information' className='aboute__link'>
                      <button className='aboute__btn'>
                        <span className='aboute__circle'></span>
                        <span className='aboute__btn-text'>Подробнее</span>
                    </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Aboute;