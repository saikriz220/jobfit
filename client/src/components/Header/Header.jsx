import React from "react";
import "./Header.scss";
import { useUser } from "../../UserContext";

const Header = () => {

    const {user} = useUser();

    console.log(user);
    return (
        <header className="header">
          <h1>Welcome, {user?.userName || 'Guest'}</h1>
        </header>
      );
}
export default Header;