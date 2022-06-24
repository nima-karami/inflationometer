import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';




export default function DropDown() {
  const [ticker1, setTicker1] = React.useState('');
  const [ticker2, setTicker2] = React.useState('');

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
          <MenuItem value={10}>US SP500</MenuItem>
          <MenuItem value={21}>DJI</MenuItem>
          <MenuItem value={22}>Bitcoin</MenuItem>
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
          <MenuItem value={30}>M2</MenuItem>
          <MenuItem value={40}>M3</MenuItem>
          <MenuItem value={50}>M4</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
