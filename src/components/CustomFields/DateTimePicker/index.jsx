import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker as MUIDateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

const DateTimePicker = (props) => {
  //! State
  const { field, form } = props;
  console.log("props", props);

  //! Function

  //! Render
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MUIDateTimePicker label="Basic date time picker" />
    </LocalizationProvider>
  );
};

export default DateTimePicker;
