import React from "react";

import './styles.scss'

function ContentWidthLimiter(props) {
    return <div className="content-container">{props.children}</div>
}

export default ContentWidthLimiter;