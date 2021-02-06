import React from "react";
import { Card } from "react-bootstrap/";

import "./style.css";

function ListComp(props) {
  const titles = props.titles;
  const listItems = titles.map((title) => <li key={Math.random()}>{title}</li>);
  console.log("title props", titles);
  return (
    <div>
      <Card body className="card-body">
        <h1>Search History</h1>
        <ol>{listItems}</ol>
      </Card>
    </div>
  );
}

export default ListComp;
