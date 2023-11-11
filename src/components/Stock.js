import React from "react";

function Stock({stock}) {
  const {id, name, ticker, type, price} = stock
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
          <p className="card-text">{ticker}</p>
          <p className="card-text">{type}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
