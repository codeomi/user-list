import React, { useEffect } from "react";
import "./tableCard.css";
import { Link, useParams } from "react-router-dom";
import { listAction1 } from "../../store/action";
import { useDispatch } from "react-redux";

const TableCard = ({ heading, description }) => {
  const dispatch = useDispatch();
  const params = useParams();
  console.log(heading);
  useEffect(() => {
    if (heading === 1) {
      dispatch(listAction1());
    }
  }, [dispatch, heading]);
  return (
    <>
      <Link path="/table/:id" to={`/table/${heading}`} className="linktag">
        <div className="card-container">
          <div className="heading">{heading}</div>
          <div className="descriptions">{description}</div>
        </div>
      </Link>
    </>
  );
};

export default TableCard;
