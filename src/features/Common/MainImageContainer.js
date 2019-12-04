import React from 'react'
import { color } from '../../config/color'

const TopView = props => {
    const { mainImage, text } = props
    return (
        <div>
            <img src={mainImage} alt={'kal kya '} style={{ width: '100%', height: '50vh' }} />
            <h1 style={{
                position: "absolute",
                top: "25%",
                left: "50%",
                fontSize:"3vw",
                fontWeight:"bold",
                maxWidth: "740px",
                color: "rgb(255, 255, 255)",
                letterSpacing: "3px",
                textTransform: "uppercase",
                transform: "translate(-50%, 0px)",
                lineHeight: '70px'
            }}>{text}</h1>
        </div>
    )
}
export default TopView