import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import axios from 'axios'
import get from 'lodash.get'
import { MAPS_API_KEY, ADDRESSES } from '../../constants'

export class MapContainer extends Component {
  mapStyles = {
    position: 'relative',
    height: '80%',
    width: '80%',
    margin: '0 auto'
  }

  state = {
    geocodeResponse: []
  }

  async componentDidMount () {
    try {
      const promiseArray = ADDRESSES.map(item => axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
          address: item.address,
          key: MAPS_API_KEY
        }
      }))
      const result = await axios.all(promiseArray)
      this.setState({
        geocodeResponse: result
      })
    } catch (error) {
      console.error('there was an error', error)
    }
  }

  render () {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={this.mapStyles}
        initialCenter={{ lat: 51.5085, lng: -0.1249 }}
      >
        {this.state.geocodeResponse.map(item => {
          const result = get(item, 'data.results[0]', [])
          return (
            <Marker
              title={result.formatted_address}
              name={result.formatted_address}
              position={result.geometry.location}
            />
          )
        })}
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: MAPS_API_KEY
})(MapContainer)
