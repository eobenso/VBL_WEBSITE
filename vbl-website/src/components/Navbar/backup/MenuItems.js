import Dropdown from './Dropdown';
import { useState } from "react";

const MenuItems = ({ items }) => {
    const [dropdown, setDropdown] = useState(false);

    return (
        <li className="menu-items">
            {items.submenu ? (
                <>
                    <button 
                        type="button" 
                        aria-haspopup="menu"
                        aria-expanded={dropdown ? "true" : "false"}
                        onClick={() => setDropdown((prev) => !prev)}>
                            {items.title}{' '}</button>
                    <Dropdown submenus={items.submenu} dropdown={dropdown} />
                </>
            ) : (
            <h3>{items.title}</h3>
            )}
        </li>
    );
};

export default MenuItems;