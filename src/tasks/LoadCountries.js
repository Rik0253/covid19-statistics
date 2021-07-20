import axios from "axios";
import {features} from "../data/countries.json";
import legendItems from "../entities/LegendItems";


class LoadCountries {
    covidCountryUrl = "https://disease.sh/v3/covid-19/countries";
    mapCountries = [];
    setState = null;
    
    load = (setState) => {
        this.setState = setState;
        this.mapCountries = features;
        this.#getAllCountryCovidData();
        
        
    }

    #getCountryColor(data){        
        if(data.properties.covData.length > 0){
            const legendItem = legendItems.find((legendItem)=>legendItem.isFor(data.properties.covData[0].cases));
            if(legendItem != null){
                return legendItem.color;
            }
        }
        
        return '#2E7F18';
    }

    #getAllCountryCovidData(){
        axios.get(this.covidCountryUrl).then((result)=>{
            this.mapCountries.forEach((data)=>{          
                data.properties['covData']=result.data.filter((covid)=>{              
                    return covid.countryInfo.iso3 === data.properties.ISO_A3
                });
                data.properties['countryColor'] = this.#getCountryColor(data);
              })
              this.setState(this.mapCountries);
        })
    }
}

export default LoadCountries;