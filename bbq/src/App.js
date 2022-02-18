import { GlobalStyles }from "./components/Globals.styles";
import styled, { ThemeProvider } from "styled-components";
import { useState } from "react";
import NavBar from "./components/layout/nav/NavBar";

const Container = styled.div`
 height: 100vh;
 padding: 0 100px;
 position: relative;
`;

const LightTheme = {
  background: "white",
  fontColor: "black"
};

const DarkTheme = {
  background: "black",
  fontColor: "white"
};

function App() {
  const [theme, setTheme] = useState("dark");
  
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  };

  return (
    <ThemeProvider theme = {theme === "light" ? LightTheme : DarkTheme}>
        <Container>
          <GlobalStyles/>
          <NavBar theme = {theme} toggleTheme = {toggleTheme}/>
        </Container>
    </ThemeProvider>
  );
}

export default App;
