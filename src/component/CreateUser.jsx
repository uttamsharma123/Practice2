import React, { useState } from "react";

import userData1 from "../userData";

function CreateUser() {

    const [userData,setUserData]=useState([{user:"uttam",email:"utt@gmail.com"}]);

    const [objData,setobjData]=useState({
        user:"",
        email:""
    })


    function handleChange(event) {
        const {value,name}=event.target;
        setobjData(preValue=>{
            
            
            return{
              ...preValue,
            [name]:value
            }
        })



    }
    function handleClick(event)
    {
      
       setUserData(p=>{
           return[p,objData]
       });
       setobjData({
           user:"",
           email:""
       })
      
     
  
    }
    function handleAllChk()
    {
        console.log(userData);
    }


    return <div>
        <form className="form-group">

            <div>
                <label htmlFor="userName">Username</label>
                <input type="text"
                    className="form-control"
                    id="userName"
                    placeholder="Enter UserName"
                    name="user"
                    value={objData.user}
                    onChange={handleChange}
                />

            </div>
            <div className="form-group">
                <label htmlFor="email-address">Email</label>
                <input type="email"
                    className="form-control"
                    id="email-address"
                    name="email"
                    value={objData.email}
                    placeholder="Enter Email"
                    onChange={handleChange}
                     />
            </div>
            <div>

            </div>

            <button type="button" onClick={handleClick}
                className="btn btn-primary">Submit</button>
            <button type="button" onClick={handleAllChk}
                className="btn btn-primary">All Data</button>
               <p>
                   {userData.map((p)=>{
                    return <p>{p.user}</p>
                   })}
               </p>



        </form>

    </div>
}


export default CreateUser;