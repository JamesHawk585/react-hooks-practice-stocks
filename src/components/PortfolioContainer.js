import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolio, onStockClick}) {

  const portfolioList = portfolio.map(stock => (
    <Stock key={stock.id} stock={stock} onStockClick={onStockClick}/> 
  ))

  // Add an event listener onPortfolioClick that listens for the user to click a card in the portfolio list. 
  return (
    <div>
      <h2>My Portfolio</h2>
      {
      portfolioList
      }
    </div>
  );
}

export default PortfolioContainer;
