import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SurveyCard = () => {
  return (
    <>
      
    <div className=" container mt-4 ">
      <div className="card mx-auto border-3 border-transparent" style={{ maxWidth: '50rem' }}>
        <div className="card-body">
          <h1 className="card-title text-center">Welcome to the Survey!</h1>
          <p className="text-center text-warning">Hello, Human</p>
          <p className="card-text">
            We appreciate your time and effort in helping us improve our services. We appreciate your time and effort in helping us improve our services. We appreciate your time and effort in helping us improve our services. We appreciate your time and effort in helping us improve our services. We appreciate your time and effort in helping us improve our services. We appreciate your time and effort in helping us improve our services. Hello new data enrolled data.
          </p>
          <p className="card-text">
            We appreciate your time and effort in helping us improve our services. We appreciate your time and effort in helping us improve our services. We appreciate your time and effort services. We appreciate your time and effort in helping us improve our services. We appreciate your time and effort in helping us improve our services. We appreciate your time and effort in helping.
          </p>
          <p className="card-text text-danger">
            You must fill all columns to Continue.
          </p>
          <div className="d-flex justify-content-end">
            <button className="btn btn-primary">Next</button>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default SurveyCard;
