import React from "react";
import "./tableCard.css";
import { Link } from "react-router-dom";

const TableCard = () => {
  return (
    <>
      <Link to="table1" className="linktag">
      <div className="card-container">
        <div className="heading">Table - 1</div>
        <div className="descriptions">
          Users which have income lower than $5 USD and have a car of brand
          “BMW” or “Mercedes”.
        </div>
      </div>
      </Link>
    </>
  );
};

export default TableCard;
