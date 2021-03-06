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
    var position = [20, 30];
    var map = (
      <Map center={position} zoom={2}>
        <TileLayer
          url='https://maps.terravion.com/apidemo/v1/baseLayers/tiles/{z}/{x}/{y}.jpg'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          tms='true'
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
