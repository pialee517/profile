import router from './router'
import { RouterProvider } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <RouterProvider router={router} />
    </React.Fragment>
  );
}

export default App;
