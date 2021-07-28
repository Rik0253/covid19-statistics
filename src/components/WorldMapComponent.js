import React, { Component } from 'react'
import 'leaflet/dist/leaflet.css';
import { Map, GeoJSON } from 'react-leaflet';
import MapPopupComponent from './MapPopupComponent';
import ReactDOMServer from 'react-dom/server';


export default class componentName extends Component {    

    countryStyle = {      
      color: "black",
      width: "2"

    }

    onEachCountry = (country, layer) => {      
      layer.options.fillColor = country.properties.countryColor;
      layer.options.fillOpacity = 0.8;
      const popupContent = ReactDOMServer.renderToString(
        <MapPopupComponent data={country.properties} />
      );
      layer.bindPopup(popupContent);     
     
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
