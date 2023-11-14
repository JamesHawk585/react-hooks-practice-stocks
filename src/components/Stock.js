import React from "react";

function Stock({stock, onStockClick}) {
  const {id, name, ticker, type, price} = stock


  
  return (
    <div>
      <div className="card" onClick={() => onStockClick(stock)}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}:{price}</p>
          {/* <p className="card-text">{ticker}</p> */}
          {/* <p className="card-text">{type}</p> */}
        </div>
      </div>
    </div>
  );
}
export default Stock;
