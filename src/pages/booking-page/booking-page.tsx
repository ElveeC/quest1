import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { BookingForm } from '../../components/boooking-form/booking-form';
import { LoadingPage } from '../loading-page/loading-page';
import { NotFoundPage } from '../not-found-page/not-found-page';
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchBookingItemsAction } from '../../store/api-actions';
import { getDetailedQuest, getDBookingItems, getSelectedLocation, getBookingItemsLoadingStatus } from '../../store/data-process/data-process-selectors';
import { Map } from '../../components/map/map';

type BookingPageProps = {
  isAuthorized: boolean;
}

function BookingPage ({ isAuthorized }: BookingPageProps) {

  const currentQuest = useParams();
  const selectedQuest = useAppSelector(getDetailedQuest);
  const bookingItems = useAppSelector(getDBookingItems);
  let selectedLocation = useAppSelector(getSelectedLocation);
  if (selectedLocation === null || !bookingItems.some((bookingItem) => bookingItem.id === selectedLocation?.id)) {
    selectedLocation = bookingItems[0];
  }
  const isBookingDataLoading = useAppSelector(getBookingItemsLoadingStatus);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (currentQuest.id) {
      dispatch(fetchBookingItemsAction(currentQuest.id));
    }
  }, [dispatch, currentQuest.id]);

  if (isBookingDataLoading) {
    return (
      <LoadingPage />
    );
  }

  if (!bookingItems.length || !selectedQuest) {
    return <NotFoundPage />;
  }

  const {
    title,
    coverImg,
    coverImgWebp
  } = selectedQuest;


  return (
    <div className="wrapper">
      <Helmet>
        <title>Escape room. Бронирование квеста</title>
      </Helmet>
      <Header isAuthorized={isAuthorized} currentPage={AppRoute.Booking} />
      <main className="page-content decorated-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet={`${coverImgWebp}, ${coverImgWebp} 2x`} />
            <img src={coverImg} srcSet={`${coverImg} 2x`} width="1366" height="768" alt={`${title}.`} />
          </picture>
        </div>
        <div className="container container--size-s">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle subtitle--size-l page-content__subtitle">Бронирование квеста
            </h1>
            <p className="title title--size-m title--uppercase page-content__title">{title}</p>
          </div>
          <div className="page-content__item">
            <div className="booking-map">
              <div className="map">
                <Map bookingItems={bookingItems}/>
              </div>
              <p className="booking-map__address">{selectedLocation.location.address}</p>
            </div>
          </div>
          <BookingForm
            slots={selectedLocation.slots}
            selectedLocation={selectedLocation}
            quetsId={selectedQuest.id}
          />
        </div>
      </main>
      <Footer />
    </div>

  );
}

export { BookingPage };
