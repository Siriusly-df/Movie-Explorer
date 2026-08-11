import { useState } from "react";
import { Link } from "react-router-dom";

import "./sidebar.scss";

export function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <aside className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
            <div className="sidebar__header">
                <Link
                    to="/"
                    className="sidebar__logo"
                    onClick={closeMenu}
                >Movie Explorer</Link>
                <button
                    type="button"
                    className="sidebar__toggle"
                    onClick={() => setIsOpen((prev) => !prev)}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                >{isOpen ? "✕" : "☰"}</button>
            </div>
            <nav className="sidebar__nav">
                <ul className="sidebar__list">
                    <li className="sidebar__item">
                        <Link
                            to="/"
                            className="sidebar__link"
                            onClick={closeMenu}
                        >Home</Link>
                    </li>
                    <li className="sidebar__item">
                        <Link
                            to="/favorites"
                            className="sidebar__link"
                            onClick={closeMenu}
                        >Favorites</Link>
                    </li>
                    <li className="sidebar__item">
                        <Link
                            to="/discover"
                            className="sidebar__link"
                            onClick={closeMenu}
                        >Discover</Link>
                    </li>
                </ul>
            </nav>
            <div className="sidebar__section">
                <h3 className="sidebar__heading">Categories</h3>
                <ul className="sidebar__list">
                    <li className="sidebar__item">
                        <Link
                            to="/upcoming"
                            className="sidebar__link"
                            onClick={closeMenu}
                        >Upcoming</Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
}