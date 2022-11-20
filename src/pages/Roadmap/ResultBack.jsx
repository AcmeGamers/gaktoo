import React from "react";
import Card from "../../components/card/Card";
import backsteps from "./backsteps.js";

const ResultBack = () => {

function createCard(backstep){
  return(<Card 
    className={backstep.className}
    key={backstep.id}
    title={backstep.title}
    img={backstep.imgURL}
    course={backstep.course}
    mentor={backstep.mentor}
    student={backstep.student} />)
}

  return (
    <div className="wow fadeInUp" data-wow-duration="4s">
      {backsteps.map(createCard)}
      
    </div>
  );
};

export default ResultBack;
