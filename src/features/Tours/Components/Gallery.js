import React from 'react'
const photos = [
    {
        name: require('../../../assets/img/homegallery/p1.jpg')
    },
    {
        name: require('../../../assets/img/homegallery/p2.jpg')
    },
    {
        name: require('../../../assets/img/homegallery/p3.jpg')
    },
    {
        name: require('../../../assets/img/homegallery/p4.jpg')
    },
    {
        name: require('../../../assets/img/homegallery/p5.jpg')
    },
    {
        name: require('../../../assets/img/homegallery/p6.jpg')
    },
];
const gallery = props => {
    return (
        <div className="container p-0">
            <div style={{ fontSize: 20, fontWeight: 'bold' }}>OUR GALLERY</div>
            <div className="row">

                {
                    photos.map((photo, index) => (
                        <div  className="col-lg-4 col-md-4 col-sm-6 img-hover-zoom p-3" key={index}>
                            <img style={{ height: "200px", maxWidth: "300px", minWidth: "100%" }} src={photo.name} alt=""></img>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default gallery