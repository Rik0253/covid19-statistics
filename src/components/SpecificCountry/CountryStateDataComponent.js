import React, {Component} from 'react';
import axios from "axios";

class CountryStateDataComponent extends Component {
  constructor() {
    super();
    this.state = { countryStateData: null}
  }
  componentDidMount() {
   axios.get("https://disease.sh/v3/covid-19/gov/"+this.props.iso).then((res) => {

     this.setState({
       countryStateData: res.data
     })
   })
  }

  render() {
    return (
      <div className="overflow-x-auto">
        {
          (this.state.countryStateData)?
            <div
              className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
              <div className="w-full lg:w-5/6">
                <div className="bg-white shadow-md rounded my-6">
                  <table className="min-w-max w-full table-auto">
                    <thead>
                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                      <th className="py-3 px-6 text-left">State</th>
                      <th className="py-3 px-6 text-left">Cases</th>
                      <th className="py-3 px-6 text-center">Recovered</th>
                      <th className="py-3 px-6 text-center">Deaths</th>
                      <th className="py-3 px-6 text-center">Active Cases</th>
                      <th className="py-3 px-6 text-center">Today's Cases</th>
                      <th className="py-3 px-6 text-center">Today's Recovered</th>
                      <th className="py-3 px-6 text-center">Today's Deaths</th>
                    </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                    {
                       this.state.countryStateData.states.map((state, index)=>{
                          if(index % 2 === 0){
                            return (<tr className="border-b border-gray-200 hover:bg-gray-100" key={index}>
                              <td className="py-3 px-6 text-left whitespace-nowrap">
                                <div className="flex items-center">
                                  <span className="font-medium">{state.state}</span>
                                </div>
                              </td>
                              <td className="py-3 px-6 text-left">
                                <div className="flex items-center">
                                  <span>{state.cases}</span>
                                </div>
                              </td>
                              <td className="py-3 px-6 text-center">
                                <span>{state.recovered}</span>
                              </td>
                              <td className="py-3 px-6 text-center">
                                <span>{state.deaths}</span>
                              </td>
                              <td className="py-3 px-6 text-center">
                               <span>{state.active}</span>
                              </td>
                              <td className="py-3 px-6 text-center">
                                <span>{state.todayCases}</span>
                              </td>
                              <td className="py-3 px-6 text-center">
                                <span>{state.todayRecovered}</span>
                              </td>
                              <td className="py-3 px-6 text-center">
                                <span>{state.todayDeaths}</span>
                              </td>
                            </tr>)
                          }else{
                            return (<tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100" key={index}>
                              <td className="py-3 px-6 text-left whitespace-nowrap">
                                <div className="flex items-center">
                                  <span className="font-medium">{state.state}</span>
                                </div>
                              </td>
                              <td className="py-3 px-6 text-left">
                                <div className="flex items-center">
                                  <span>{state.cases}</span>
                                </div>
                              </td>
                              <td className="py-3 px-6 text-center">
                                <span>{state.recovered}</span>
                              </td>
                              <td className="py-3 px-6 text-center">
                                <span>{state.deaths}</span>
                              </td>
                              <td className="py-3 px-6 text-center">
                                <span>{state.active}</span>
                              </td>
                              <td className="py-3 px-6 text-center">
                                <span>{state.todayCases}</span>
                              </td>
                              <td className="py-3 px-6 text-center">
                                <span>{state.todayRecovered}</span>
                              </td>
                              <td className="py-3 px-6 text-center">
                                <span>{state.todayDeaths}</span>
                              </td>
                            </tr>)
                          }

                        })
                    }




                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            :
            ''
        }

      </div>
    );
  }
}

export default CountryStateDataComponent;