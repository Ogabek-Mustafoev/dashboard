import { CurrentSavedPeople, DonutChart } from "./components";
import { donutData } from "./mocks";
import "./App.scss";

function App() {
  return (
    <div className="app gap-1">
      <div className="row gap-1">
        <DonutChart data={donutData} />
        <CurrentSavedPeople />
      </div>
    </div>
  );
}

export default App;
