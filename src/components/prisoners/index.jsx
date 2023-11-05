import React from "react";
import user from "../../assets/icons/user.svg";
import "./style.scss";

export const Prisoners = (props) => {
  return (
    <div className="prisoners">
      {props.data.map(({ title, result, count, information }, index) => (
        <div key={index} className="shadowed prisoners-cards">
          <div className="prisoners-cards-title">
            <div>
              <img src={user} alt="User Img" />
            </div>
            <p>{title}</p>
            <h3 className="card_title">{count}</h3>
          </div>
          <h2>{result}</h2>
          <div className="prisoners-cards-info">
            {information.map((el, index) => (
              <div key={index}>
                <h3>{el.count}</h3>
                <p>{el.text}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
