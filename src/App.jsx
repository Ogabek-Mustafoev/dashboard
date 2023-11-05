import {
  Prisoners,
  DonutChart,
  ProgressCard,
  ActionsTaken,
  CurrentSavedPeople,
  SavedInformationCard,
} from "./components";
import { donutData, prisoners, progressData, actionsTaken } from "./mocks";
import { savedCard } from "./mocks/saved-card";
import "./App.scss";

function App() {
  return (
    <div className="app gap-1">
      <div className="row gap-1 top__card_wrapp">
        <DonutChart data={donutData} />
        <CurrentSavedPeople />
        <div className="flex-col shadowed progress_wrapper">
          {progressData?.slice(0, 2).map((item, idx) => (
            <ProgressCard key={idx} {...item} />
          ))}
        </div>
        <div className="flex-col shadowed progress_wrapper">
          {progressData?.slice(2).map((item, idx) => (
            <ProgressCard key={idx} {...item} />
          ))}
        </div>
      </div>
      <div className="row gap-1 current_saved-wrapper">
        <CurrentSavedPeople />
        <CurrentSavedPeople />
      </div>
      <Prisoners data={prisoners} />
      <div className="saved__wrapper">
        {savedCard?.map((res) => (
          <SavedInformationCard
            title="Saqlash muddati bo’yicha"
            key={res?.id}
            {...res}
          />
        ))}
      </div>
      <ActionsTaken data={actionsTaken} />
    </div>
  );
}

export default App;
