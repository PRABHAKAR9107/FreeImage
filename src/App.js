import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import Header from "./components/Header";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import Hero from "./components/Hero";
import About from "./components/About";
const theme = createTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },

    secondary: {
      main: "#1de9b6",
    },

    third: {
      main: " #3236a8",
    },
  },

  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h2",
          h2: "h2",
          h3: "h2",
          h4: "h2",
          h5: "h2",
          h6: "h2",
          subtitle1: "h2",
          subtitle2: "h2",
          body1: "span",
          body2: "span",
        },
      },
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
      <About />
    </ThemeProvider>
  );
}

export default App;
