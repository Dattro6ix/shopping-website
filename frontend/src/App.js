import React from 'react';
import data from './data.js';
import Product from './components/Product.js';
function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">Sayuru's Shopping Website</a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign in</a>
        </div>
      </header>
      <main>
        <div className="row center">
          {
            data.products.map(product => (
              <Product key ={product._id}product={product}></Product>
         

            ))
          }
        </div>
      </main>
      <footer className="row center">@Sayuru Samarwickrama</footer>
    </div>
  );
}

export default App;