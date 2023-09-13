//import { Link } from 'react-router-dom';

type HeaderProps = {
  isAuthorized: boolean;
}

function Header ({ isAuthorized } : HeaderProps) {
  return (
    <header className="header">
      <div className="container container--size-l">
        <span className="logo header__logo">
          <svg width="134" height="52" aria-hidden="true">
            <use xlinkHref="#logo"></use>
          </svg>
        </span>
        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <a className="link active" href="#">Квесты</a>
            </li>
            <li className="main-nav__item">
              <a className="link" href="#">Контакты</a>
            </li>
            {isAuthorized &&
            <li className="main-nav__item">
              <a className="link" href="#">Мои бронирования</a>
            </li>}
          </ul>
        </nav>
        <div className="header__side-nav">
          {isAuthorized
            ?
            <a className="btn btn--accent header__side-item" href="#">Выйти</a>
            :
            <a className="btn header__side-item header__login-btn" href="login.html">Вход</a>}

          <a className="link header__side-item header__phone-link" href="tel:88003335599">8 (000) 111-11-11</a>
        </div>
      </div>
    </header>
  );
}

export { Header };
