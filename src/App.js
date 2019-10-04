import React from 'react'
import MapContainer from '@components/MapContainer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

import './index.css'

// API KEY
// const MAPS_API_KEY = 'AIzaSyAEUtSiMvPrHNBTaO4sidp6wztX5J8zCgM'

const App = () => {
  const Wrapper = styled.section`
    position: relative
    vertical-align: middle;
    width: 60%;
    height: 100%;
    margin: 0 auto;
    padding: 1rem;
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
          <Route path='/map'>
            <Filters />
            <MapContainer />
          </Route>
          <Route path='/'>
            <Vibe />
          </Route>
        </Switch>
      </Wrapper>
    </Router>
  )
}

const Vibe = () => {
  const Wrapper = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 auto;

    article {
      flex-basis: 48%;
      width: 50%;
      margin: 1rem 0px;
      height: auto;
      /* height: auto; */
      border: thin solid red;
      /* margin: 1rem; */
      &::before {
        content: '';
        padding-top: 50%;
        display: block;
      }
    }
  `
  return (
    <Wrapper>
      <article>
        {/* image */}
        {/* <img src='http://placehold.it/360x240' alt='' /> */}
      </article>
      <article>
        {/* image */}
        {/* <img src='http://placehold.it/360x240' alt='' /> */}
      </article>
      <article>
        {/* image */}
        {/* <img src='http://placehold.it/360x240' alt='' /> */}
      </article>
      <article>
        {/* image */}
        {/* <img src='http://placehold.it/360x240' alt='' /> */}
      </article>
    </Wrapper>
  )
}
export default App

const Dropdown = (props) => {
  const Select = styled.select`
    font-size: 1rem;
    margin: 16px;
  `
  const options = props.data.map((item, i) => <option key={i} value={item.value}> {item.text} </option>)
  return (
    <Select>
      {options}
    </Select>
  )
}

const Filters = () => {
  const cuisines = [
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
  const prices = [
    { value: 'cheap', text: '£' },
    { value: 'average', text: '££' },
    { value: 'expensive', text: '£££' }
  ]

  return (
    <div>
      <Dropdown data={cuisines} />
      <Dropdown data={prices} />
    </div>
  )
}
