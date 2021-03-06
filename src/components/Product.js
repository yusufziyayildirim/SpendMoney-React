import { useState } from "react";
import { moneyFormat } from "../Helpers";


function Product({product, total, money, basket, setBasket}){

    const basketItem = basket.find(item => item.id === product.id)

    const addBasket = () =>{
        const checkBasket = basket.find(item => item.id === product.id)

        //Ürün daha önce eklenmiş
        if(checkBasket){
            checkBasket.amount += 1
            setBasket([...basket.filter(item => item.id !==product.id), checkBasket])
        }else{
            setBasket([...basket, {
                id: product.id, 
                amount: 1
            }])
        }
    }
    const removeBasket = () =>{
        const currentBasket = basket.find(item => item.id === product.id)
        const basketWithoutCurrent = basket.filter(item => item.id !== product.id)
        currentBasket.amount -= 1
        //Ürün daha önce eklenmiş
        if(currentBasket.amount === 0){
            setBasket([...basketWithoutCurrent])
        }else{
            setBasket([...basketWithoutCurrent, currentBasket])
        }
    }

    return (
        <>
            <div className="product">
                <img src={product.image} alt={product.image}></img>
                <h6>
                    {product.title}
                </h6>
                <div className="price">$ {moneyFormat(product.price)}</div>
                <div className="actions">
                    <button className="sell-btn" disabled={!basketItem} onClick={removeBasket}>Sat</button>
                    <span className="amount">{basketItem && basketItem.amount || 0}</span>
                    <button className="buy-btn" disabled={total + product.price > money} onClick={addBasket}>Satın Al</button>
                </div>
                <style jsx>{`
                    .product{
                        padding:10px; 
                        background:#fff; 
                        border: 1px solid #ddd;
                        margin-bottom:10px;
                        width: 24%;

                    }
                    .product img{
                        width:100%;
                        height:200px;
                    }
                    .product h6{
                        font-size:20px;
                        margin-bottom:10px;
                    }
                    .product .price{
                        font-size:20px;
                        color: #179b17
                    }
                    .product .actions{
                        display:flex;
                        align-items:center;
                        margin-top:15px;
                    }
                    .actions button{
                        height:40px;
                        padding: 0 15px;
                        flex:1;
                        cursor:pointer;
                    }
                    .actions button[disabled]{
                        opacity: .4;
                        cursor: not-allowed;
                    }
                    .actions .amount{
                        width:50px;
                        text-align:center;
                        border: 1px solid #ddd;;
                        height: 40px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 17px;
                        font-weight: bold;  
                    }
                    .actions .buy-btn{
                        background-color: #61dafb;
                        font-size: 14px;
                        font-weight:500;
                        border-radius: 0 7px 7px 0;
                    }
                    .actions .sell-btn{
                        background-color: #ccc;
                        color: #333;
                        font-size: 14px;
                        font-weight:500;
                        border-radius: 7px 0 0 7px;
                    }
                `}</style>
            </div>
        </>
    )
}

export default Product;