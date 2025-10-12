import './Menu.css';

function Menu () {
    return (
        <section className='menu'>
          <div className='menu__container'>
            <button className='menu__btn'>Главная</button>
            <button className='menu__btn'>Услуги</button>
            <button className='menu__btn'>Контакты</button>
          </div>
        </section>
    )
}

export default Menu;