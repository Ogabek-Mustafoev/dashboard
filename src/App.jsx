import { CurrentSavedPeople, DonutChart } from "./components";
import { donutData } from "./mocks";

import "./App.scss";
import SavedInformationCard from "./components/saved-information/saved-information";
import { savedCard } from "./mocks/saved-card";

function App() {
  return (
    <div className="app gap-1">
      <div className="row gap-1">
        <DonutChart data={donutData} />
        <CurrentSavedPeople />
      </div>
      <div className="saved__wrapper">
         {savedCard?.map((res)=> (
             <SavedInformationCard title='Saqlash muddati bo’yicha' key={res?.id} {...res} />
         )) 
         }
      </div>
    </div>
  );
}

export default App;
