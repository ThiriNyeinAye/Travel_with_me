import React from 'react'
import { color } from '../../../config/color'
import Gallery from '../../Tours/Components/Gallery'

const information = props => {
    const { pkgName, price, description, descriptionDetail, day, age, location,
        maintour, destination, depature, depatureTime, returnTime, included } = props.infoAry
    return (

        <div className="p-0">
            <div className="d-flex">
                <h3 className="pr-3 pt-3 pb-3" >
                    {pkgName}
                </h3>
                <div className="p-3  d-flex justify-content-end" >
                    <h3 style={{ color: color.red }}>${price}</h3>
                    <div className="pt-2" style={{ whiteSpace: "nowrap", color: color.detailText }}>/per person</div>
                </div>
            </div>

            <div style={{ fontSize: 18, color: color.detailText }}>
                {description}
            </div>
            <div style={{ fontSize: 16, paddingTop: "20px", color: color.detailText }}>
                {descriptionDetail}
            </div>

            <div className="d-flex pt-3">
                <div className="d-flex p-2">
                    <i className="fa fa-clock-o pt-1 pr-2"></i>
                    <div style={{ fontSize: 16 }}>{day}Days</div>
                </div>
                <div className="d-flex p-2">
                    <i className="fa fa-user pt-1 pr-2"></i>
                    <div style={{ fontSize: 16 }}>+{age} Age</div>
                </div>
                <div className="d-flex p-2">
                    <i className="fa fa-map-marker pt-1 pr-2"></i>
                    <div style={{ fontSize: 16 }}>{location}</div>
                </div>
                <div className="d-flex p-2">
                    <i className="fa fa-building-o pt-1 pr-2"></i>
                    <div style={{ fontSize: 16 }}>{maintour}</div>
                </div>
            </div>

            <div style={{ width: "100%", }} className="pb-3 pt-3">
                <div className="d-flex pb-2">
                    <div style={{ width: "50%", paddingTop: "30px", fontWeight: 'bolder' }}>
                        Destination
                    </div>
                    <div style={{ paddingTop: "30px", color: color.detailText }}>
                        {destination}
                    </div>
                </div>
                <div className="d-flex pb-2">
                    <div style={{ width: "50%", paddingTop: "30px", fontWeight: 'bolder' }}>
                        Depature
                    </div>
                    <div style={{ paddingTop: "30px", color: color.detailText }}>
                        {depature}
                    </div>
                </div>
                <div className="d-flex pb-2">
                    <div style={{ width: "50%", paddingTop: "30px", fontWeight: 'bolder' }}>
                        Depature Time
                    </div>
                    <div style={{ paddingTop: "30px", color: color.detailText }}>
                        Please arrive by {depatureTime}
                    </div>
                </div>
                <div className="d-flex pb-2">
                    <div style={{ width: "50%", paddingTop: "30px", fontWeight: 'bolder' }}>
                        Return Time
                    </div>
                    <div style={{ paddingTop: "30px", color: color.detailText }}>
                        Approximately {returnTime}
                    </div>
                </div>
            </div>
            <Gallery />

        </div >
    )
}
export default information

