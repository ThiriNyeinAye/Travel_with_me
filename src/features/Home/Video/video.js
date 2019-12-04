import React from 'react'

const video = (props) => {

    return (
        <div
        style={{
          clear: 'both',
          paddingTop: 0,
          height: "650px"
        }} >
            <iframe
                title="ok"
                style={{
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                }}
                src="https://www.youtube.com/embed/DX48mJjL7oU"
                frameBorder="0"
                allowtransparency="true"
            />
            {/* <button className="videoPoster" onClick={()=>handleClick()}></button> */}
    
        </div>
    )
}

export default video

