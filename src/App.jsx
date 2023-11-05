import {
  CurrentSavedPeople,
  DonutChart,
  Prisoners,
  ActionsTaken,
} from "./components";
import { donutData, prisoners, actionsTaken } from "./mocks";
import "./App.scss";

function App() {
  return (
    <div className="app gap-1">
      <div className="row gap-1">
        <DonutChart data={donutData} />
        <CurrentSavedPeople />
      </div>
      <Prisoners data={prisoners} />
      <ActionsTaken data={actionsTaken} />
    </div>
  );
}

export default App;
