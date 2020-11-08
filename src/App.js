import React from 'react'
import theme from "./Theme";
import { ThemeProvider } from '@material-ui/core/styles';
import Navbar from './Navbar';
import Boxs from './Box';

function App() {
    return (
        <div>
                 <ThemeProvider theme={theme}>
                            <Navbar/>  
                             <Boxs/>
                 </ThemeProvider> 
        </div>
    )
}

export default App
