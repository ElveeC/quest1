import { QuestCard } from '../quest-card/quest-card';
import { QUESTS } from '../../mocks/quest-mocks';

function QuestList () {
  return (
    <div className="cards-grid">
      {QUESTS.map((quest) => (
        <QuestCard key={quest.id} quest={quest}/>
      ))}
    </div>
  );
}

export { QuestList };
