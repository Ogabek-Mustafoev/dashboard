import { CurrentSavedPeople, DonutChart, ProgressCard } from "./components";
import { donutData, progressData } from "./mocks";
import "./App.scss";

function App() {
  return (
    <div className="app gap-1">
      <div className="row gap-1">
        <DonutChart data={donutData} />
        <CurrentSavedPeople />
        <div className="flex-col shadowed">
          {progressData?.slice(0, 2).map((item, idx) => (
            <ProgressCard key={idx} {...item} />
          ))}
        </div>
        <div className="flex-col shadowed">
          {progressData?.slice(2).map((item, idx) => (
            <ProgressCard key={idx} {...item} />
          ))}
        </div>
      </div>
      <div className="row gap-1">
        <CurrentSavedPeople />
        <CurrentSavedPeople />
      </div>
    </div>
  
  );
}

export default App;
