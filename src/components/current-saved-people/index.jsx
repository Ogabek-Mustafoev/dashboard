import "./style.scss";

export const CurrentSavedPeople = (props) => {
  const {
    title = "195",
    subTitle = "Joriy kunda muassasada saqlanayotganlar",
  } = props;

  return (
    <div className="flex-col p-1 shadowed between peopleSaved">
      <div className="row between gap-1">
        <p className="card_title">{title}</p>
        <p className="card_subtitle">{subTitle}</p>
      </div>
      <div className="row between mt-auto">
        <div className="flex-col">
          <p className="card_title">{title}</p>
        </div>
        <div className="flex-col end">
          
        </div>
      </div>
    </div>
  );
};
