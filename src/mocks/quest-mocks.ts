import { QuestType, DetailedQuestType } from '../types/quest-type';

const quests : QuestType[] = [
  {
    id: 'ldkfjksf5fdss',
    title: 'Маньяк',
    previewImg: 'https://grading.design.pages.academy/static/quest/crypt.jpg',
    previewImgWebp: 'https://grading.design.pages.academy/static/quest/crypt.webp',
    level: 'medium',
    type: 'horror',
    peopleMinMax: [1, 4],
  },
  {
    id: 'ldkfjksfdss',
    title: 'Лунный свет',
    previewImg: 'https://grading.design.pages.academy/static/quest/maniac.jpg"',
    previewImgWebp: 'https://grading.design.pages.academy/static/quest/maniac.webp',
    level: 'easy',
    type: 'mystic',
    peopleMinMax: [1, 5],
  },
  {
    id: 'kfjksf5ss',
    title: 'Остров сокровищ',
    previewImg: 'https://grading.design.pages.academy/static/quest/palace.jpg',
    previewImgWebp: 'https://grading.design.pages.academy/static/quest/palace.webp',
    level: 'hard',
    type: 'adventures',
    peopleMinMax: [2, 4],
  },
];

const detailedQuests : DetailedQuestType[] = [
  {
    id: 'ldkfjksf5fdss',
    title: 'Маньяк',
    previewImg: 'https://grading.design.pages.academy/static/quest/crypt.jpg',
    previewImgWebp: 'https://grading.design.pages.academy/static/quest/crypt.webp',
    level: 'medium',
    type: 'horror',
    peopleMinMax: [1, 4],
    description: 'Очень-очень страшный квест',
    coverImg: 'https://grading.design.pages.academy/static/quest/crypt@2x.jpg',
    coverImgWebp: 'https://grading.design.pages.academy/static/quest/crypt@2x.webp',
  },
  {
    id: 'ldkfjksfdss',
    title: 'Лунный свет',
    previewImg: 'https://grading.design.pages.academy/static/quest/maniac.jpg"',
    previewImgWebp: 'https://grading.design.pages.academy/static/quest/maniac.webp',
    level: 'easy',
    type: 'mystic',
    peopleMinMax: [1, 5],
    description: 'Что-то загадочное',
    coverImg: 'https://grading.design.pages.academy/static/quest/maniac@2x.jpg',
    coverImgWebp: 'https://grading.design.pages.academy/static/quest/maniac@2x.webp',
  },
  {
    id: 'kfjksf5ss',
    title: 'Остров сокровищ',
    previewImg: 'https://grading.design.pages.academy/static/quest/palace.jpg',
    previewImgWebp: 'https://grading.design.pages.academy/static/quest/palace.webp',
    level: 'hard',
    type: 'adventures',
    peopleMinMax: [2, 4],
    description: 'Найди сундук мертвеца',
    coverImg: 'https://grading.design.pages.academy/static/quest/palace@2x.jpg',
    coverImgWebp: 'https://grading.design.pages.academy/static/quest/palace@2x.webp',
  },
];

export { quests, detailedQuests };
