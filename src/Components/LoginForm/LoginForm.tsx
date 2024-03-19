import {ChangeEvent } from "react";
import "./loginForm.scss"
import { IUserData } from "../../Interfaces";
import { FormInputList } from "../../data";

interface Iprops{
    setloggedIn:(val:boolean)=>void;
    UserData:IUserData;
    setUserData:(user:IUserData)=>void;
}

const LoginFormController =({setloggedIn,UserData,setUserData}:Iprops)=>{


    //Handler 
    const onChangeHandler = (event:ChangeEvent<HTMLInputElement>)=>
    {
        const {value, name} = event.target;
        setUserData({
            ...UserData,
            [name]:value,
        })
    }

        //render
        const renderFormInputList = FormInputList.map(input =>(
            <div>
            <label htmlFor={input.label}>Username:</label>
            <input type={input.type} name={input.name} id={input.id} value={UserData[input.name]} onChange={onChangeHandler} />
        </div>
        ))
    return(
        <div>
        <form action="" className="form" onSubmit={(event)=>{
            event.preventDefault();
        }}>
            {renderFormInputList}
            <button onClick={()=>{setloggedIn(true)}}>Login</button>
        </form>
        </div>
    )
}
export default LoginFormController;