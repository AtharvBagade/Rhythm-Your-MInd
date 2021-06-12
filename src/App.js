import React from 'react';                                                                                                          
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Info from "./components/Info";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App2.css"
import {
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import About from './components/About';
import Topics from './components/Topics';

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FB2743"
    },

    secondary: {
      main: "#EF7A61"
    }
  },
  typography: {
    fontFamily: ["Helvetica"],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: "2rem"
    },

    h5: {
      fontWeight: 100,
      lineHeight: "2rem"
    }
  }
});


function App() {

  return (
    <Router >
    <ThemeProvider theme={Theme}>
      <Navbar/>
     
   
      <div className="littleSpace">
      <Switch>
       <Route path="/" component={Home} exact />
       <Route path="/contact" component={Contact}  exact/>
       <Route path="/Info" component={Info} exact />
       <Route path="/about" component={About} exact />
       <Route path="/topic" component={Topics} exact />
     </Switch>
    
      </div>
      <div className="bigSpace">
      <Footer/>
      </div>
   


    </ThemeProvider>

    

    </Router>

  );


  
}

export default App;

