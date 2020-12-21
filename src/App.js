import './App.css';
import React from 'react';
import ProductList from './components/ProductList';
import UserCard from './components/UserCard';
import 'bootstrap/dist/css/bootstrap.min.css';

const products = [
  {itemName: "kitten",
  imageLink: "https://placekitten.com/300/300",
  standardPrice: 9000,
  discountPrice: 8000},

  {itemName: "kitten2",
  imageLink: "https://placekitten.com/400/400",
  standardPrice: 8000,
  discountPrice: 9000}
]

function App() {
  return (
    <div className="App">
      <main>
        <UserCard userName="username" imageLink="https://placekitten.com/100/100" rank="Leader" score={51}/>
        <ProductList products={products}/>
      </main>
    </div>
  );
}

export default App;
