import React, { Component } from 'react'
// import Posts from './components/Posts'
// import HomeButton from './Routing/RoutingPage'
import { BrowserRouter } from "react-router-dom";
import RoutingPage from './Routing/RoutingPage';


export default class App extends Component {
  render() {
    const Style = {
      backgroundColor : 'red',
      
    }
    return (
      <div className=''>
        {/* <Posts /> */}
        <HomeButton />
        <BrowserRouter>
          <RoutingPage />
        </BrowserRouter>
      </div>
    )
  }
}
