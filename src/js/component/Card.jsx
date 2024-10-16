import React from 'react';

const Card = ({ title, text, buttonText }) => {
  return (
    <div className="card mb-4">
      <img src="https://www.ngenespanol.com/wp-content/uploads/2024/01/asi-es-el-corazon-de-la-via-lactea-nuestra-galaxia-1024x573.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href="#" className="btn btn-primary">{buttonText}</a>
      </div>
    </div>
  );
};

export default Card;