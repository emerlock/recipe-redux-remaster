import logo from './logo.svg';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Create from './pages/Create';
import Edit from './pages/Edit';
import Recipe from './pages/Recipe';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
    const darkTheme = createTheme({
        palette: {
            mode: 'dark'
        }
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <div style={{ paddingLeft: '20px', paddingRight: '20px' }}>
                <h1>Recipe Redux</h1>
                <hr />
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Dashboard />} />
                        <Route exact path="/recipe/:id" element={<Recipe />} />
                        <Route exact path="/create" element={<Create />} />
                        <Route exact path="/edit/:id" element={<Edit />} />
                    </Routes>
                </Router>
            </div>
        </ThemeProvider>
    );
}

export default App;
