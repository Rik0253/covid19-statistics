import React, { Component } from 'react'
import 'leaflet/dist/leaflet.css';
import { Map, GeoJSON } from 'react-leaflet';


export default class componentName extends Component {    

    countryStyle = {
      fillColor: "red",
      color: "black",
      width: "2"

    }

    onEachCountry = (country, layer) => {
      const countryName = country.properties.ADMIN;
      
      if(country.properties.covData.length > 0){
        console.log(country.properties.covData);
        const countryFlag = country.properties.covData[0].countryInfo.flag;
        const popupContent = `<img src="${countryFlag}" width="32" height="32"> ${country.properties.ADMIN} <br> Total Cases: ${country.properties.covData[0].cases} <br> Total Recovered: ${country.properties.covData[0].recovered} <br> Total Deaths: ${country.properties.covData[0].deaths}`;  
        layer.bindPopup(popupContent);
      }else{
        const popupContent = countryName;
        layer.bindPopup(popupContent);
      }
      
      
     
    }

    render() {
        return (
            <div className="container mx-auto">
                <h1 className="text-center p-2">Covid-19 Statistics</h1>
               
                <Map style={{height: "80vh", backgroundColor: "white"}} zoom={3} center={[0, 0]}>
                  <GeoJSON style={this.countryStyle} data={this.props.countries} onEachFeature={this.onEachCountry}>

                  </GeoJSON>
                </Map>
               
            </div>
        )
    }
}
