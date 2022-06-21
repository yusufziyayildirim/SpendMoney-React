import './App.css';
import {useState, useEffect } from 'react';
import Header from './components/Header';
import products from './products.json';
import Product from './components/Product'
import Basket from './components/Basket'


function App() {

  const [money, setMoney] = useState(10000000);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  const resetBasket = () => {
    setBasket([])
  }

  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return acc + (item.amount * (products.find(product=> product.id === item.id).price));
      },0)
    )
  }, [basket])

  return (
    <>
      <Header total={total} money={money} />
      <div className="container products">
        {products.map(product => (
          <Product key={product.id} total={total} money={money} product={product} basket={basket} setBasket={setBasket}/>
        ))}
      </div>
      <Basket total={total} resetBasket={resetBasket} products={products} basket={basket} />
    </>
  )
}

export default App;
