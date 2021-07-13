import axios from "axios";
import {features} from "../data/countries.json";

class LoadCountries {
    covidCountryUrl = "https://disease.sh/v3/covid-19/countries";
    mapCountries = [];
    setState = null;
    
    load = (setState) => {
        this.setState = setState;
        this.mapCountries = features;
        this.#getAllCountryCovidData();
        
    }

    #getAllCountryCovidData(){
        axios.get(this.covidCountryUrl).then((result)=>{
            this.mapCountries.forEach((data)=>{          
                data.properties['covData']=result.data.filter((covid)=>{              
                    return covid.countryInfo.iso3 === data.properties.ISO_A3
                });
              })
              this.setState(this.mapCountries);
        })
    }
}

export default LoadCountries;