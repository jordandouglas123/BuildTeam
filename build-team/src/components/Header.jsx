import { Link } from "react-router-dom"; 
import "../css/header.css" // imports the styles scoped to this specific page. 

const Header = () => {
    return (
        // Links are the same <a></a> tags except they dont reload the pages when clicked. 
        // The is apart of the react router package.
        <div>
            <nav className="nav">
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">SignUp</Link>
                <Link to="/employee">EmployeeDashboard</Link>
                <Link to="/employer">EmployerDashboard</Link>
                <Link to="/about">About</Link>
            </nav>
        </div>
    );
}
 
export default Header;