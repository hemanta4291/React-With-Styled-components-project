import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import GlobalStyle from "./components/styles/Global.styled";
import { theme } from "./components/styles/Theme";
import Home from "./pages/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <div className="App">
       
        <Router>
        <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </Router>
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
