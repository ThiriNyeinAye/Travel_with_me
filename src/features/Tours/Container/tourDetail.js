import React from 'react'
import MainImage from '../../Common/MainImageContainer'
import BookingForm from '../../Tours/Components/BookingForm'
import SubNavTour from '../../Tours/Components/SubNavTour'
import place from '../../../assets/img/destination/bagan.jpg'
const TourInfo = (props) => {
    const id = props.match.params.id;
    return (
        <div>
            <MainImage mainImage={place} text="BEST SELLING TOURS"></MainImage>
            <div className="container">
                <div className="row pt-5">
                    <div className="col-lg-8 col-sm-12">
                        <SubNavTour id={id}/>
                    </div>
                    <div className="col-lg-4 col-sm-12 p-2">
                        <BookingForm />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default TourInfo