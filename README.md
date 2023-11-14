# Practice Challenge: Flatiron Stock Exchange

![demo](https://curriculum-content.s3.amazonaws.com/phase-2/react-hooks-practice-stocks/stocks.gif)

Welcome to the Flatiron Stock Exchange!

Today, you are a broker who is trying to better organize the stocks available on
the Flatiron Stock Market.

## Setup

All the stock data about can be found in the `db.json` file. We'll
be using `json-server` to create a RESTful API for our database.

Run `npm install` to install our dependencies.

Then, run `npm run server` to start up `json-server` on `http://localhost:3001`.

In another tab, run `npm start` to start up our React app at `http://localhost:3000`.

## Deliverables

After the stocks are fetched, your job is to:

- Render all the stocks onto the page. The styling of how a Stock should look
  like is already in the `Stock` component.



  Bring stocks in at MainContainer.js 
  # Presumed Steps: 

  MainContainer:
  1. [x] Stocks/setStocks useState hook with an empty array.
  2. [x] useEffect/fetch request that gets all stock in MainContainer.js and pass to StockContainer.js.
   ~~[] Use a generator expression to create a list of stock objects~~
        - We already have an array of stock objects from the fetch request.  
  3. [x] pass stocks as a prop to StockContiner.js 
  4. [] Append StockContainer component to dom in MainContainer.js. Pass stocks state to StockContainer as props. 
  5. [] Create event handler handleAddStockToPortfolio. Pass to StockContainer.js as props. 
  4. [] Event Listener to add stock to portfolio array

  StockContainer:
  1. [] Take stocks as props from MainContainer.js. 
  2. [] Use a genrator expression to map through the stock list and create a new Stock conponent for each object in the stocks array: 
    - A generator expression always uses the .map() emthod. It is typically used to create an array of components. 
  3. [] Append sotckList to the DOM in StocklContainer.js:  
    -   return (
          <div>
            <h2>Stocks</h2>
            {stockList}
          </div>
        );

  PortfolioContainer:
  1. portfolio/setPortfolio hooks to create an array of stock objects 
  2. use generator expression to create a list of stock objects 
  3. pass as props to PortfolioContainer to append to dom 

  Steps: 
  1. [x] Stocks/setStocks useState hook
  2. [x] fetch request that gets all stock in MainContainer.js

- Allow a user to buy a stock by clicking on it and when it is bought, it should
  be added to `MyPortfolio`.

- Allow a user to sell a stock in their `Portfolio` by clicking on the stock and
  it should be removed from their `Portfolio`.

- Allow a user to sort the list of stocks alphabetically by the ticker name as
  well as by ascending price.

- Allow a user to filter stocks based on the type of the stock.

Best of luck!

Remove Stocks from Portfolio:
1.  
