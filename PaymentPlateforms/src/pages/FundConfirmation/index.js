import React, { useState } from "react";
import { Box, Typography, Button, TextField } from "@mui/material/";
import ClearIcon from "@mui/icons-material/Clear";
import InfoIcon from "@mui/icons-material/Info";
import currency from "../../constants/countries.json";

let Fundsubmit = () => {
  let [currencylist, setCurrencyList] = useState();

  return (
    <div>
      <Box
        sx={{
          width: 1000,
          height: 110,
          backgroundColor: "whitesmoke",
          position: "absolute",
          left: 300,
          top: 60,
          textAlign: "center",
        }}
      >
        <Typography sx={{ marginRight: 45, marginTop: 2, fontSize: 16 }}>
          Your funds are being processed. You'll receive a confirmation once
          done.
        </Typography>

        <Typography sx={{ marginRight: 77 }}>
          Estimate processing time 10 seconds.
        </Typography>

        <InfoIcon
          sx={{ position: "absolute", left: 22, top: 17, color: "blue" }}
        />

        <Button sx={{ position: "absolute", left: 47 }}> Refresh</Button>

        <ClearIcon
          sx={{ position: "absolute", right: 47, top: 20, color: "gray" }}
        />
      </Box>

      <Box
        sx={{
          width: 1003,
          height: 500,
          backgroundColor: "white",
          position: "absolute",
          left: 300,
          top: 200,
          border: 1,
          borderColor: "silver",
          borderRadius: 3,
        }}
      >
        <Box
          sx={{
            width: 1000,
            height: 80,
            backgroundColor: "whitesmoke",
            position: "absolute",
            right: 1,
            bottom: 418,
          }}
        >
          <Typography sx={{ marginLeft: 3, marginTop: 4 }}>Tax ID</Typography>
        </Box>

        <Typography sx={{ position: "absolute", left: 22, top: 110 }}>
          Please note, You need to verify your Tax ID within 30 days, to keep
          account active.
        </Typography>

        <TextField
          label="Tax Country"
          value={currencylist}
          onChange={(e) => setCurrencyList(e.target.ariaValueNow)}
          select
          SelectProps={{ native: true }}
          size="small"
          sx={{
            width: "450px",
            borderColor: "black",
            position: "absolute",
            left: 22,
            top: 200,
          }}
        >
          {currency.map((item) => (
            <option value={item.CountryName}>{item.CountryName}</option>
          ))}
        </TextField>

        <TextField
          label="Tax ID"
          value={currencylist}
          SelectProps={{ native: true }}
          size="small"
          sx={{
            width: "450px",
            borderColor: "black",
            position: "absolute",
            right: 50,
            top: 200,
          }}
        ></TextField>

        <Button
          variant="outlined"
          sx={{
            position: "absolute",
            left: 25,
            bottom: 170,
            width: "445px",
            height: "40px",
            borderColor: "silver",
          }}
        >
          {" "}
          Add Another
        </Button>

        <Button
          variant="contained"
          sx={{
            position: "absolute",
            right: 45,
            bottom: 170,
            width: "450px",
            height: "40px",
            borderColor: "silver",
          }}
        >
          {" "}
          Confirm
        </Button>
      </Box>
    </div>
  );
};

export default Fundsubmit;
