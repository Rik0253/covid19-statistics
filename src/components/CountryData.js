import axios from "axios";
import React, { Component, Suspense, lazy } from "react";
import Layout from "./Layout";
import Loading from "./Loading";
import { Link } from "react-router-dom";


const CardsComponent = lazy(()=> import("./CardsComponent"));
const ChartsData = lazy(()=> import("./SpecificCountry/ChartsData"))

export default class CountryData extends Component {
  constructor() {
    super();
    this.state = { countrySpecificData: null, countryIso: null };
  }
  componentDidMount() {
    this.setState({
      countryIso: this.props.match.params.iso
    });

    axios
      .get(
        "https://disease.sh/v3/covid-19/countries/" +
          this.props.match.params.iso +
          "?yesterday=1&strict=true"
      )
      .then((res) => {
          console.log(res)
        this.setState({
            countrySpecificData: res.data
        });
      });
  }
  render() {
    return (
        
           <>    
          {(this.state.countrySpecificData) ? (
                <div>
                   <Layout data={{img: this.state.countrySpecificData.countryInfo.flag, text: this.state.countrySpecificData.country, time: this.state.countrySpecificData.updated}}></Layout>
                   <Link to="/">Go Back</Link>
                  <Suspense fallback={<Loading />}>
                    <div className="flex items-center justify-center m-4 p-4">
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
                        <CardsComponent data={{cases:this.state.countrySpecificData.todayCases, leftCases: this.state.countrySpecificData.casesPerOneMillion, rightCases: this.state.countrySpecificData.cases, bgcolor: 'bg-yellow-200' }} title={{head:'Today\'s Cases', leftTitle: 'Cases/million', rightTitle: 'Total Cases'}}/>

                        <CardsComponent data={{cases:this.state.countrySpecificData.todayRecovered, leftCases: this.state.countrySpecificData.recoveredPerOneMillion, rightCases: this.state.countrySpecificData.recovered, bgcolor: 'bg-green-200' }} title={{head:'Today\'s Recovered', leftTitle: 'Cases/million', rightTitle: 'Total Recovered'}}/>

                        <CardsComponent data={{cases:this.state.countrySpecificData.todayDeaths, leftCases: this.state.countrySpecificData.deathsPerOneMillion, rightCases: this.state.countrySpecificData.deaths, bgcolor: 'bg-red-200' }} title={{head:'Today\'s Deaths', leftTitle: 'Cases/million', rightTitle: 'Total Deaths'}}/>

                        <CardsComponent data={{cases:this.state.countrySpecificData.active, leftCases: this.state.countrySpecificData.critical, rightCases: this.state.countrySpecificData.tests, bgcolor: 'bg-indigo-200' }} title={{head:'Total Active Cases', leftTitle: 'Critical', rightTitle: 'Tests Done'}}/>

                      </div>
                    </div>
                  </Suspense>
                  <Suspense fallback={<Loading />}>
                    <ChartsData iso={this.state.countryIso} />
                  </Suspense>

                </div>
           
          ) : (
            <div>
                <Loading></Loading>
            </div>
          )
          }
          </>
       
        
      
    );
  }
}
