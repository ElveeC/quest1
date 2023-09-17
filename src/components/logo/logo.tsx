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
    <a className="logo header__logo" href="index.html" aria-label="Перейти на Главную">
      <svg width="134" height="52" aria-hidden="true">
        <use xlinkHref="#logo"></use>
      </svg>
    </a>
  );
}

export { Logo };
