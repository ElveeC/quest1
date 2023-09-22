import { useState } from 'react';
import { ChangeEvent } from 'react';

type FormData = {
  contactPerson: string;
  phone: string;
  peopleCount: number;
  withChildren: boolean;
}

function ContactForm () {
  const [formData, setFormData] = useState<FormData>({
    contactPerson: '',
    phone: '',
    peopleCount: 1,
    withChildren: false,
  });

  /*const handleFieldChange = (evt) => {
    //const {name, value} = evt.target;
    setFormData({...formData, [evt.target.name]: evt.target.value});
  };*/

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

  return (
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
          pattern="[А-Яа-яЁёA-Za-z'- ]{1,}"
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
          pattern="[0-9]{10,}"
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
  );
}

export { ContactForm };
