import React from 'react';
import './style.css';

function PortfolioApplicationCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Email:</strong> {props.email}
          </li>
          <li>
            <strong>Message:</strong> {props.message}
          </li>
        </ul>
      </div>
      <span onClick={() => props.removePortfolioApplication(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default PortfolioApplicationCard;