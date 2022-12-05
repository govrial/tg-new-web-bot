import React from "react";
import { tg } from "../../constants/tg";
import "./Header.css";

const Header = () => {
  const onClose = () => {
    tg.close();
  };

  return (
    <div className="header">
      <Button onClick={onClose}>Close</Button>
      <div className="username">{tg.initDataUnsafe?.user?.username}</div>
      <div className="header__menu">
        <ul className="header__menu-list">
          <li className="header__menu-item">
            <a href="/" className="header__menu-link">
              Главная
            </a>
          </li>
          <li className="header__menu-item">
            <a href="" className="header__menu-link">
              Вторая
            </a>
          </li>
          <li className="header__menu-item">
            <a href="" className="header__menu-link">
              Тхерд
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
