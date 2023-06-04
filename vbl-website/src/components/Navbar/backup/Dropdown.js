const Dropdown = ({ submenus, dropdown }) => {
    return (
        <ul className={`dropdown ${dropdown ? "show" : ""}`}>
            {submenus.map((submenu, index) => (
                <li key={index} className="menu-items">
                    <h3>{submenu.title}</h3>
                </li>
            ))}
        </ul>
    );
};
  
export default Dropdown;