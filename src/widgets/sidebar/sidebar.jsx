import { Link } from "react-router-dom";
import "./sidebar.scss"; 

export function Sidebar() {
    return (
        <aside className="sidebar">
            <Link to="/" className="sidebar__logo">Movie Explorer</Link>
            <nav className="sidebar__nav">
                <ul className="sidebar__list">
                    <li className="sidebar__item">
                        <Link to="/" className="sidebar__link">Home</Link>
                    </li>
                    <li className="sidebar__item">
                        <Link to="/favorites" className="sidebar__link">Favorites</Link>
                    </li>
                </ul>
            </nav>
            <div className="sidebar__section">
                <h3 className="sidebar__heading">Categories</h3>
                <ul className="sidebar__list">
                    <li className="sidebar__item">
                        <Link to="/popular" className="sidebar__link">Popular</Link>
                    </li>
                    <li className="sidebar__item">
                        <Link to="/top-rated" className="sidebar__link">Top Rated</Link>
                    </li>
                    <li className="sidebar__item">
                        <Link to="/upcoming" className="sidebar__link">Upcoming</Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
}