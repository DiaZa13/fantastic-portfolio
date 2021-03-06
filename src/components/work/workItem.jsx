import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

export default function WorkItem(props) {
  const tutorship = props;
  return (
    <div>
      <div className={`card card-dimensions ${tutorship.position}`}>
        <img className={`card-img-top h-75 ${tutorship.position}`} src={tutorship.img} alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">{tutorship.title}</h5>
          <p className="card-text">{tutorship.description}</p>
          <div className="d-flex justify-content-end">
            <a href={tutorship.redirect} className="tutorship-link">VISITAR</a>
            <span className="material-icons ms-1" style={{ fontSize: '20px' }}><HiArrowNarrowRight /></span>
          </div>
        </div>
      </div>
    </div>
  );
}
