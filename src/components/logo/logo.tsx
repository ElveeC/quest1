import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type LogoProps = {
  currentPage: AppRoute;
}

function Logo ({ currentPage }: LogoProps) {
  if (currentPage === AppRoute.Main) {
    return (
      <span className="logo header__logo">
        <svg width="134" height="52" aria-hidden="true">
          <use xlinkHref="#logo"></use>
        </svg>
      </span>
    );
  }

  return (
    <Link className="logo header__logo" to={AppRoute.Main} aria-label="Перейти на Главную">
      <svg width="134" height="52" aria-hidden="true">
        <use xlinkHref="#logo"></use>
      </svg>
    </Link>
  );
}

export { Logo };
