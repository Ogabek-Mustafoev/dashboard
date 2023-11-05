import React from "react";
import "./style.scss";
import option from "../../assets/icons/option.svg";

export const ActionsTaken = (prop) => {
  return (
    <div className="shadowed action-taken">
      <div className="row between">
        <h2>Joriy yilda amalga oshirilgan tadbirlar soni</h2>
        <img src={option} alt="" />
      </div>
      <div>
        {prop?.data.map((el, index) => (
          <div key={index}>
            <p>{el?.name}</p>
            <p>{el?.count?.toCountFormat()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
