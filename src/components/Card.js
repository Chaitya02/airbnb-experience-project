import React from "react"

export default function Card(props) {
    console.log(props)
    return (
        <div className="card">
            {props.openSpots === 0 && <div className="card-badge">SOLD OUT</div>}
            <img src={`../images/${props.coverImg}`} alt="card-img" className="card-image" />
            <div className="card-stats">
                <img src="../images/star.png" alt="star-img" className="card-star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card-title">{props.title}</p>
            <p className="card-price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}