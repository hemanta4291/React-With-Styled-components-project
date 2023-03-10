import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LoadingText from "./components/LoadingText";
import NotFound from "./components/NotFound";
import GlobalStyle from "./components/styles/Global.styled";
import { theme } from "./components/styles/Theme";

const Home = React.lazy(() => import('./pages/Home'));

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <Router>
          <Header />
          <Suspense fallback={<LoadingText height="calc(100vh - 47vh)" />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </Suspense>
          <Footer />
        </Router>

      </div>
    </ThemeProvider>
  );
}

export default App;
