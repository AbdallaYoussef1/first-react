import { IUserData } from "../Interfaces";

interface Iprops{
    user:IUserData
}

const UserDetails =({user}:Iprops) =>{

    return (
    <><h3>{user.email}</h3><h1>{user.Username}</h1></>
    )
}

export default UserDetails;