import { QuestGenreList } from '../quest-genre-list/quest-genre-list';

function GenreFilter () {
  return (
    <fieldset className="filter__section">
      <legend className="visually-hidden">Тематика</legend>
      <QuestGenreList />
    </fieldset>
  );
}

export { GenreFilter };
