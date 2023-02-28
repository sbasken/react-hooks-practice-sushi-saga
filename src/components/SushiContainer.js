import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushisToDisplay, onNextSushis, onBuy, moneyLeft}) {

  return (
    <div className="belt">
      {sushisToDisplay.map(sushi => <Sushi key={sushi.id} sushi={sushi} onBuy={onBuy} moneyLeft={moneyLeft}/>)}
      <MoreButton onNextSushis={onNextSushis}/>
    </div>
  );
}

export default SushiContainer;
