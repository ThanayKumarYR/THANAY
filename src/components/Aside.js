import React from "react";
import { Link, Outlet } from "react-router-dom";
import data from "./Aside-data.json";
import "./Css/Aside.css";
const Aside = () => {
  const aside = data.map((text) => {
    if (text.address[0] === "/") {
      return (
        <Link
          key={text.id}
          to={text.address}
          style={{ textDecoration: "none" }}
        >
          <li>{text.content}</li>
        </Link>
      );
    } else
      return (
        <a
          href={text.address}
          style={{ textDecoration: "none" }}
          target="_blank"
          rel="noreferrer"
          key={text.id}
        >
          <li>{text.content}</li>
        </a>
      );
  });
  return (
    <aside>
      <div className="aside-div" id="aside-div">
        <ul>{aside}</ul>
      </div>
      <Outlet />
    </aside>
  );
};

export default Aside;
