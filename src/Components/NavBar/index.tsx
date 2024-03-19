import { IpropsNav } from '../../Interfaces';
import './index.scss'

const NavBar = ({companyName,about,IsloggedIn,setloggedIn} :IpropsNav) =>{
    return <nav>
        <ul className='list'>
            <li><a href="/">{companyName}</a></li>
            <li><a href="/">home</a></li>
            <li><a href="/">{about.toUpperCase()}</a></li>
            <li><a href="/">contact</a></li>
            <li><button onClick={()=>{ setloggedIn(!IsloggedIn)}}>{IsloggedIn ? "logout":"login"}</button></li>
        </ul>


    </nav>;
}

export default NavBar;