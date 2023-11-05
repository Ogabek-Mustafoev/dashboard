import tablet from "../../assets/icons/tablet.svg";
import descktop from "../../assets/icons/descktop.svg";
import "./style.scss";

export const CurrentSavedPeople = (props) => {
  const {
    title = "195",
    subTitle = "Joriy kunda muassasada saqlanayotganlar",
  } = props;

  return (
    <div className="flex-col p-1  shadowed between peopleSaved">
      <div className="row between gap-1">
        <p className="card_title">{title}</p>
        <p className="card_subtitle">{subTitle}</p>
      </div>
      <div className="row between mt-auto">
        <div className="flex-col">
          <div className="row">
            <img src={tablet} alt="img" />
            <p className="card_text">Muassasada</p>
          </div>
          <p className="card_title">{title}</p>
        </div>
        <hr />
        <div className="flex-col">
          <div className="row">
            <img src={descktop} alt="img" />
            <p className="card_text">Maxsus palatada</p>
          </div>
          <p className="card_title">{title}</p>
        </div>
      </div>
    </div>
  );
};
