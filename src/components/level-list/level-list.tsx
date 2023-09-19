import { useState } from 'react';
import { ChangeEvent } from 'react';
import { LevelDictionary, INITIAL_LEVEL } from '../../const';
import { capitalize } from '../../utils';

/*type LevelListProps = {
  checkedLevel: string;
}*/

function LevelList (/*{ checkedLevel }: LevelListProps*/) {

  const [checkedLevel, setCheckedLevel] = useState(INITIAL_LEVEL);
  const handleLevelChange = (evt: ChangeEvent) => {
    if (!evt.currentTarget.id) {
      return;
    }
    setCheckedLevel(evt.target.id);
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
