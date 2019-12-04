import React from 'react'
import backgroundImage from '../../../assets/img/homegallery/p4.jpg'
import { color } from '../../../config/color'


const BookingForm = () => {
    return (
        <div style={{ backgroundImage: `url(${backgroundImage})`, height: 500, padding: '30px', width: "100%" }}>
            <form>
                <div style={{ fontSize: 18, marginLeft: 50, color: color.textWhite, fontWeight: 'bold',}}>BOOK THIS TOUR</div>
                <div className="input-group p-2">
                    <input type="text" class="form-control" placeholder="Name*" />
                    <div className="input-group-append">
                        <span className="input-group-text"><i className="fa fa-user"></i></span>
                    </div>
                </div>
                <div className="input-group p-2">
                    <input type="text" className="form-control" placeholder="Email*" />
                    <div className="input-group-append">
                        <span className="input-group-text"><i className="fa fa-envelope"></i></span>
                    </div>
                </div>
                <div className="input-group p-2">
                    <input type="text" class="form-control" placeholder="Confirm Email*" />
                    <div className="input-group-append">
                        <span className="input-group-text"><i className="fa fa-envelope"></i></span>
                    </div>
                </div>
                <div className="input-group p-2">
                    <input type="text" class="form-control" placeholder="Phone" />
                    <div className="input-group-append">
                        <span className="input-group-text"><i className="fa fa-phone"></i></span>
                    </div>
                </div>
                <div className="input-group p-2">
                    <textarea style={{ width: "100%" }} rows="4" cols="30" placeholder="Message *" className="p-2" />
                </div>
                <div className="input-group p-2">
                    <div style={{ backgroundColor: color.red, width: "100%", height: 50, }}><div style={{ color: color.textWhite, marginLeft: "30%", marginRight: "40%", fontSize: 17, marginTop: "2%", marginBottom: "2%", whiteSpace: 'nowrap', textAlign: 'center' }}>BOOK NOW</div></div>
                </div>

            </form>
        </div>
    )

}
export default BookingForm