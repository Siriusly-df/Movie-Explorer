import { Link } from "react-router-dom";
import "./sidebar.scss"; 

export function Sidebar() {
    return (
        <header className="sidebar">
            <div className="sidebar__container">

                <Link to="/" className="sidebar__title">
                    Movie Explorer
                </Link>

                <nav className="sidebar__nav">
                    ...
                </nav>

            </div>
        </header>
    );
}