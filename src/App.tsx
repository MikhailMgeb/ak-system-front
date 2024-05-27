import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { StatisticsKeyQueries } from './components/StatisticsKeyQueries/StatisticsKeyQueries';

import './App.css';


const App = () => {
  return (
    <div className="App">
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '95%' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Ключевой запрос" variant="outlined" />
      </Box>
      <StatisticsKeyQueries />
    </div>
  );
}

export { App };
