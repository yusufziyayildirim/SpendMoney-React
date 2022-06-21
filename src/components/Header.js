import { moneyFormat } from "../Helpers";

function Header({money, total}){

    return (
        <>
            <div>
                {total > 0 && money-total !== 0 &&(
                    <>
                       <div className="header"> Harcayacak <span> ${moneyFormat(money - total)} </span> paranız kaldı</div> 
                    </>
                )} 
                {total === 0 &&(
                    <>
                        <div className="header"> Harcayacak <span> ${moneyFormat(money)} </span>  paranız var</div>
                    </>
                )} 
                {money-total === 0 &&(
                    <>
                        <div className="header">Paranız bitti!</div>
                    </>
                )} 
            </div>
            <style jsx>{`
                .header{ 
                    position: sticky;
                    top: 0;
                    background: linear-gradient(to bottom, #20b820, #14be2a); 
                    height: 60px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #fff;
                    font-size: 24px;
                }
                .header span{
                    margin: 0 10px;
                    font-weighr: bold;
                }
            `}</style>
        </>
    )
}

export default Header;