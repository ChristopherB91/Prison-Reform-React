import React, { useState } from "react";
import "./PR.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Search from "./Jobserach";
import Homepage from "./Home";
import Nav from "./Nav";
import Contact from "./ContactForm";
import { lightTheme, darkTheme, GlobalStyles } from "./DarkMode";
import styled, { ThemeProvider } from "styled-components";

const StyledApp = styled.div`
  // color: ${(props) => props.theme.fontColor};
`;

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />

      <Router>
      <StyledApp>
          {/* <Nav /> */}
          <div className="Content">
            <Switch>
                <Route path="/" exact component={Homepage} />
                {/* <Route path="/Darkmode"   component={Profile} stuff={Homepage}/> */}
                <Route path="Home" exact component={Homepage} />
                {/* <Route path="/Jobsearch" component={Search} /> */}
                {/* <Route path="/ContactForm" component={Contact} /> */}
              
            </Switch>
          </div>
          <button onClick={() => themeToggler()}>DarkMode</button>
      </StyledApp>
      </Router>
    </ThemeProvider>
  );
}

export default App;
