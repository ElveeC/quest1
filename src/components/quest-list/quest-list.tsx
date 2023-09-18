import { QuestCard } from '../quest-card/quest-card';
import { QuestType } from '../../types/quest-type';

type QuestCardProps = {
  quests: QuestType[];
}

function QuestList ({quests}: QuestCardProps) {
  return (
    <div className="cards-grid">
      {quests.map((quest) => (
        <QuestCard key={quest.id} quest={quest}/>
      ))}
    </div>
  );
}

export { QuestList };
