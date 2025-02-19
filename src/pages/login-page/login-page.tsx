import { Helmet } from 'react-helmet-async';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { LoginForm } from '../../components/login-form/login-form';
import { getDetailedQuest } from '../../store/data-process/data-process-selectors';
import { AppRoute } from '../../const';

type LoginPageProps = {
  isAuthorized: boolean;
}

function LoginPage ({ isAuthorized }: LoginPageProps) {
  const selectedQuest = useAppSelector(getDetailedQuest);
  const pageToNavigate = selectedQuest ? `${AppRoute.Quest}/${selectedQuest.id}${AppRoute.Booking}` : AppRoute.Main;

  if (selectedQuest && isAuthorized) {
    return (
      <Navigate to={pageToNavigate} />
    );
  }

  if (!selectedQuest && isAuthorized) {
    return (
      <Navigate to={AppRoute.Main}/>
    );
  }

  return (
    <div className="wrapper">
      <Helmet>
        <title>Escape room. Войти</title>
      </Helmet>
      <Header isAuthorized={false} currentPage={AppRoute.Login}/>
      <main className="decorated-page login">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet="img/content/maniac/maniac-size-m.webp, img/content/maniac/maniac-size-m@2x.webp 2x" />
            <img src="img/content/maniac/maniac-size-m.jpg" srcSet="img/content/maniac/maniac-size-m@2x.jpg 2x" width="1366" height="768" alt="" />
          </picture>
        </div>
        <div className="container container--size-l">
          <div className="login__form">
            <LoginForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
export { LoginPage };
