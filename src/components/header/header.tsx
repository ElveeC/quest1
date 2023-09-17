import { Link } from 'react-router-dom';
import cn from 'classnames';
import { Logo } from '../logo/logo';
import { AppRoute } from '../../const';

type HeaderProps = {
  isAuthorized: boolean;
  currentPage: AppRoute;
}

function Header ({ isAuthorized, currentPage } : HeaderProps) {
  return (
    <header className="header">
      <div className="container container--size-l">
        <Logo currentPage={currentPage}/>
        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <Link className={cn(
                'link',
                {'active': currentPage === AppRoute.Main})} to={AppRoute.Main}
              >Квесты
              </Link>
            </li>
            <li className="main-nav__item">
              <Link className={cn(
                'link',
                {'active': currentPage === AppRoute.Contacts})} to={AppRoute.Contacts}
              >Контакты
              </Link>
            </li>
            {isAuthorized &&
            <li className="main-nav__item">
              <Link className={cn(
                'link',
                {'active': currentPage === AppRoute.MyQuests})} to={AppRoute.MyQuests}
              >Мои бронирования
              </Link>
            </li>}
          </ul>
        </nav>
        <div className="header__side-nav">
          {
            isAuthorized
            &&
            <Link className="btn btn--accent header__side-item" to={AppRoute.Main}>Выйти</Link>
          }
          {
            currentPage !== AppRoute.Login && !isAuthorized
            &&
            <Link className="btn header__side-item header__login-btn" to={AppRoute.Login}>Вход</Link>
          }
          <a className="link header__side-item header__phone-link" href="tel:88003335599">8 (000) 111-11-11</a>
        </div>
      </div>
    </header>
  );
}

export { Header };
