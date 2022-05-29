import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import Header from "./components/Header";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import Hero from "./components/Hero";
const theme = createTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      {/* <Button variant="contained" color="primary">
        hello
      </Button> */}
      <Hero />
    </ThemeProvider>
  );
}

export default App;
