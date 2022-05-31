import React from "react";
import "./questionNumber.css";

export default function QuestionNumbers() {
  const numberArray = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <div>
      <div className="m-4">
        <div className="exam-info my-3">
          <span>30 minutes</span>
        </div>
        <div className="exam-info my-3">
          <span>50 Marks (Pass marks: 40)</span>
        </div>

        <div className="row" style={{ width: 250, height: 250 }}>
          {numberArray.map((number) => {
            return (
              <div className="col-md-3 col-lg-3 col-sm-3 col-3 btn-line">
                <div className="btn btn-secondary q-no">{number}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
