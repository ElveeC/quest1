import { LevelList } from '../level-list/level-list';


function LevelFilter () {

  return (
    <fieldset className="filter__section">
      <legend className="visually-hidden">Сложность</legend>
      <LevelList />
    </fieldset>
  );
}

export { LevelFilter };
