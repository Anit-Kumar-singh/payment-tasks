import React from "react";
import { Typography } from "@mui/material";
import PaymentChip from "../../component/PaymentMethods";
import { paymentModes } from "../../constants/payment-modes";

const PaymentMethod = ({ handler, active }) => {
  return (
    <>
      <div className="container">
        <div className="step-complete">
          <img src="http://localhost:8082/public/images/check.PNG" alt="icon" />{" "}
          <Typography variant="p" gutterBottom>
            Your Trading profile is complete
          </Typography>
        </div>
        <Typography variant="p" className="next-step" guttertop="true">
          Your can go ahead and fund your account to start trading
        </Typography>
        <Typography
          variant="h4"
          className="fund-deposit"
          component="h4"
          gutterBottom
          guttertop="true"
        >
          Deposit Funds
        </Typography>
        <Typography variant="body1" display="block" gutterBottom>
          Select preferred plateform
        </Typography>
        <Typography
          variant="p"
          display="block"
          fontWeight="500"
          sx={{ marginTop: "1rem" }}
        >
          Recommended plateform
        </Typography>

        <PaymentChip data={paymentModes} handler={handler} active={active} />
      </div>
    </>
  );
};

export default PaymentMethod;
