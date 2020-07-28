import React from 'react';
import './style.css';
// import './Images';

function PortfolioApplicationCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Application Name:</strong> {props.name}
          </li>
          <li>
            <strong>Website:</strong> {props.websiteurl}
          </li>
          <li>
            <strong>GitHub:</strong> {props.github}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PortfolioApplicationCard;
