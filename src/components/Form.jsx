import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
function Form() {
  return (
    <div className="form-page wow fadeInUp">
      <form>
        <div className="form-container  wow fadeInUp animated delay-2s">
          <input className="name-input" type="text" placeholder="your name" />

          <label className="wow fadeInUp animated delay-2s">
            What is your purpose?:
            <input type="checkbox" name="purpose" value="fullstack" />
            To change career to IT
            <input type="checkbox" name="goal" value="frontend" />
            To improve skills and get a job
            <input type="checkbox" name="goal" value="fullstack" />
            To improve skills while in school
            <input type="checkbox" name="goal" value="datascientist" />
            To start my own business
            <input type="checkbox" name="goal" value="fullstack" />
            Hobbyist
          </label>
        </div>

        <div className="form-container wow fadeInUp animated delay-2s">
          <label>
            What is your goal?:
            <input type="radio" name="goal" value="fullstack" />
            Full-Stack Developer
            <input type="radio" name="goal" value="frontend" />
            Frontend
            <input type="radio" name="goal" value="fullstack" />
            Backend
            <input type="radio" name="goal" value="datascientist" />
            Data Scientist
            <input type="radio" name="goal" value="fullstack" />
            UI/UX Designer
          </label>
        </div>

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
        </div>

        <div className="form-container wow fadeInUp animated delay-2s">
          <label>
            Pick your aimed duration to achieve your goal:
            <select
              name="duration"
              // value={this.state.value}
              // onChange={this.handleChange}
            >
              <option value="1month">1-2 Month</option>
              <option value="3months">3 Months</option>
              <option value="6months">6 Months</option>
              <option value="9month">9 Months</option>
            </select>
          </label>

          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
