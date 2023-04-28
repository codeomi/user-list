import React, { useEffect } from "react";
import "./Table.css";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { listAction1 } from "../../store/action";
import { DataGrid } from "@mui/x-data-grid";
import Loader from "../Loader/Loader";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Table = () => {
  const { id } = useParams(); //id of which card was clicked
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { list, responses } = useSelector((state) => state.userList);

  //column for first 4 req
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "firstName",
      headerName: "First name",
      width: 130,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 130,
    },
    {
      field: "email",
      headerName: "Email",
      type: "number",
      sortable: false,
      width: 110,
    },
    {
      field: "gender",
      headerName: "Gender",
      width: 120,
      sortable: false,
    },
    {
      field: "income",
      headerName: "Income",
      width: 100,
      sortable: false,
    },
    {
      field: "city",
      headerName: "City",
      width: 100,
    },
    {
      field: "car",
      headerName: "Car",
      width: 100,
      sortable: false,
    },
    {
      field: "quote",
      headerName: "Quote",
      width: 160,
      sortable: false,
    },
    {
      field: "phonePrice",
      headerName: "Phone Price",
      width: 100,
      sortable: false,
    },
  ];

  //column for last req
  const column2 = [
    {
      field: "count",
      headerName: "Count",
      type: "number",
      sortable: false,
      width: 110,
    },
    {
      field: "city",
      headerName: "City",
      width: 120,
      sortable: false,
    },
    {
      field: "averageIncome",
      headerName: "Average Income",
      width: 120,
      sortable: false,
    },
  ];

  const rows = [];

  //row for last req
  const rows2 = [];
  if (Array.isArray(list)) {
    list.forEach((user, index) => {
      rows2.push({
        city: user.city,
        count: user.count,
        averageIncome: user.averageIncome,
      });
    });
  }

  //row for first 4 req
  if (Array.isArray(list)) {
    list.forEach((user, index) => {
      rows.push({
        id: user._id,
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        gender: user.gender,
        income: user.income,
        city: user.city,
        car: user.car,
        quote: user.quote,
        phonePrice: "$" + user.phone_price,
        count: user.count,
        averageIncome: user.averageIncome,
      });
    });
  }

  //tells you which row or column to use according to requirement
  const tableColumns = id !== "5" ? columns : column2;
  const tableRows = id !== "5" ? rows : rows2;

  //re-navigates to home
  const handleBackClick = () => {
    navigate("/");
  };

  useEffect(() => {
    dispatch(listAction1(id));
  }, [dispatch, id]);

  return (
    <>
      <div className="container">
        <div className="topcontainer">
          <ArrowBackIcon onClick={handleBackClick} className="backButton" />
          <div className="heading-container">
            <div className="heading">
              Your List <div className="underline"></div>
            </div>
            <div className="outcomes">Results:{responses}</div>
          </div>
          <div className=""></div>
        </div>
        <div className="tableCarContainer">
          {list ? (
            <DataGrid
              rows={tableRows}
              columns={tableColumns}
              pageSize={10}
              disableColumnFilter
              disableColumnMenu
              disableColumnSelector
              disableRowSelectionOnClick
              getRowId={() => Math.floor(Math.random() * 100000000)}
            ></DataGrid>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </>
  );
};

export default Table;
