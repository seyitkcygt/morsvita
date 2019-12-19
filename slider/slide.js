import React from 'react'

const Slide = ({image}) => {

    const style = {
        backgroundImage:`url(${image})`,
        backgroundSize:"cover",
        backgroundRepeat : "no-repeat",
        backgrounPosition : "50% 60%"
    }
    return(
        <div className="slide" style={style}></div>
    )
}

export default Slide;