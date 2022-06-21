import { useState } from "react";
import BasketItem from "./BasketItem";

function Basket({basket,resetBasket, total, products}){

    return (
        <>
            {basket.map(item => (
                <BasketItem key={item.id} item={item} product={products.find(p => p.id === item.id)}/>
            ))}
            {total>0 &&(
                <div>
                    Toplam: ${total}
                    <button onClick={resetBasket}>Sepeti Sıfırla</button>
                </div>
                )
            }
        </>
    
    )
}

export default Basket;