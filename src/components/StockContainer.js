import React from "react";
import Stock from "./Stock";
import PortfolioContainer from "./PortfolioContainer";

function StockContainer({stocks, onStockClick}) {


  // Generator expression using the .map() method to generate an array of stock components. Stock is a parameter of the arrow anonymous arrow function. The key prop is an under-the-hood requirement for react to generate a new Component for each stock object in the stocks array.   
  const stockList = stocks.map(stock => 
    <Stock key={stock.id} stock={stock} onStockClick={onStockClick}/>) 
  
  
  
  return (
    <div>
      <h2>Stocks</h2>
      {stockList}
    </div>
  );
}

export default StockContainer;
