import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [ sushis, setSushis ] = useState([])
  const [ index, setIndex ] = useState(0)
  const [ moneyLeft, setMoneyLeft] = useState(100)
  const [ plates, setPlates ] = useState([])

  const handleBuy = (price) => {
    setPlates(plates => [...plates, "eaten sushi"] )
    setMoneyLeft(moneyLeft => moneyLeft - price)
    
  }

  const nextSushis = () => {
    if (index < sushis.length - 4) {
      const nextIndex = index + 4
      setIndex(nextIndex)
    } else if (index === sushis.length - 4) {
      setIndex(0)
    }
  }

  useEffect(() => {
    fetch(`${API}`)
    .then(res => res.json())
    .then(sushisData => setSushis(sushisData))
  }, [])
  const sushisToDisplay = sushis.slice(index, index + 4)
  
  return (
    <div className="app">
      <SushiContainer sushisToDisplay={sushisToDisplay} onNextSushis={nextSushis} onBuy={handleBuy} moneyLeft={moneyLeft}/>
      <Table moneyLeft={moneyLeft} plates={plates}/>
    </div>
  );
}

export default App;
