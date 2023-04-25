import React from "react";
import "./dashboard.css";
import TableCard from "./TableCard";


const cards = [
  {
    index: 1,
    description:
      "Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.",
  },
  {
    index: 2,
    description: " Male Users which have phone price greater than 10,000.",
  },
  {
    index: 3,
    description:
      " Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.",
  },
  {
    index: 4,
    description:
      "Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.",
  },
  {
    index: 5,
    description:
      "Show the data of top 10 cities which have the highest number of users and their average income.",
  },
];
const Dashboard = () => {

  return (
    <>
      <div className="container">
        <div className="heading">
          Choose the Category of Users
          <span className="underline"></span>
        </div>
        <div className="tableCarContainer">
          {cards?.map((card) => (
            <TableCard
              key={card.index}
              description={card.description}
              heading={card.index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
