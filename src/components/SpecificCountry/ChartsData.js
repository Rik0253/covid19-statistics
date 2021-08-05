import React, {Component} from 'react';
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {format} from 'date-fns';


class ChartsData extends Component {
  constructor() {
    super();
    this.state = { countryGraphData: [], opacity: { date: 1, Cases: 1, Deaths: 1, Recovered: 1}, dataKeys: { date: 'date', Cases: 'Cases', Deaths: 'Deaths', Recovered: 'Recovered'} }
  }
  componentDidMount() {
    let modifiedData = [];
    axios.get('https://disease.sh/v3/covid-19/historical/'+this.props.iso+'?lastdays=365').then((res) => {
      console.log(res.data)
     Object.keys(res.data.timeline.cases).forEach((key) => {
        modifiedData.push({ date: new Date(key).getTime(), Cases: res.data.timeline.cases[key], Deaths: res.data.timeline.deaths[key], Recovered: res.data.timeline.recovered[key] });
      })
      this.setState({
        countryGraphData: modifiedData
      });
      console.log(this.state.countryGraphData)
    })
  }

  dateFormatter = date => {
    return format(new Date(date), "dd/MMM/yyyy");
  }

  toggleLegend(data) {
    const { dataKey } = data;
    const { opacity } = this.state;
    const { dataKeys }= this.state;

    if(dataKeys[dataKey] === dataKey)
    {
      this.setState({
        opacity: { ...opacity, [dataKey]: 0 },
        dataKeys: { ...dataKeys,[dataKey]:dataKeys[dataKey]+' '}
      });
    }
    else
    {
      this.setState({
        opacity: { ...opacity, [dataKey.trim()]: 1 },
        dataKeys: { ...dataKeys,[dataKey.trim()]:dataKeys[dataKey.trim()].trim()}
      });
    }
  }


  render() {
    return (
      <div className="w-auto h-96">
        {
          (this.state.countryGraphData) ?
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={this.state.countryGraphData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />

                <XAxis
                  dataKey="date"
                  hasTick
                  scale="time"
                  domain={["dataMin", "dataMax"]}
                  type="number"
                  tickFormatter={this.dateFormatter}
                />
                <YAxis />
                <Tooltip labelFormatter={(date) => { return 'Date: ' + this.dateFormatter(date)}} formatter={(cases, deaths, recovered, props) => { return [ cases.toLocaleString(undefined, {maximumFractionDigits:2}), deaths.toLocaleString(undefined, {maximumFractionDigits:2}), recovered.toLocaleString(undefined, {maximumFractionDigits:2})] }}/>
                <Legend onClick={this.toggleLegend.bind(this)} wrapperStyle={{cursor: 'pointer'}}/>
                <Line type="monotone" dataKey={this.state.dataKeys.Cases} strokeOpacity={this.state.opacity.Cases} stroke="#ffa500" strokeWidth={3} dot={false} />
                <Line type="monotone" dataKey={this.state.dataKeys.Deaths} strokeOpacity={this.state.opacity.Deaths} stroke="#FF0000" strokeWidth={3} dot={false} />
                <Line type="monotone" dataKey={this.state.dataKeys.Recovered} strokeOpacity={this.state.opacity.Recovered} stroke="#82ca9d" strokeWidth={3} dot={false} />
              </LineChart>
            </ResponsiveContainer>
            : ''
        }

      </div>
    );
  }
}

export default ChartsData;