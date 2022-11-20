import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// const submittedValues = false;

// function showResult(){
//   return
//    <div> {
//   submittedValues === frontend ? : <Navigate to="/result1" /> : <Navigate to="/result2" />
//   }
//   </div>
//  }

export default function Form() {
  return (
    <div className="form-page wow fadeInUp">
      <form>
        <div className="form-container  wow fadeInUp animated delay-2s">
          <input className="name-input" type="text" placeholder="your name" />

          <label className="wow fadeInUp animated delay-2s">
            <h3>What is your purpose?:</h3>
            <input type="checkbox" name="goal" value="job" />
            To improve skills and get a job/raise salary
            <input type="checkbox" name="goal" value="school" />
            To improve skills while in school
            <input type="checkbox" name="goal" value="business" />
            To start my own business
          </label>
        </div>

        <div className="form-container wow fadeInUp animated delay-2s">
          <label>
            <h3>What is your goal?:</h3>
            <input type="radio" name="goal" value="frontend" />
            Frontend
            <input type="radio" name="goal" value="backend" />
            Backend
            <input type="radio" name="goal" value="fullstack" />
            Full-Stack Developer
            <p>Data Scientist</p>
            <p>UI/UX Designer</p>
          </label>
        </div>

        {/* saving question for later use : toomany questions 
        <div className="form-container wow shake">
          <label>
            What is your current level?:
            <input type="radio" name="goal" value="fullstack" />
            None
            <input type="radio" name="goal" value="frontend" />
            1-3 months online/offline course
            <input type="radio" name="goal" value="fullstack" />
            1-3 years junior/intermediate
            <input type="radio" name="goal" value="fullstack" />
            3+ years mid/senior
          </label>
        </div> */}

        <div className="form-container wow fadeInUp animated delay-2s">
          <label>
            <h3>Pick your aimed duration to achieve your goal:</h3>
            <select
              name="duration"
              // value={this.state.value}
              // onChange={this.handleChange}
            >
              <option value="3months">3 Months</option>
              <option value="6months">6 Months</option>
              <option value="9month">9 Months</option>
            </select>
          </label>

          <button type="submit" onClick="">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
