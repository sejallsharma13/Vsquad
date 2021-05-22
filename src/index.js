import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "./theme";




ReactDOM.render(
<React.StrictMode>
<App />,
<ThemeProvider theme={theme} />
</React.StrictMode>,
document.getElementById('root')
);




