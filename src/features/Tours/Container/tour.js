import React, { useState } from 'react'
import MainImage from '../../Common/MainImageContainer'
import place from '../../../assets/img/destination/bagan.jpg'
import TourPackage from '../tour_packages'
import AddNewTour from '../AddNewTour'
import { withRouter, Route} from 'react-router-dom'

const tourArr = [
    {
        planName: "Advanture",
        price: 700,
        promotionPrice: 650,
        superbRating: "8.0",
        description: "Welcome from Advanture",
        duration: "10",
        availablePerson: "12",
        image: require('../../../assets/img/homegallery/p1.jpg'),
        destination: 'Yangon'
    },
    {
        planName: "Super Trip",
        price: 750,
        promotionPrice: 700,
        superbRating: "9.0",
        description: "Welcome from Super Trip",
        duration: "10",
        availablePerson: "12",
        image: require('../../../assets/img/homegallery/p2.jpg'),
        destination: 'Mandalay'
    },
    {
        planName: "Paradise",
        price: 850,
        promotionPrice: 750,
        superbRating: "9.5",
        description: "Welcome from Paradise",
        duration: "10",
        availablePerson: "12",
        image: require('../../../assets/img/homegallery/p3.jpg'),
        destination: 'Kalaw'
    },
    {
        planName: "Go Pagoda",
        price: 670,
        promotionPrice: 600,
        superbRating: "9.0",
        description: "Welcome from Go Pagoda",
        duration: "10",
        availablePerson: "12",
        image: require('../../../assets/img/homegallery/p4.jpg'),
        destination: 'Taung Gyi'
    },
    {
        planName: "Best Beach Ever",
        price: 1000,
        promotionPrice: 950,
        superbRating: "8.9",
        description: "Welcome from Best Beach Ever",
        duration: "10",
        availablePerson: "12",
        image: require('../../../assets/img/homegallery/p5.jpg'),
        destination: 'Magway'
    },
    {
        planName: "Ancient Place Collection",
        price: 900,
        promotionPrice: 800,
        superbRating: "9.9",
        description: "Welcome from Ancient Place Collection",
        duration: "10",
        availablePerson: "12",
        image: require('../../../assets/img/homegallery/p6.jpg'),
        destination: 'Popa'
    },
];

const tours = (props) => {
    const newRoute = () => {
        props.history.push('/addnewtour')
    }
    return (
        <div>
            <MainImage mainImage={place} text="BEST SELLING TOURS"></MainImage>
            <div className="pr-3" style={{float:"right"}}>
                <button type="button" className="btn btn-primary" onClick={()=>newRoute()}>Add New Tour</button>
            </div>
            <TourPackage tourArr={tourArr}></TourPackage>
        </div>
    )
}

export default withRouter(tours)