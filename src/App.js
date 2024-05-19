
import styled , { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import Hero from "./components/section/Hero";
import Skills  from "./components/section/Skills";
import Contact from "./components/section/Contact";
import Projects from "./components/section/Projects";
import Education from "./components/section/Education";
import Navbar from "./components/Navbar";
import {Routes, Route} from 'react-router-dom';


const Body =styled.div`
background-color:${({ theme }) => theme.bg};
color:white;
width:100%;
height:100vh;

overflow-x:hidden;
position:relative;
`;

function App() {
  return <ThemeProvider theme={darkTheme} >   <Body>
    < Navbar />
     <Routes>
        <Route path="/" element={ <Hero />}> </Route>
  
         
          <Route path="/Skills" element={<Skills />} > </Route>
          <Route path="/Contact" element={<Contact />} ></Route>
          <Route path="/Projects" element={<Projects />} ></Route>
          <Route path="/Education" element={<Education />} ></Route>
        
      </Routes>
 
   
  
 

    </Body>
    </ThemeProvider>
}

export default App;
