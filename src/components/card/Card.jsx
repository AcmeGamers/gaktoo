import React from "react";
import "./card.css";
import "../../pages/roadmap/steps";

function Card(props) {
  return (
    <div className="card-container">
      <dl className="card">
        <div className="top">
          <dt className="title">{props.title}</dt>
          <dd className="desc">{props.desc}</dd>
          <img className="circle-img" src={props.img} alt="avatar_img" />
        </div>
        <div className="bottom theme1">
          <p className="info">{props.course}</p>
          <p className="info">
            {props.mentor} | {props.student}
          </p>
        </div>
      </dl>
    </div>
  );
}

export default Card;
