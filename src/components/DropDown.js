import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';




export default function DropDown({ticker1, ticker2, setTicker1, setTicker2}) {

  const handleChange1 = (event) => {
    setTicker1(event.target.value);
  };

  const handleChange2 = (event) => {
    setTicker2(event.target.value);
  };
  
  return (
    <div>
      <FormControl variant='filled' sx={{ m: 1, minWidth: 160}} style={{ backgroundColor: 'white'}}>
        <InputLabel id="demo-simple-select-autowidth-label" variant="filled">Ticker Symbol</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={ticker1}
          onChange={handleChange1}
          autoWidth
          label="Ticker"
        >
          <MenuItem value={'SP500'}>US SP500</MenuItem>
          <MenuItem value={'DJI'}>DJI</MenuItem>
          <MenuItem value={'BTC'}>Bitcoin</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant='filled' sx={{ m: 1, minWidth: 160}} style={{ backgroundColor: 'white'}}>
        <InputLabel id="demo-simple-select-autowidth-label" variant="filled">Ticker Symbol</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={ticker2}
          onChange={handleChange2}
          autoWidth
          label="Ticker"
        >
          <MenuItem value={'M2'}>M2</MenuItem>
          <MenuItem value={'M3'}>M3</MenuItem>
          <MenuItem value={'M4'}>M4</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
