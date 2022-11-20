import React from "react";
import Card from "../../components/card/Card";
import backsteps from "./backsteps.js";

const ResultBack = () => {

function createCard(){
  return(<Card title={backsteps[0].title}
    img={backsteps[0].imgURL}
    course={backsteps[0].course}
    mentor={backsteps[0].mentor}
    student={backsteps[0].student} />)
}

  return (
    <div className="wow fadeInUp" data-wow-duration="4s">
      {backsteps.map(createCard)}
    </div>
  );
};

export default ResultBack;
