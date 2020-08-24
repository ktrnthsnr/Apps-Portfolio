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
          <li>Website:
            {/* <strong>Website:</strong> {props.websiteurl} */}
            <a href={props.websiteurl} target="_blank" rel="noopener noreferrer">{props.websiteurl}</a>  
          </li>
          <li>GitHub:
            {/* <strong>GitHub:</strong> {props.github} */}
            <a href={props.github} target="_blank" rel="noopener noreferrer">{props.github}</a>  
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PortfolioApplicationCard;
