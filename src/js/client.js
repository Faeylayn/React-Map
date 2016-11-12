import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

import Layout from "./components/Layout.js"
import store from "./store"

const app = document.getElementById('app')

// ReactDOM.render(<Provider store={store}>
//   <Layout />
// </Provider>, app);

const position = [51.505, -0.09];
const map = (
  <Map center={position} zoom={13}>
    <TileLayer
      url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
    <Marker position={position}>
      <Popup>
        <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
      </Popup>
    </Marker>
  </Map>
);

ReactDOM.render(map, document.getElementById('map-container'));
