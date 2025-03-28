import { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';

function DropDown({ numberSelected }) {
    const [number, setNumber] = useState(2);

    const handleChange = (e) => {
        const newNumber = e.target.value;
        setNumber(newNumber);

        if (numberSelected) {
            numberSelected(newNumber);
        }
    };

    const numbers = Array.from({ length: 15 }, (_, i) => i + 2);


    return (
        <Box sx={{ minWidth: 120, maxWidth: 200, m: 2 }}>
          <FormControl fullWidth>
            <InputLabel id="number-select-label">Choose length of word</InputLabel>
            <Select
              labelId="number-select-label"
              id="number-select"
              value={number}
              label="Choose length of word"
              onChange={handleChange}
            >
              {numbers.map((number) => (
                <MenuItem key={number} value={number}>
                  {number}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      );
    };

export default DropDown;