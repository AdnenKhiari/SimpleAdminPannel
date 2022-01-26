import {Link} from "react-router-dom"

const TopNav = ()=>{
    return <header> 
    <p>Name</p>
    <h1>Template Admin</h1>
    <nav className="topNav">
        <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/page3">Page 3</Link></li>
            <li><Link to="/page4">Page 4</Link></li>
        </ul>
    </nav>
    </header>; 
}
export default TopNav