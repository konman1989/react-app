import React from "react";

import './styles.scss';

function ImageWrapper(props) {
    return <div className={`image-wrapper ${props.imageStyle}`}>
        <img src={props.imageSrc} alt={props.imageName}/>
    </div>
}

export default ImageWrapper;