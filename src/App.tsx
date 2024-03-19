import { useState } from 'react';
import './App.css'
import NavBar from './Components/NavBar'
import LoginFormController from './Components/LoginForm/LoginForm';
import UserDetails from './Components/UserDetails';
import { IUserData } from './Interfaces';

function App() {
  const [islogged,setloggedIn]=useState(false);
  const [UserData,setUserData]=useState<IUserData>({
    email:"",
    Password:"",
    Username:""
});
  const topluk='abd';
  return (
    <>
        <NavBar
        companyName= {topluk} about='About Us' IsloggedIn={islogged} setloggedIn={setloggedIn} />

          {islogged ?( <UserDetails  user={UserData}/>)
          :
           (<LoginFormController setloggedIn={setloggedIn} UserData={UserData} setUserData={setUserData}/>)}
    </>

  )
}

export default App
