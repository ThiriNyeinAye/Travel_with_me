import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import HomeContainer from '../Home/Container/Homecontainer';
import Destination from '../Destination/destination';
import Tours from '../Tours/Container/tour';
import Tourdetail from '../Tours/Container/tourDetail';
import About from '../About/Container/AboutContainer'
import DestinationDetail from '../Destination/destinationdetail/destinationdetail'
import ToTop from '../Home/ScrollTopButton';
import AddNewTour from '../Tours/AddNewTour';
import AddNewDestination from '../Destination/AddNewDestination';

const Routing = props => {
    return (
        <div>
            <ToTop></ToTop>
            <Switch>
            <Route path='/' exact component={HomeContainer} />
            <Route path='/destination' exact component={Destination} />
            <Route path='/tour' exact component={Tours} />
            <Route path='/tour/:id' exact component={Tourdetail} />
            <Route path='/about' exact component={About} />
            <Route path="/destination/:name/:id" component={DestinationDetail} />
            <Route path='/addnewtour' component={AddNewTour} />
            <Route path='/addnewdestination' component={AddNewDestination}/>
            <Redirect to='/' />
        </Switch>
        </div>
        
    )
}

export default Routing