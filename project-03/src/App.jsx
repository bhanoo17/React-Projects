import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Card from './components/Card';


function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
     <h1>Hello Bhanoo</h1>
    <Card username = "Bhaanoo" />
    <Card username = "Vishwakarma" />
    </>
  )
}

export default App
