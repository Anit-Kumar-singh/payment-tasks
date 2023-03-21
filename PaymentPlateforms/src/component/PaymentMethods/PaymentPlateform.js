import React from "react";
import { Chip, Avatar } from "@mui/material";
import "../chips/chip.css";

const PaymentMethods = ({ data, handler, active }) => {
  return (
    <>
      {data?.map(({ logo, title, subTitle, id }) => {
        return (
          <>
            <Chip
              component="div"
              clickable
              variant="outlined"
              onClick={() => handler(id)}
              className={
                id === active ? "chip-container active" : "chip-container"
              }
              // classes={classes}
              avatar={
                <Avatar
                  src={logo}
                  alt="payment-logo"
                  className="logo"
                  width="100px"
                  height="100px"
                />
              }
              label={
                <section>
                  <div className="chip-content">
                    <h5 className="chip-heading">{title}</h5>
                    <p className="chip-subheading">{subTitle}</p>
                  </div>
                  <div className="chip-dot">&nbsp;</div>
                </section>
              }
              // className={`${classes.chip} ${classes.fleft}`}
            />
            <div key={id}>
              <div
                onClick={() => handler(id)}
                className={
                  id === active ? "chip-container active" : "chip-container"
                }
              >
                <div className="chip-logo">
                  <img src={logo} alt="payment-logo" className="logo" />
                </div>
                <div className="chip-content">
                  <h5 className="chip-heading">{title}</h5>
                  <p className="chip-subheading">{subTitle}</p>
                </div>
                <div className="chip-dot">&nbsp;</div>
              </div>
              {id === active ? <hr className="line" /> : null}
            </div>
          </>
        );
      })}
    </>
  );
};

export default PaymentMethods;
