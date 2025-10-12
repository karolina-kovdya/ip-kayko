import './Header.css';
import icon from '../../images/tg.png';
import logo from '../../images/logo.png';

function Header() {
  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header__info'>
          <img
          className='header__logo'
          alt='логотип'
          src={logo}
        />
          <p className='header__text'>ИП Кайко О.В</p>
        </div>
        <div className='header__block'>
          <div className='header__info'>
            <div className='header__info-web'>
              <a
                className='header__link'
                href='https://t.me/+79190532886'
                target='blanc'
              >
                <img
                  className='header__icon'
                  alt='иконка телеграм'
                  src={icon}
                />
              </a>
              <p className='header__num'>+79190532886</p>
              <a
                className='header__link'
                href='https://wa.me/+79190532886'
                target='blanc'
              >
                <button className='header__btn'> Написать в WhatsApp</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
