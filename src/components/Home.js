import React,{useEffect, useState} from "react";
import LoadCountries from "../tasks/LoadCountries";
import WorldMap from "./WorldMapComponent";
import Legend from "./Legend";
import legendItems from "../entities/LegendItems";
import Layout from "./Layout";
import Loading from "./Loading";

function Home() {
  const [countries, setCountries] = useState([]);
  const legendItemsReverse = [...legendItems].reverse();

  const load = () => {
    const loadCountries = new LoadCountries();
    loadCountries.load(setCountries);
  };

  useEffect(load, []);

  return (
      <>
      {countries.length === 0 ? (
        <div>
          <Loading></Loading>
        </div>
      ) : (
        <div>
          <Layout data={{img: null, text: 'Covid-19 Statistics'}}/>
          <WorldMap countries={countries} />
          <Legend legendItems={legendItemsReverse} />
        </div>
      )}
    </>
  );
}

export default Home;
