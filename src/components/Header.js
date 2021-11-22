import React from "react";

const Header = (props) => {
  return (
    <header className="header">
      <h1>Todo List</h1>
      {props.children}
    </header>
  );
};

export default Header;
