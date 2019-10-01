import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import axios from 'axios'
import { MAPS_API_KEY, ADDRESSES } from '../../constants'

export class MapContainer extends Component {
  mapStyles = {
    position: 'relative',
    height: '80%',
    width: '80%',
    margin: '0 auto'
  }

  state = {
    geocodeRes: []
  }

  async componentDidMount () {
    // try {
    const res = ADDRESSES.map(async (item, i) => {
      axios.all([
        await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
          params: {
            address: item.address,
            key: MAPS_API_KEY
          }
        })
      ])
    })

    console.info(res)
    // const res = await axios.al/l([
    // Array.from(ADDRESSES)axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
    //     params: {
    //       address: '332KenningtonLnLambethLondonSE115HY',
    //       key: MAPS_API_KEY
    //     }
    //   })
    //   this.setState({
    //     geocodeRes: res.data.results
    // //   })
    //   console.log(res)
    // } catch (error) {
    //   console.error('there was an error with your request', error)
    // }
  }

  render () {
    const { geocodeRes } = this.state
    console.info(geocodeRes)
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={this.mapStyles}
        initialCenter={{ lat: 51.5085, lng: -0.1249 }}
      >
        {geocodeRes.map(item => (
          <Marker
            title={item.formatted_address}
            name={item.formatted_address}
            position={item.geometry.location} />
        ))}
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: MAPS_API_KEY
})(MapContainer)
