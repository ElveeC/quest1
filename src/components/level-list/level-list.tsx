import { ChangeEvent } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeLevel } from '../../store/data-process/data-process';
import { LevelDictionary } from '../../const';
import { getCheckeLevel } from '../../store/data-process/data-process-selectors';

import { capitalize } from '../../utils';

function LevelList () {
  const dispatch = useAppDispatch();
  const checkedLevel = useAppSelector(getCheckeLevel);

  const handleLevelChange = (evt: ChangeEvent) => {
    if (!evt.target.id) {
      return;
    }
    dispatch(changeLevel(evt.target.id));
  };

  return (
    <ul className="filter__list">
      {Object.entries(LevelDictionary).map(([key, value]) => (
        <li className="filter__item" key={key}>
          <input type="radio" name="level" id={key} onChange={handleLevelChange} checked={checkedLevel === key}/>
          <label className="filter__label" htmlFor={key}><span className="filter__label-text">{capitalize(value)}</span>
          </label>
        </li>
      ))}
    </ul>
  );
}

export { LevelList };
