import React from "react"
import { connect } from "react-redux"
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

import { fetchUser } from "../actions/userActions"
import { fetchTweets } from "../actions/tweetsActions"

@connect((store) => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    tweets: store.tweets.tweets,
  };
})


// render(map, document.getElementById('map-container'));
export default class Layout extends React.Component {
  render() {
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
    return map
  }
}
