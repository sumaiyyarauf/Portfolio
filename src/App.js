import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/homepage';
import Contact from './components/pages/contactpage';
import Projects from './components/pages/projectpage';
import Aboutpage from './components/pages/aboutpage';
import Form from './components/contact/form';
import Sidebar from './components/sidebar';
import TailwindProject from './components/pages/TailwindProject';
import { ThemeProvider } from "./context/themContext";
import Portfolio from './components/pages/PortfolioProject';
import KnestProject from './components/pages/KnstProject';



function App() {
  return (
    <ThemeProvider>
    <BrowserRouter>
       <Navbar/> 
       <Routes>
           <Route 
             path='/'
             element={<HomePage/>}
           />
           <Route 
             path='/contact'
             element={<Contact/>}
           />
           <Route 
             path='/about'
             element={<Aboutpage/>}
           />
            <Route 
             path='/projects'
             element={<Projects/>}
           />
           <Route 
             path='/form'
             element={<Form />}
           />
           <Route
            path={"/projects/tailwind-project"}
            element={
                <TailwindProject />
            }
          />
           <Route
            path={"/projects/portfolio-project"}
            element={
                <Portfolio />
            }
          />
           <Route
            path={"/projects/knst-project"}
            element={
                <KnestProject />
            }
          />
       </Routes>
       <Sidebar/>
       <Footer />
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

