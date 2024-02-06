import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { css } from "@emotion/css";

function Header() {
  //this const array of navigation 
  const items = [
    {
      label: (
        <Link to={"/"} data-testid="homeLink">
          <div data-testid="Nav" className="home">
            خانه
          </div>
        </Link>
      ),
      key: "home",
    },
    {
      label: (
        <Link to={"/about"} data-testid="aboutLink">
          <div data-testid="Nav" className="about">
            درباره ما
          </div>
        </Link>
      ),
      key: "about",
    },
  ];
  return (
    <div className={style}>
      <div className="demo-logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={items}
        style={{ flex: 1, minWidth: 0 }}
      />
    </div>
  );
}

export default Header;
const style = css`
  max-width: 1600px;
  margin: 0 auto;
  width: 100%;
`;
