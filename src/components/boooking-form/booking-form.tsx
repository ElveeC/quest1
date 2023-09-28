import { FormEvent, useState } from 'react';
import { ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { BookingItemType, Slots } from '../../types/booking-item-type';
import { BookedQuestType, BookingDataType } from '../../types/booked-quest-type';
import { FormData } from '../../types/form-data';
import { addBookingAction } from '../../store/api-actions';
import { AppRoute } from '../../const';

type BookingFormProps = {
  slots: Slots;
  selectedLocation: BookingItemType;
  //peopleNumber: number[];
  quetsId: string;
};

function BookingForm ({selectedLocation, slots/*, peopleNumber*/, quetsId }: BookingFormProps) {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    contactPerson: '',
    phone: '',
    peopleCount: 1,
    withChildren: false,

  });

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleNameChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, contactPerson: evt.target.value});
  };

  const handlePhoneChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, phone: evt.target.value});
  };

  const handlePeopleCountChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, peopleCount: Number(evt.target.value)});
  };

  const handleChildrenChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, withChildren: evt.target.checked});
  };

  const handleDateChange = (date: string, time: string) => {
    setSelectedDate(date);
    setSelectedTime(time);
  };

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    const bookedQuest: BookedQuestType = {
      date: selectedDate,
      time: selectedTime,
      contactPerson: formData.contactPerson,
      withChildren: formData.withChildren,
      peopleCount: Number(formData.peopleCount),
      phone: formData.phone,
      placeId: selectedLocation.id
    };

    const bookingData: BookingDataType = {
      id: quetsId,
      postData: bookedQuest
    };

    dispatch(addBookingAction({...bookingData}));
    navigate(AppRoute.MyQuests);
  };

  return (
    <form
      className="booking-form"
      action="https://echo.htmlacademy.ru/"
      method="post"
      onSubmit={handleSubmit}
    >
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Выбор даты и времени</legend>
        {Object.entries(slots).map(([date, timeSlots]) => (
          <fieldset className="booking-form__date-section" key={date}>
            <legend className="booking-form__date-title">{date}</legend>
            <div className="booking-form__date-inner-wrapper">
              {timeSlots.map((timeSlot) =>
                (
                  <label className="custom-radio booking-form__date" key={timeSlot.time}>
                    <input
                      type="radio"
                      id={`today${timeSlot.time}`}
                      name="date"
                      required
                      value={timeSlot.time}
                      disabled={!timeSlot.isAvailable}
                      onChange={() => handleDateChange(date, timeSlot.time)}
                    />
                    <span className="custom-radio__label">{timeSlot.time}</span>
                  </label>
                )
              )}
            </div>
          </fieldset>

        ))}

      </fieldset>
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Контактная информация</legend>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="name">Ваше имя</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Имя"
            value={formData.contactPerson}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="tel">Контактный телефон</label>
          <input
            type="tel"
            id="tel"
            name="tel"
            placeholder="Телефон"
            value={formData.phone}
            onChange={handlePhoneChange}
            required
          />

        </div>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="person">Количество участников</label>
          <input
            type="number"
            id="person"
            name="person"
            placeholder="Количество участников"
            onChange={handlePeopleCountChange}
            required
          />
        </div>
        <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
          <input
            type="checkbox"
            id="children"
            name="children"
            checked={formData.withChildren}
            onChange={handleChildrenChange}
          />
          <span className="custom-checkbox__icon">
            <svg width="20" height="17" aria-hidden="true">
              <use xlinkHref="#icon-tick"></use>
            </svg>
          </span><span className="custom-checkbox__label">Со&nbsp;мной будут дети</span>
        </label>
      </fieldset>
      <button className="btn btn--accent btn--cta booking-form__submit" type="submit" >Забронировать</button>
      <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--agreement">
        <input type="checkbox" id="id-order-agreement" name="user-agreement" required />
        <span className="custom-checkbox__icon">
          <svg width="20" height="17" aria-hidden="true">
            <use xlinkHref="#icon-tick"></use>
          </svg>
        </span>
        <span className="custom-checkbox__label">Я&nbsp;согласен с
          <a className="link link--active-silver link--underlined" href="#">правилами обработки персональных данных</a>&nbsp;и пользовательским соглашением
        </span>
      </label>
    </form>
  );
}

export { BookingForm };
