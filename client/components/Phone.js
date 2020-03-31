import React from "react";

export default function Phone(props) {
    return props.phone ? <span className="phone"><a href={`tel:${props.phone}`}><span role="img" aria-label="phone">📞</span> {props.phone}</a></span> : ''

}
