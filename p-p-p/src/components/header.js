import './header.css';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <h1 className="logo">Penny Pincher Pro</h1>
            <div className="links">
                <Link to="/overview">Overview</Link>
                <Link to="/income">Income</Link>
            </div>
        </div>
    );
}

export default Header;