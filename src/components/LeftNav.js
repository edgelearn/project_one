import React from 'react';
import '../css/leftNav.css';
import { Link } from "react-router-dom";

const LeftNav = () => {
  return (<div className={"leftNav"}>
    <div className="leftNavMenu">
    <ul className="leftNavList">
      <li className="leftListItem">
        <Link to="/rater" >Pet Rater</Link>
      </li>
      <li className="leftListItem">
        <Link to="/dashboard" >DashBoard</Link>
      </li>
    </ul>
    </div>
  </div>)
};

export { LeftNav };

