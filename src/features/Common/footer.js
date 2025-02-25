import React from 'react'
import { color } from '../../config/color'
import { Link } from 'react-router-dom'
import Gallery_1 from '../../assets/img/footer-gallery-3.jpg'
const footer = () => {
    return (
        <div className="container-fluid pt-5 pb-5" style={{ backgroundColor: color.footerBackground }}>
            <div className="row">
                <div className="col-sm-3 ">
                    <div className="p-3" style={{ color: color.textWhite, whiteSpace: 'nowrap' }}>KUMO TRAVEL</div>
                    <div className="p-3" style={{ color: color.textWhite }}>Lorem ipsum dolor sit amet, ius ei minim ignota saperet. Agam persequeris ea sea mei no hend.</div>
                </div>
                <div className="col-sm-3  ">
                    <div className="p-3" style={{ color: color.textWhite, whiteSpace: 'nowrap' }}>USEFUL LINKS</div>
                    <ul className="navbar-nav p-3">
                        <li className="nav-item">
                            <Link style={{color: '#FF5722'}} className="nav-link js-scroll-trigger" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link style={{color: '#FF5722'}} className="nav-link js-scroll-trigger" to="/destination">Destination</Link>
                        </li>
                        <li className="nav-item">
                            <Link style={{color: '#FF5722'}} className="nav-link js-scroll-trigger" to="/tour">Tours</Link>
                        </li>
                        <li className="nav-item">
                            <Link style={{color: '#FF5722'}} className="nav-link js-scroll-trigger" to="/about">About</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-sm-3">
                    <div className="p-3" style={{ color: color.textWhite, whiteSpace: 'nowrap' }}>GALLERY</div>
                    <div className="container">
                        <div className="row">
                            {
                                photos.map((photo, index) => (
                                    <div style={{ padding: "2px" }} className="col-lg-2 col-md-5 col-sm-4 col-xs-6 img-hover-zoom" key={index}>
                                        <img style ={{width: '100%', height: '100%'}}src={photo.name} alt=""></img>
                                    </div>
                                ))
                            }
                        </div>


                    </div>
                </div>
                <div className="col-sm-3 ">
                    <div style={{textAlign: 'center'}}>
                    <div className="p-3" style={{ color: color.textWhite }}>WORLDWIDE TOURS</div>
                    <img className="img-fluid" src="https://bridge224.qodeinteractive.com/wp-content/uploads/2018/04/footer-image-1-300x175.png" alt=""></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default footer

const photos = [
    {
        name: require('../../assets/img/homegallery/p1.jpg')
    },
    {
        name: require('../../assets/img/homegallery/p2.jpg')
    },
    {
        name: require('../../assets/img/homegallery/p3.jpg')
    },
    {
        name: require('../../assets/img/homegallery/p1.jpg')
    },
    {
        name: require('../../assets/img/homegallery/p2.jpg')
    },
    {
        name: require('../../assets/img/homegallery/p3.jpg')
    },
    {
        name: require('../../assets/img/homegallery/p1.jpg')
    },
    {
        name: require('../../assets/img/homegallery/p2.jpg')
    },
    {
        name: require('../../assets/img/homegallery/p3.jpg')
    },
    {
        name: require('../../assets/img/homegallery/p1.jpg')
    },
    {
        name: require('../../assets/img/homegallery/p2.jpg')
    },
    {
        name: require('../../assets/img/homegallery/p3.jpg')
    },
];