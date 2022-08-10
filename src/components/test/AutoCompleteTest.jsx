import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="LIONEL" />}

      onChange={(event, value) => {console.log(value);}}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const options = [
  {label: 'jean ', year: 2000},
  {label: 'Glory ', value: 'Kelly'},
];
