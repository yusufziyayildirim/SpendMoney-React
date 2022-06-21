import { useState } from "react";
import { moneyFormat } from "../Helpers";

function Header({money, total}){

    return (
        <>
            <div>
                {total > 0 && money-total !== 0 &&(
                    <>
                        Harcayacak ${moneyFormat(money - total)}  paranız kaldı
                    </>
                )} 
                {total == 0 &&(
                    <>
                        Harcayacak ${moneyFormat(money)}  paranız var
                    </>
                )} 
                {money-total == 0 &&(
                    <>
                        Paranız bitti!
                    </>
                )} 
            </div>
        </>
    )
}

export default Header;