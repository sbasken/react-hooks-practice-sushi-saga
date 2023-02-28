import React, { useState } from "react";

function Sushi({ sushi, onBuy, moneyLeft }) {
  const { name, img_url, price } = sushi
  const [ isEaten, setIsEaten ] = useState(false)

  const handleEat = (price) => {
    if (moneyLeft > price) {
      setIsEaten(isEaten => !isEaten)
      onBuy(price)
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={()=>handleEat(price)}>
        {isEaten ? null : (
          <img
            src={img_url}
            alt={`${name} sushi`}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
