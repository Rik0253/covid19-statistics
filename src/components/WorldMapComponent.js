import React, { Component } from 'react'
import 'leaflet/dist/leaflet.css';
import { Map, GeoJSON } from 'react-leaflet';
import { format } from 'date-fns/esm';


export default class componentName extends Component {    

    countryStyle = {      
      color: "black",
      width: "2"

    }

    onEachCountry = (country, layer) => {
      const countryName = country.properties.ADMIN;
      console.log(layer);
      layer.options.fillColor = country.properties.countryColor;
      layer.options.fillOpacity = 0.8;
      
      if(country.properties.covData.length > 0){        
        const countryFlag = country.properties.covData[0].countryInfo.flag;
        const popupContent = `<img src="${countryFlag}" width="32" height="32"> ${country.properties.ADMIN} <br> Total Cases: ${country.properties.covData[0].cases} <br> Total Recovered: ${country.properties.covData[0].recovered} <br> Total Deaths: ${country.properties.covData[0].deaths} <br> Updated at: <strong>${format(new Date(country.properties.covData[0].updated),'dd-MM-yyyy H:m')}</strong>`;  
        layer.bindPopup(popupContent);

      }else{
        const popupContent = countryName;
        layer.bindPopup(popupContent);
      }
      
      
     
    }

    render() {
        return (
          <Map style={{height: "80vh", backgroundColor: "white"}} zoom={3} center={[0, 0]}>
            <GeoJSON style={this.countryStyle} data={this.props.countries} onEachFeature={this.onEachCountry}>

            </GeoJSON>
          </Map>
        )
    }
}
