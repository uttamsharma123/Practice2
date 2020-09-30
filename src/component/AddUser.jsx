import React, { useState } from "react";
import Calculator from "./Calculator";
import { numbers } from "./Calculator";

import "./Css/Cal.css";

function AddUser() {
    var combine="";
    const [oprator, setoperator] = useState("");
    function handleClick(event) {
        const { value, name } = event.target;
        
       
        
        if (name === "add") {

           setoperator(p=>{
               return "+".concat(p);
            });

        }
        else if (name === "sub") {
            setoperator(p=>{
                return "-".concat(p);
             });

        }
        else if (name === "mul") {
            setoperator(p=>{
                return "*".concat(p);
             });

        }
        else if (name === "div") {
            setoperator(p=>{
                return "/".concat(p);
             });
        }
        else if (name === "one") {
            setoperator(p=>{
                return "1".concat(p);
             });

        }
        else if (name === "two") {
            setoperator(p=>{
                return "2".concat(p);
             });

        }
        else if (name === "three") {
            setoperator(p=>{
                return "3".concat(p);
             });

        }
        else if (name === "four") {
            setoperator(p=>{
                return "4".concat(p);
             });

        }
        else if (name === "five") {
            setoperator(p=>{
                return "5".concat(p);
             });

        }
        else if (name === "six") {
            setoperator(p=>{
                return "6".concat(p);
             });

        }
        else if (name === "seven") {
            setoperator(p=>{
                return "7".concat(p);
             });

        }
        else if (name === "eight") {
            setoperator(p=>{
                return "8".concat(p);
             });

        }
        else if (name === "nine") {
            setoperator(p=>{
                return "9".concat(p);
             });

        }
        else if(name==="zero")
        {
            setoperator(p=>{
                return "0".concat(p);
             });
        }

    }

    return <div className="main">
        <div >


            <input class="input" value={oprator} name="cal" readOnly/>
            <div className="show-operator">
                {Calculator.map((cal) => {
                    return <button className="btn operator" name={cal.name}
                        value={cal.value}
                        onClick={handleClick} >
                        {cal.value}
                    </button>
                    
                })}
              <br/>

                {numbers.map(n => {
                    return   <button name={n.name} 
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
