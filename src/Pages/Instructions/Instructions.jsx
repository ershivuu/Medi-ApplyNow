import React from "react";
import "./Instructions.css";

function Instructions() {
  return (
    <>
      <div className="instruction-container">
        <div className="instruction-content">
          <p>Instructions</p>
          <div className="instruction-list">
            <ul>
              <li>
                1.). The online application is for admission to programmes
                offered in MEDI- CAPS University.
              </li>
              <li>2.). Application Form Fee is Non-Refundable.</li>
              <li>
                3.). Email ID submitted at the time of registration will be used
                for all correspondences until enrolment is completed. Change in
                Email ID will NOT be permitted under anv circumstances.
              </li>
            </ul>
          </div>
          <div className="instruction-list-2">
            <ul>
              <li>-Register and verify your email ID</li>
              <li>-Click on [Any Queries? Ask US] in your dashboard</li>
              <li>-Select the query category and submit your query</li>
              <li>
                -For any other admission related queries contact us on admission
                helpline No: 07969024444
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Instructions;
