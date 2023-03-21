import React, { useState, useEffect } from "react";
import "./Funds.css";
import currency from "../../constants/countries.json";
import { BsFillXCircleFill } from "react-icons/bs";
import { currencyValue } from "../../constants/currencyValue";
import { TextField } from "@mui/material";
import { paymentModes } from "../../constants/payment-modes";

const Funds = ({ selectedMethod }) => {
  const [data, setData] = useState(0);
  const [additionFields, SetAdditionFields] = useState([]);

  const inputHandler = (e) => {
    e.preventDefault();
    setData(parseInt(e.target.value));
  };

  const addFundHandler = (e, value) => {
    e.preventDefault();
    setData(data + value);
  };

  const removeHandler = () => {
    setData(0);
  };

  const onKeyPressHandler = (e) => {
    return /[0-9]/i.test(e.key);
  };

  useEffect(() => {
    const findFields = paymentModes.filter(
      (item) => item.id === selectedMethod
    );
    SetAdditionFields(findFields[0].fields);
  }, [selectedMethod]);

  return (
    <div className="cards">
      <div className="header"> Skrill Deposit {selectedMethod} </div>
      Currency
      <select id="currency" name="currency">
        {currency.length > 0 &&
          currency.map(({ Symbol, Code, Flag, Currency }) => (
            <option key={Symbol + Code} value={`${Flag} ${Currency}`}>
              <img src={`${Flag}`} alt="flag" />
              {Currency}
            </option>
          ))}
      </select>
      <input
        id="Amount"
        type="text"
        onKeyPress={onKeyPressHandler}
        value={data}
        onChange={inputHandler}
      />
      Amount
      <div className="buttons">
        <div className="currency-btns">
          {currencyValue.map((currency, idx) => (
            <button
              key={`btna-${idx + currency.id}`}
              onClick={(e) => addFundHandler(e, currency.value)}
            >
              {" "}
              +${`${currency.value}`}
            </button>
          ))}
        </div>
      </div>
      {data ? (
        <BsFillXCircleFill
          style={{
            color: "#0071EB",
            position: "relative",
            left: "86%",
            top: "-2px",
            fontSize: "25px",
          }}
          onClick={removeHandler}
        />
      ) : null}
      <button className="funds-btn">Deposit funds</button>
    </div>
  );
};

export default Funds;
