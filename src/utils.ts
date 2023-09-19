import { INITIAL_GENRE, INITIAL_LEVEL } from './const';
import { QuestType } from './types/quest-type';

const capitalize = (string: string) => `${string[0].toUpperCase()}${string.slice(1)}`;
const filterQuests = (genre: string, level: string, allQuests: QuestType[]) => {
  let filteredQuests;
  switch (level) {
    case INITIAL_LEVEL:
      filteredQuests = allQuests;
      break;

    default:
      filteredQuests = allQuests.filter((quest) => quest.level === level);

  }
  if (genre !== INITIAL_GENRE) {
    filteredQuests = filteredQuests.filter((quest) => quest.type === genre);
  }

  return filteredQuests;
};

export { capitalize, filterQuests };
