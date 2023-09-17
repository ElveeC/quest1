import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Footer } from '../../components/footer/footer';
import { Logo } from '../../components/logo/logo';
import { AppRoute } from '../../const';


function NotFoundPage () {
  return (
    <div className="wrapper">
      <Helmet>
        <title>Escape room. Страница не найдена</title>
      </Helmet>
      <header className="header">
        <div className="container container--size-l">
          <Logo currentPage={AppRoute.NotFound}/>
          <nav className="main-nav header__main-nav">
            <ul className="main-nav__list">
              <li className="main-nav__item">
                <Link className='link' to={AppRoute.Main}>Вы, кажется, заблудились... Ищите верный путь здесь
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Footer />
    </div>
  );
}

export { NotFoundPage };
