import { useState } from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

function RepeatControl({ onRepeatChange }) {
  const [selectedValue, setSelectedValue] = useState("true");

  const handleChange = (e) => {
    const value = e.target.value === "true";
    setSelectedValue(value ? "true" : "false");
    onRepeatChange(value);
  };

  return (
    <div style={{ padding: "20px" }}>
      <FormControl component="fieldset">
        <FormLabel component="legend">
          Do you want your word to be able to repeat letters?
        </FormLabel>
        <RadioGroup
          aria-label="options"
          name="options"
          value={selectedValue}
          onChange={handleChange}
        >
          <FormControlLabel
            value="true"
            control={<Radio color="primary" />}
            label="Yes"
          />
          <FormControlLabel
            value="false"
            control={<Radio color="primary" />}
            label="No"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default RepeatControl;
