import React, { Component } from 'react'
import MapContainer from '@components/MapContainer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
// import VibeCard from '@components/VibeCard'

import './index.css'

// API KEY
// const MAPS_API_KEY = 'AIzaSyAEUtSiMvPrHNBTaO4sidp6wztX5J8zCgM'

const App = () => {
  const Wrapper = styled.section`
    /* background-color: floralwhite; */
    position: relative
    vertical-align: middle;
    width: 60%;
    height: 100%;
    margin: 0 auto;
    padding-top: 1rem;
    /* display: flex; */
    /* flex-direction: column; */
    text-align: center;
  `
  const Title = styled.h1`
    font-size: 2.5rem;
  `
  return (
    <Router>
      <Wrapper>
        <Title> Gluten free restaurants </Title>
        <Switch>
          <Route path='/'>
            <Filters />
            <MapContainer />
          </Route>
        </Switch>
      </Wrapper>
    </Router>
  )
}

export default App

class Dropdown extends Component {
  state = {
    value: this.props.value
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value })
  }

  render () {
    const Select = styled.select`
      font-size: 1rem;
      margin: 16px;
    `
    const options = this.props.data.map((item, i) => {
      return (
        <option
          key={i}
          disabled={item.value.includes('choose')}
          value={item.value}> {item.text}
        </option>
      )
    })
    return (
      <Select defaultValue={this.state.value} onChange={this.handleChange}>
        {options}
      </Select>
    )
  }
}

const Filters = () => {
  const vibes = [
    { value: 'choose your vibe', text: 'Choose your vibe' },
    { value: 'romance', text: 'Romance' },
    { value: 'groups', text: 'Groups' },
    { value: 'open late', text: 'Open late' }
  ]
  const cuisines = [
    { value: 'choose your cuisine', text: 'Choose your cuisine' },
    { value: 'italian', text: 'Italian' },
    { value: 'asian', text: 'East Asian' },
    { value: 'indian', text: 'Indian' },
    { value: 'pizza', text: 'Pizza' },
    { value: 'dessert', text: 'Dessert' },
    { value: 'mexican', text: 'Mexican' },
    { value: 'british', text: 'Traditional british' },
    { value: 'lebanese', text: 'Lebanese' }
  ].sort(function (a, b) {
    if (a.text < b.text) return -1
    if (a.text > b.text) return 1
    return 0
  })

  const Wrapper = styled.div`
    border: thin solid red;
  `
  const prices = [
    { value: 'choose your price', text: 'Choose your price' },
    { value: 'cheap', text: '£' },
    { value: 'average', text: '££' },
    { value: 'expensive', text: '£££' }
  ]

  return (
    <Wrapper>
      <Dropdown data={vibes} value={'choose your vibe'} />
      <Dropdown data={cuisines} value='choose your cuisine' />
      <Dropdown data={prices} value='choose your price' />
    </Wrapper>
  )
}
