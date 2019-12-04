import React from 'react'
import {color} from '../../../config/color'
const Location = props => {
    const {locationInfo} = props    
    return (
        <div className="pt-5">
            <h3>TOUR LOCATION</h3>
            <div style={{ fontSize: 16, color: color.subNavText }} >
                {locationInfo.locationDetail}
            </div>
        </div>
    )

}

export default Location