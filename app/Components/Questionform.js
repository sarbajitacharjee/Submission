import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SurveyCard = () => {
  return (
    <>
      <div className="container  mt-5">
        <div className="card mb-20 md:mb-20 border-5 border-transparent" style={{maxWidth: '100%', marginTop: '10px'}}>
          <div className="card-body text-center">
            <h1 className="card-title text-primary">QUESTION ONE</h1>
            <p className="card-text text-warning">
              We appreciate your time and effort in helping us improve our services. We appreciate your time and effort in helping us improve our services. We appreciate your time and effort in helping us improve our services. We appreciate your time and effort in helping us improve our services. We appreciate your time and effort in helping us improve our services.
            </p>

            <div className="d-flex flex-column align-items-center text-secondary">
              <div className="d-flex mb-4" style={{gap: '2rem'}}>
                <div className="form-group">
                  <label htmlFor="activity">Choose An Activity:</label>
                  <select id="activity" className="form-control">
                    <option value="">Select an Activity</option>
                    <option value="2">Option 1</option>
                    <option value="3">Option 2</option>
                    <option value="4">Option 3</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="frequency">Choose Frequency:</label>
                  <select id="frequency" className="form-control">
                    <option value="">Select frequency</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                  </select>
                </div>
              </div>
              <div className="d-flex" style={{gap: '2rem'}}>
                <div className="form-group">
                  <select id="name" className="form-control">
                    <option value="">Select a Name</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                  </select>
                </div>
                <div className="form-group">
                  <select id="frequency2" className="form-control">
                    <option value="">Select Frequency</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                  </select>
                </div>
              </div>
              <button className="btn btn-primary mt-3">ADD A NEW ACTIVITY</button>
            </div>

            <div className="d-flex justify-content-end w-100 mt-3">
              <button className="btn btn-primary">Next</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SurveyCard;
