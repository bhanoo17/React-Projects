import { useState } from 'react';
import './App.css';
import Item from './components/Item';
import { Cart } from './components/Cart';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Item name = 'MacBook Pro' price = {100000} />
      <Item name = 'TV' price = {150000} />
      <Item name = 'HDD' price = {8000} />
      <Cart />
    </div>
  )
}

export default App
