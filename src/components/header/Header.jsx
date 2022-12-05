import React from "react";
import { useTelegram } from "../../hooks/useTelegram";
import "./Header.css";

const Header = () => {
  const {tg, user, methods} = useTelegram();

  return (
    <div className="header">
      <Button onClick={methods.onClose}>Close</Button>
      <div className="username">{user?.username}</div>
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
