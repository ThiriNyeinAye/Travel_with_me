import React, { useState } from 'react'
import { color } from '../../../config/color'
import { Link } from 'react-router-dom'
import TourPlan from '../Components/TourPlan'
import Information from '../Components/Information'
import Location from '../Components/Location'
import Gallery from '../Components/Gallery'
import information from '../Components/Information'
import tourPlan from '../Components/TourPlan'

const infoAry = [
    {   id:  1,
        pkgName: "Adventure",
        price: 245,
        description: "Embark on a memorable adventure climbing Mt. Zwegabin Explore the beautiful hill station Hpa An Have fun visiting caves around Hpa An",
        descriptionDetail: "Bagan is a great destination for travellers all year round, so go ahead and plan your vacation whenever you wish.  Bagan cuisine is considered to be the true taste of Asia.It combines the best of Indian, Chinese and Thai cuisine.",
        day: "10",
        age: "12",
        location: "Myanmar",
        maintour: "Adventure Tour",
        destination: "Myanmar, Hpa An",
        depature: "Yangon , Myanmar",
        depatureTime: "9:15AM",
        returnTime: "8:30PM",
        locationDetail: "You will have to head to Hpa An, a small town surrounded by limestone cliffs located about 6 hours’ drive from Yangon. You will surely fall in love with Hpa An at first sight. Walk around town and enjoy the greenery. You can visit the morning market and Shwe Yin Myaw Paya."
    },
    {
        id:  2,
        pkgName: "Super Trip",
        price: 245,
        description: "Bagan is typically known as a sea of temples by people across the world. It has the largest and densest concentration of Buddhist temples, pagodas, stupas and ruins in the world.",
        descriptionDetail: "Bagan is a great destination for travellers all year round, so go ahead and plan your vacation whenever you wish.  Bagan cuisine is considered to be the true taste of Asia.It combines the best of Indian, Chinese and Thai cuisine.",
        day: "10",
        age: "2",
        location: "Myanmar",
        maintour: "Historical Tour",
        destination: "Myanmar, Bagan",
        depature: "Yangon , Myanmar",
        locationDetail: "Located in Central Myanmar, only 4 hours away from Mandalay, Bagan is one of the world’s greatest archaeological sites. Visit this amazing historical town hosting more than 2,200 temples big and small. Set amongst thick greenery on the Ayeyarwady river basin with misty mountains at a distance, Bagan will surely enchant you with its mystical appearance. The temples rise above the canopy of trees, presenting a picture-perfect scenery to visitors.",
        depatureTime: "9:15AM",
        returnTime: "8:30PM",
    },
    {
        id:  3,
        pkgName: "Go Pagoda",
        price: 245,
        description: "Bagan is typically known as a sea of temples by people across the world. It has the largest and densest concentration of Buddhist temples, pagodas, stupas and ruins in the world.",
        descriptionDetail: "Bagan is a great destination for travellers all year round, so go ahead and plan your vacation whenever you wish.  Bagan cuisine is considered to be the true taste of Asia.It combines the best of Indian, Chinese and Thai cuisine.",
        day: "10",
        age: "2",
        location: "Myanmar",
        maintour: "Historical Tour",
        destination: "Myanmar, Bagan",
        depature: "Yangon , Myanmar",
        depatureTime: "9:15AM",
        locationDetail: "Located in Central Myanmar, only 4 hours away from Mandalay, Bagan is one of the world’s greatest archaeological sites. Visit this amazing historical town hosting more than 2,200 temples big and small. Set amongst thick greenery on the Ayeyarwady river basin with misty mountains at a distance, Bagan will surely enchant you with its mystical appearance. The temples rise above the canopy of trees, presenting a picture-perfect scenery to visitors.",
        returnTime: "8:30PM",
    },
    {    id:  4,
        pkgName: "KAWTHAUNG",
        price: 245,
        description: "To enjoy diving in Tanintharyi Region, you can make Kawthaung your base. Start your diving expedition by visiting Black Rock, located only 160 kilometres north of Kawthaung. Black Rock is a fish magnet and famous for having an incredible collection of mobula rays. People have had memorable encounters with manta rays and eagle rays here. Take a dive and walk on carpets of brown disc anemones and purple soft corals. There are also blue, yellow, green and orange soft tube corals, as well as banks for spotting big-eye trevally, pompanos and banded sea snakes.",
        descriptionDetail: "Dive at 3 diving sites – Black Rock, Hidden Lagoon and High Rock. Visit the natural heart-shaped lagoon at Cocks Comb Island.Be mesmerised by the amazing aquatic life.",
        day: "3",
        age: "12",
        location: "Myanmar",
        maintour: "Historical Tour",
        destination: "Myanmar, Bagan",
        depature: "Yangon , Myanmar",
        depatureTime: "9:15AM",
        returnTime: "8:30PM",
        locationDetail: " Tanintharyi Region, you can make Kawthaung your base. Start your diving expedition by visiting Black Rock, located only 160 kilometres north of Kawthaung. "
    },
    {   
        id:  5,
        pkgName: "Ancient Place Collector",
        price: 245,
        description: "Explore the best of the cultural capital of the country. Take a day trip to Amrapura.`Enjoy the best of Myanmar’s pagoda",
        descriptionDetail: "travel around this cultural capital of Myanmar and enjoy yourself. Visit Mahamuni Buddha Temple, Shwe In Bin Kyaung monastery and the Mandalay Palace area. You will be able to visit Shwenandaw Monastery, Atumashi Kyaung Monastery as well as explore the palace. After this, head to Mandalay Hill and visit Kuthodow Pagoda and Sandamuni Paya on the way. Watch the mesemerising sunset from Mandalay Hill.",
        day: "3",
        age: "12",
        location: "Myanmar",
        maintour: "Historical Tour",
        destination: "Myanmar, Mandalay",
        depature: "Yangon , Myanmar",
        depatureTime: "9:15AM",
        returnTime: "8:30PM",
        locationDetail: "Mandalay is the second-largest city in Myanmar, after Yangon. Located on the east bank of the Irrawaddy River, 716 km (445 mi) north of Yangon, the city has a population of 1,225,553 (2014 census)"
    },
]

const SubNav = props => {
    const [name, setName] = useState("information")
    const { id } = props
    const navRoute = (rname) => {
        setName(rname);
    }
    return (
        <div>

            <div style={{ backgroundColor: color.subNav}} className="pointer" >
                {/* <div className="row border border-danger" style={{ backgroundColor: color.subNav, height: 70 }}> */}
                <ul className="nav" >
                    <li className="nav-item col-lg-3 col-md-6 col-sm-6 cols-xs-12 pointer">
                        {
                        name === "information" ? <div className="nav-link choose-nav" onClick={() => navRoute("information")}><i class="fa fa-eye pr-2"></i>Information</div> :<div className="nav-link" style={{ color: color.subNavText }} onClick={() => navRoute("information")}><i class="fa fa-eye pr-2"></i>Information</div>
                        }
                    </li>
                    <li className="nav-item col-lg-3 col-md-6 col-sm-6 cols-xs-12 pointer">
                        {
                         name === "tourplan" ? <div className="nav-link choose-nav" onClick={() => navRoute("tourplan")}><i className="fa fa-map pr-2"></i>Tour Plan</div> : <div className="nav-link " style={{ color: color.subNavText }} onClick={() => navRoute("tourplan")}><i className="fa fa-map pr-2"></i>Tour Plan</div>
                        }
                    </li>
                    <li className="nav-item col-lg-3 col-md-6 col-sm-6 cols-xs-12 pointer">
                        {
                         name === "location" ? <div className="nav-link choose-nav" onClick={() => navRoute("location")}> <i className="fa fa-map-marker pr-2"></i>Location</div> : <div className="nav-link " style={{ color: color.subNavText }} onClick={() => navRoute("location")}> <i className="fa fa-map-marker pr-2"></i>Location</div>
                        }
                    </li>
                    <li className="nav-item col-lg-3 col-md-6 col-sm-6 cols-xs-12 pointer">
                        {
                          name === "gallery" ? <div className="nav-link choose-nav" onClick={() => navRoute("gallery")}> <i class="fa fa-image pr-2"></i>Gallery</div> : <div className="nav-link" style={{ color: color.subNavText }} onClick={() => navRoute("gallery")}> <i class="fa fa-image pr-2"></i>Gallery</div>
                        }
                    </li>
                </ul>
                {/* </div> */}
            </div>
            <div>
                {
                    name === "information" ? <Information infoAry={id == 1 ? infoAry[0] : id == 2 ? infoAry[1] : id == 3 ? infoAry[2] :  id == 4 ? infoAry[3] : id == 5 ? infoAry[4] : id == 6 ? infoAry[4] : null }/> : name === "tourplan" ? <TourPlan /> : name === "location" ? <Location locationInfo={locationInfo} /> : <Gallery />
                }
            </div>
        </div>
//   infoAry={id === 1 ? infoAry[0] : id === 2 ? infoAry[1] : id === 3 ? infoAry[2] :  id === 4 ? infoAry[3] : id === 5 ? infoAry[4] : id === 6 ? infoAry[4] : null }
    )
}

export default SubNav

// const InfoAry = {
//     pkgName: "Bagan Thindingyut Package",
//     price: 245,
//     description: "Bagan is typically known as a sea of temples by people across the world. It has the largest and densest concentration of Buddhist temples, pagodas, stupas and ruins in the world.",
//     descriptionDetail: "Bagan is a great destination for travellers all year round, so go ahead and plan your vacation whenever you wish.  Bagan cuisine is considered to be the true taste of Asia.It combines the best of Indian, Chinese and Thai cuisine.",
//     day: "10",
//     age: "2",
//     location: "Myanmar",
//     maintour: "Historical Tour",
//     destination: "Myanmar, Bagan",
//     depature: "Yangon , Myanmar",
//     depatureTime: "9:15AM",
//     returnTime: "8:30PM",
// }


const locationInfo ={
    locationDetail:"Located in Central Myanmar, only 4 hours away from Mandalay, Bagan is one of the world’s greatest archaeological sites. Visit this amazing historical town hosting more than 2,200 temples big and small. Set amongst thick greenery on the Ayeyarwady river basin with misty mountains at a distance, Bagan will surely enchant you with its mystical appearance. The temples rise above the canopy of trees, presenting a picture-perfect scenery to visitors."
}
