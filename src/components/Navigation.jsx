import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <a href="/" className="logo">
        <img src="/logo/logo.png" alt="logo" />
      </a>

      <div className="nav-right">
        <ul className={isOpen ? "nav-links open" : "nav-links"}>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/om">Om</NavLink>
          </li>
          <li>
            <NavLink to="/kontakt">Kontakt</NavLink>
          </li>
          <li>
            <NavLink to="/checkout">Checkout</NavLink>
          </li>
        </ul>

        <div className="cart-icon">
          <NavLink to="/cart">
            <FiShoppingCart size={28} />
          </NavLink>
        </div>

        <div className="burger-menu" onClick={toggleMenu}>
          {isOpen ? <IoClose size={30} /> : <GiHamburgerMenu size={30} />}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
