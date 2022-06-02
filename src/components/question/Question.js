import React, { useEffect, useState } from "react";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Clock from "./Clock";
import QuestionNumbers from "./questionNumbers";
import './Question.css'

export default function Question() {
  return (
    
      <div className="question-page">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-8 col-sm-12">
              <div className="">
                <Clock />
              </div>

              <div className="m-3">
                <h2>QUESTIONS:</h2>
              </div>
              <div className="m-3 q-label">
                <span className="q-label">Q20</span>
              </div>
              <div className="m-3">
                <h4>Dinyd egorock. Yoloa astrosk. Kolig tetraning</h4>
              </div>




              <div className="justify-content-center text-center mb-5">

                <div class="card option-card ">
                  <div class="card-body d-flex">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <div className="option-number">
                      <h5>
                        A
                      </h5>
                    </div>
                    <h5 className="option-text">
                      This is some text within a card body.
                    </h5>
                  </div>
                </div>
                <div class="card option-card">
                  <div class="card-body d-flex">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />

                    <h5 className="option-number">
                      A
                    </h5>
                    <h5 className="option-text">
                      This is some text within a card body.
                    </h5>
                  </div>
                </div>
                <div class="card option-card">
                  <div class="card-body d-flex">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />

                    <h5 className="option-number">
                      A
                    </h5>
                    <h5 className="option-text">
                      This is some text within a card body.
                    </h5>
                  </div>
                </div>
                <div class="card option-card">
                  <div class="card-body d-flex">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />

                    <h5 className="option-number">
                      A
                    </h5>
                    <h5 className="option-text">
                      This is some text within a card body.
                    </h5>
                  </div>
                </div>
                <div className="m-1 p-1">

                  <button className="btn green-btn float-start">
                  <i class="fa-solid fa-angle-left mx-1"></i>

                    previous
                  </button>
                  <button className="btn green-btn float-end">
                    Next
                    <i class="fa-solid fa-angle-right mx-1"></i>
                  </button>
                </div>

              </div>

              <div className=" blue-bar ">

<button className="btn btn-danger float-start">
  skip
  <i class="fa-solid fa-angles-right mx-1"></i>
</button>
<button className="btn green-btn float-end" id="submit-btn">
  Submit
</button>
</div>

            </div>

            <div className="col-md-4 col-lg- col-sm-12">
              <div className=" float-end">
                <QuestionNumbers />
              </div>
            </div>
          </div>

        </div>
      </div>

  );
}
