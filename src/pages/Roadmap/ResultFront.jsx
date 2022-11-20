import React from "react";
import Card from "../../components/card/Card";
//
import steps from "./steps.js";
//
const ResultFront = () => {
  return (
    <div className="wow fadeInUp" data-wow-duration="4s">
      <Card
        // style={{ theme: "theme2" }}
        title={steps[0].title}
        img={steps[0].imgURL}
        course={steps[0].course}
        mentor={steps[0].mentor}
        student={steps[0].student}
      />
      <Card
        title={steps[1].title}
        img={steps[1].imgURL}
        course={steps[1].course}
        mentor={steps[0].mentor}
        student={steps[0].student}
      />
      <Card
        title={steps[2].title}
        img={steps[2].imgURL}
        course={steps[2].course}
        mentor={steps[0].mentor}
        student={steps[0].student}
      />
    </div>
  );
};

export default ResultFront;
