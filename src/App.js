import React,{useEffect, useState} from "react";
import LoadCountries from "./tasks/LoadCountries";
import WorldMap from "./components/WorldMapComponent";

function App() {

  const [countries, setCountries] = useState([]);

  const load = () => {
    const loadCountries = new LoadCountries();
    loadCountries.load(setCountries);
  }

  useEffect(load, []);

  return (
    <div>
      {
        countries.length === 0 ? <div><div className="w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50">
        <span className="text-green-500 opacity-75 top-1/2 my-0 mx-auto block relative w-0 h-0" style={{top: "50%"}}>
        <svg style={{animation: "rotate 2s linear" }} viewBox="0 0 50 50">
          <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
        </svg>
        </span>
      </div></div>: <WorldMap countries={countries} />
      }
      
    </div>
  );
}

export default App;
