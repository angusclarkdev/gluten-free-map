import React, { Component } from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react'
import { MAPS_API_KEY } from '../../constants'

export class MapContainer extends Component {
  mapStyles = {
    position: 'relative',
    height: '80%',
    width: '80%',
    margin: '0 auto'
  }

  render () {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={this.mapStyles}
        initialCenter={{ lat: 51.5085, lng: -0.1249 }}
      />
    )
  }
}

export default GoogleApiWrapper({
  apiKey: MAPS_API_KEY
})(MapContainer)
