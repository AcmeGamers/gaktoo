import React from "react";
import Card from "../../components/card/Card";
//
import steps from "./steps.js";
//
const ResultFront = () => {
  function createFrontCard(step){
    return(<Card 
      key={step.id}
      title={step.title}
      desc={step.desc}
      img={step.imgURL}
      course={step.course}
      mentor={step.mentor}
      student={step.student} />)
  }
  
    return (
      <div className="wow fadeInUp" data-wow-duration="2s">
        {steps.map(createFrontCard)}
        
      </div>
    );
  };

export default ResultFront;
