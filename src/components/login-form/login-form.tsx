import { /*useRef,*/ /*FormEvent/*, ChangeEvent,*/ useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { loginAction } from '../../store/api-actions';

type LoginFormValues = {
  email: string;
  password: string;
}

function LoginForm () {
  const dispatch = useAppDispatch();

  const [isChecked, setChecked] = useState(false);
  const REGEX_EMAIL = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
  const REGEX_PASSWORD = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{3,15}$/;

  const isPasswordValid = (value: string) => REGEX_PASSWORD.test(value);
  const isEmailValid = (login: string) => REGEX_EMAIL.test(login);

  //const isDisabled = !isChecked;


  const handleCheckedChange = () => {
    setChecked((prevCheckState) => !prevCheckState);
  };


  //const onSubmit = (evt: FormEvent<HTMLFormElement>) => evt.preventDefault();
  //let userLogin;
  //let userPassword;

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>();
  const onSubmit: SubmitHandler<LoginFormValues> = ({email, password}) => {

    dispatch(loginAction({
      login: email,
      password: password,
    }));
    //userLogin = email;
    //userPassword = password;
  };

  //const isUserPasswordValid = isPasswordValid(userPassword as string);


  return (
    <form
      className="login-form"
      action="https://echo.htmlacademy.ru/"
      method="post"
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="login-form__inner-wrapper">
        <h1 className="title title--size-s login-form__title">Вход</h1>
        <div className="login-form__inputs">
          <div className="custom-input login-form__input">
            <label className="custom-input__label" htmlFor="email">E&nbsp;&ndash;&nbsp;mail</label>
            <input
              type="email"
              id="email"
              placeholder="Адрес электронной почты"
              {...register('email',
                {
                  required: 'dksfja;s',
                  validate:
                    (email) => isEmailValid(email) || 'Укажите действительный адрес электронной почты'
                }
              )}
              aria-invalid={errors.email ? 'true' : 'false'}
            />
            {errors.email?.type === 'required' && <><br/><span>Укажите почту</span></>}
          </div>
          <div className="custom-input login-form__input">
            <label className="custom-input__label" htmlFor="password">Пароль</label>
            <input
              type="password"
              id="password"
              placeholder="Пароль"
              {...register('password',
                {
                  required: 'Укажите пароль',
                  validate:
                    (password) => isPasswordValid(password) || 'Пароль содержать минимум 1 цифру и 1 букву и состоять не менее чем из 3 символов'
                }
              )}
              aria-invalid={errors.password ? 'true' : 'false'}
            />
            {errors.password && <><br/><span>{errors.password?.message}</span></>}
          </div>
        </div>
        <button className="btn btn--accent btn--general login-form__submit" type="submit" >Войти</button>
        {!isChecked &&
        <p>Подтвердите согласие на обработку персональных данных</p>}

      </div>
      <label className="custom-checkbox login-form__checkbox">
        <input type="checkbox" id="id-order-agreement" name="user-agreement" required onChange={handleCheckedChange}/>
        <span className="custom-checkbox__icon">
          <svg width="20" height="17" aria-hidden="true">
            <use xlinkHref="#icon-tick"></use>
          </svg>
        </span>
        <span className="custom-checkbox__label">Я&nbsp;согласен с
          <Link className="link link--active-silver link--underlined" to="#"> правилами обработки персональных данных</Link>&nbsp;и пользовательским соглашением
        </span>
      </label>
    </form>
  );
}


/*function LoginForm () {

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  const REGEX_EMAIL = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
  const REGEX_PASSWORD = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{3,15}$/;

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setChecked] = useState(false);


  const isPasswordValid = REGEX_PASSWORD.test(password);
  const isEmailValid = REGEX_EMAIL.test(login);
  const isDisabled = !login || !isPasswordValid || !isChecked || !isEmailValid;

  const handleLoginChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setLogin(evt.target.value);
  };
  const handlePasswordChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setPassword(evt.target.value);
  };

  const handleCheckedChange = () => {
    setChecked((prevCheckState) => !prevCheckState);
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(loginAction({
      login: login,
      password: password,
    }));
  };

  return (
    <form
      className="login-form"
      action="https://echo.htmlacademy.ru/"
      method="post"
      onSubmit={handleFormSubmit}
    >
      <div className="login-form__inner-wrapper">
        <h1 className="title title--size-s login-form__title">Вход</h1>
        <div className="login-form__inputs">
          <div className="custom-input login-form__input">
            <label className="custom-input__label" htmlFor="email">E&nbsp;&ndash;&nbsp;mail</label>
            <input
              ref={loginRef}
              type="email"
              id="email"
              name="email"
              placeholder="Адрес электронной почты"
              required
              onChange={handleLoginChange}
            />
          </div>
          <div className="custom-input login-form__input">
            <label className="custom-input__label" htmlFor="password">Пароль</label>
            <input
              ref={passwordRef}
              type="password"
              id="password"
              name="password"
              placeholder="Пароль"
              required
              onChange={handlePasswordChange}
            />
          </div>
        </div>
        <button className="btn btn--accent btn--general login-form__submit" type="submit" disabled={isDisabled}>Войти</button>
        {!isPasswordValid && (
          <p> Пароль содержать минимум 1 цифру и 1 букву и состоять не менее чем из 3 символов</p>
        )}
        {!isEmailValid && (
          <p> Укажите корректный адрес электронной почты</p>
        )}
        {!isChecked && (
          <p> Подтвердите согласие на обработку персональных данных</p>
        )}
      </div>
      <label className="custom-checkbox login-form__checkbox">
        <input type="checkbox" id="id-order-agreement" name="user-agreement" required onChange={handleCheckedChange}/>
        <span className="custom-checkbox__icon">
          <svg width="20" height="17" aria-hidden="true">
            <use xlinkHref="#icon-tick"></use>
          </svg>
        </span>
        <span className="custom-checkbox__label">Я&nbsp;согласен с
          <Link className="link link--active-silver link--underlined" to="#"> правилами обработки персональных данных</Link>&nbsp;и пользовательским соглашением
        </span>
      </label>
    </form>
  );
}*/

export { LoginForm };
