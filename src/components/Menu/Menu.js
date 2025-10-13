import './Menu.css';
import { Link, useLocation } from 'react-router-dom';

function Menu () {
  const path = useLocation().pathname;

    return (
        <section className='menu'>
          <ul className='menu__list'>
            <li className="menu__link">
              <Link to="/">
                <button className={path === '/' ? "menu__btn menu__btn_dark" : "menu__btn"}>Главная</button>
              </Link>
            </li>
            <li className="menu__link">
              <Link to="/uslugi">
                <button className={path === '/uslugi' ? "menu__btn menu__btn_dark" : "menu__btn"}>Услуги</button>
              </Link>
            </li>
            <li className="menu__link">
              <Link to="/kontakty">
                <button className={path === '/kontakty' ? "menu__btn menu__btn_dark" : "menu__btn"}>Контакты</button>
              </Link>
            </li>
          </ul>
        </section>
    )
}

export default Menu;