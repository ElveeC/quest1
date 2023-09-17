import { QuestType } from '../../types/quest-type';

type QuestCardProps = {
  quest: QuestType;
}

function QuestCard ({ quest }: QuestCardProps) {

  const { id, title, previewImg, previewImgWebp, coverImg, peopleMinMax, level } = quest;

  return (
    <div className="quest-card" id={id}>
      <div className="quest-card__img">
        <picture>
          <source type="image/webp" srcSet={previewImgWebp} />
          <img src={previewImg} srcSet={coverImg} width="344" height="232" alt={`${title}.`} />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <a className="quest-card__link" href="#">{title}</a>
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width="11" height="14" aria-hidden="true">
              <use xlinkHref="#icon-person"></use>
            </svg>{peopleMinMax[0]}&ndash;{peopleMinMax[1]}&nbsp;чел
          </li>
          <li className="tags__item">
            <svg width="14" height="14" aria-hidden="true">
              <use xlinkHref="#icon-level"></use>
            </svg>{level}
          </li>
        </ul>
      </div>
    </div>
  );
}

export { QuestCard };
