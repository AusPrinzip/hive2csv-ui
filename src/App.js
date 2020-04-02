import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import 'typeface-roboto';
import MaterialUIPickers from './datePicker.js'
import Forms from './Forms.js'

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="bg">
        <Forms></Forms>
      </Container>
    </React.Fragment>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Forms></Forms>
//       </header>
//     </div>
//   );
// }

// export default App;
