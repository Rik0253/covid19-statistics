import React,{useEffect, useState} from "react";
import LoadCountries from "./tasks/LoadCountries";
import WorldMap from "./components/WorldMapComponent";
import Legend from "./components/Legend";
import legendItems from "./entities/LegendItems";


function App() {

  const [countries, setCountries] = useState([]);
  const legendItemsReverse = [...legendItems].reverse();

  const load = () => {
    const loadCountries = new LoadCountries();
    loadCountries.load(setCountries);
  }

  useEffect(load, []);

  return (
    <div className="container mx-auto">
        <h1 className="text-center p-2 bg-blue-200">Covid-19 Statistics</h1>
      {
        countries.length === 0 ? 
        <div>
          <div className="w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50">
            <span className="text-green-500 opacity-75 top-1/2 my-0 mx-auto block relative w-0 h-0" style={{top: "50%"}}>
              Loading...
            </span>
          </div>
        </div>: 
        <div>
          <WorldMap countries={countries} />
          <Legend legendItems={legendItemsReverse}/>
        </div>
      }
      
    </div>
  );
}

export default App;
