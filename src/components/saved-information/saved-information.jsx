import threeDots from "../../assets/icons/three-dots.svg";

import "./saved-information.scss";
const SavedInformationCard = (props) => {
  const { img, title, body } = props;
  return (
    <div className="saved__card shadowed">
      <div className="saved__card__header">
        <div className="title">
          <span>{title}</span>
          <img src={threeDots} alt="" />
        </div>
        <div className="sub__title">
          <span>Nomi</span>
          <span>Soni</span>
        </div>
      </div>
      <div className="line"></div>
      <div className="saved__card__body">
        {body?.map((res) => (
          <div className="card__content__wrapper" key={res?.id}>
            <div className="card_content">
              <div className="img">
                <img src={res?.img} alt="" />
              </div>
              <span>{res?.name}</span>
            </div>
            <span className="amount">{res?.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedInformationCard;
