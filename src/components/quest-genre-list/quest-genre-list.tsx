import { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { QuestGenre } from '../../const';
import { getCheckedGenre } from '../../store/data-process/data-process-selectors';
import { changeGenre } from '../../store/data-process/data-process';
import { capitalize } from '../../utils';

function QuestGenreList () {
  const dispatch = useAppDispatch();
  const checkedGenre = useAppSelector(getCheckedGenre);

  const handleGenreChange = (evt: ChangeEvent) => {
    if (!evt.target.id) {
      return;
    }
    dispatch(changeGenre(evt.target.id));
  };

  return (
    <ul className="filter__list">
      {Object.entries(QuestGenre).map(([, genre]) => (
        <li className="filter__item" key={genre.id}>
          <input type="radio" name="type" id={genre.id} onChange={handleGenreChange} checked={checkedGenre === genre.id}/>
          <label className="filter__label" htmlFor={genre.id}>
            <svg className="filter__icon" width="36" height="30" aria-hidden="true">
              <use xlinkHref={`#icon-${genre.icon}`}></use>
            </svg><span className="filter__label-text">{capitalize(genre.name)}</span>
          </label>
        </li>
      ))}
    </ul>
  );
}

export { QuestGenreList };
