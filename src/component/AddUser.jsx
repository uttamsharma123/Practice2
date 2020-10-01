import React, { useState } from "react";
import Calculator from "./Calculator";
import { numbers } from "./Calculator";

import "./Css/Cal.css";

function AddUser() {
    
    var combine = "";

    function reverseStr(str)
    {
        var arr=str.split("");
        var revArr=arr.reverse();
        var joinStr=revArr.join("");
        return joinStr;
    }
    const [oprator, setoperator] = useState("");
    function handleClick(event) {
        const { value, name } = event.target;


        
            if(name!="equal" && name!="delete" )
            {
                setoperator(p=>{
                 return value.concat(p)
                })
            }
            if(name==="equal")
            {
                var sum=0;
                var arr;
                setoperator(preValue=>{
                    arr=preValue.split("+");
                    for(var i=0;i<arr.length;i++)
                    {
                        sum=sum+parseInt(arr[i]);
                    }
                    return reverseStr(sum.toString());



                });
            }
            if(name==="delete")
            {
                setoperator("");
            }
      }

    return <div className="main">
        <div >


            <input class="input" value={oprator} name="cal" readOnly />
            <div className="show-operator">
                {Calculator.map((cal) => {
                    return <button className="btn operator" name={cal.name}
                        value={cal.value}
                        onClick={handleClick} >
                        {cal.value}
                    </button>

                })}
                <br />

                {numbers.map(n => {
                    return <button name={n.name}
                        value={n.value}
                        onClick={handleClick}
                        className="btn numbers">
                        {n.value}
                    </button>
                })}


            </div>

        </div>

    </div>


}






export default AddUser;
