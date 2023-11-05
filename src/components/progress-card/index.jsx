import { Progress } from "./progress";
import './style.scss'

export const ProgressCard = (props) => {
  const { title, text, icon, color } = props;

  return (
    <div className="row gap-1 p-1">
      <Progress icon={icon} color={color} progress={+title} />
      <div className="flex-col progress__content">
        <p className="card_title">{title}</p>
        <p className="card_text">{text}</p>
      </div>
    </div>
  );
};
