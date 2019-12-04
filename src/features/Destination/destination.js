import React from 'react'
import { color } from '../../config/color'
import { Figure } from './Component/ImageFigure'
import Mainimage from '../Common/MainImageContainer'
import beach from '../../assets/img/homegallery/tour.jpg'
import { withRouter } from 'react-router-dom'


const data = [
    { imgName: 'bagan.jpg', name: 'BAGAN' },
    { imgName: 'inle.jpg', name: 'INLE'},
    { imgName: 'inndawgyi.jpg', name: 'INNDAWGYI'},
    { imgName: 'kalaw.jpg', name: 'KALAW'},
    { imgName: 'mandalay.jpg', name: 'MANDALAY'},
    { imgName: 'ngwesaung.jpg', name: 'NGWE SAUNG'},
    { imgName: 'naypyitaw.jpg', name: 'NAYPYITAW'},
    { imgName: 'ngapali.jpg', name: 'NGAPALI'},
    { imgName: 'pyinoolwin.jpg', name: 'PYINOOLWIN'},
    { imgName: 'yangon.jpg', name: 'YANGON', country: "myanmar" },
    { imgName: 'loikaw.jpg', name: 'LOIKAW'},
    { imgName: 'popa.jpg', name: 'POPA'},
    { imgName: 'mtvictoria.jpg', name: 'MT VICTORIA'},
    { imgName: 'kyaingtong.jpg', name: 'KYAING TONG'},
    { imgName: 'ngwesaung.jpg', name: 'NGWE SAUNG'},
    { imgName: 'minbu.jpg', name: 'MINBU'},
    { imgName: 'meiktila.jpg', name: 'MEIKTILA'},
    { imgName: 'kawthaung.jpg', name: 'KAWTHAUNG' }
]


const Destination = (props) => {
    //////for add new destination///////
    const newRoute = () => {
        props.history.push('/addnewdestination');
    }

    const goDetail = (country,id) => {
        props.history.replace(`destination/${country.toLowerCase().replace(/ +/g, "")}/${id+1}`)
    }
    return (
        <div>
            <Mainimage mainImage={beach} text="Top Destinations" ></Mainimage>
            <div className="pr-3" style={{float:"right"}}>
                <button type="button" className="btn btn-primary" onClick={()=>newRoute()}>Add New Destination</button>
            </div>
            <div className="container pt-5 p-2" style={{ maxWidth: '1390px'}}>
                <div style={{textAlign: "center", margin: "20px !important"}}>
                    {
                        data.map((v, k) =>
                            <div style={{float: 'left'}}  onClick={() => goDetail(v.name,k)} className='col-md-4 col-xl-2 col-lg-3 col-sm-6 col-xs-12 p-3 pointer' key={k}>
                                <div>
                                <Figure className="des-img-hover-zoom" imageName={v.name} imagePath={v.imgName} />
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default withRouter(Destination)