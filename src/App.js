import './App.css';
import { BrowserRouter,Routes,Route, } from "react-router-dom"
import Register from './pages/auth/register';
// import Validate from './pages/auth/validate';
import Login from './pages/auth/login';
import Near from './pages/near';
// import RequireAuth from './core/auth/auth.component';
import User from './pages/user';
import UserMovieDetail from './pages/userDetail';
import Header from './shared/header';
import Footer from './shared/footer';
import Home from './pages/home';
import {useState} from 'react';
import styled, { ThemeProvider} from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from  "./themes.js";
import Notification from './pages/notification';
import Cookies from './pages/cookies';
import Grpd from './pages/grpd';
import Error from './pages/error';
import Now from './pages/now';
import Premiers from './pages/premiers';
import { useTranslation } from "react-i18next";


const StyledApp = styled.div`
color:${(props) => props.theme.fontColor};
`;



function App() {
  const [t, i18n] = useTranslation("global");
  const [theme, setTheme] = useState("dark");
  const [isChecked, setIsChecked] = useState(false);


 
 

  const themeToggler = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };






  return (
    

    <div className='wrap'>

    <BrowserRouter>
    <ThemeProvider theme={isChecked ? lightTheme : darkTheme}>
      <GlobalStyles/>
      <StyledApp>
    <Header />
    
<div className='wrap-options'>
    <div className="lenguage-btn">
          <div className="wrap-buttons">
            <button
              className="nav-btn nav-btn-es"
              onClick={() => i18n.changeLanguage("es")}
            >
              ES
            </button>
            <button
              className="nav-btn nav-btn-en"
              onClick={() => i18n.changeLanguage("en")}
            >
              EN
            </button>
          </div>
        </div>

<div className = 'container-loc'>      
        <div className="toggle-container">
          <label className="switch">
            <input type="checkbox"
            checked={isChecked} 
            onChange={handleOnChange}
            />
            <span className="slider round"></span>
          </label>
        </div>
        </div>
    
        </div>

    <Routes>
      <Route path = '/' element = {<Home></Home>} />
      <Route path='/now' element = {<Now/>}></Route>
      <Route path='/premiers' element = {<Premiers/>}></Route>      
      <Route path='/user' element = {<User/>}></Route>
      <Route path='/film/:tittle' element = {<UserMovieDetail/>}></Route>
      <Route path='/near' element = {<Near/>}></Route>
      <Route path='/notification' element ={<Notification />}></Route>
      <Route path='/cookies' element ={<Cookies />}></Route>
      <Route path='/rgpd' element ={<Grpd />}></Route>
      <Route path='*' element ={<Error />}></Route>
      <Route path = '/auth'>
        <Route path='register' element = {<Register/>}></Route>
        <Route path='login' element = {<Login/>}></Route>             
      </Route>
    </Routes>
    <Footer />
    </StyledApp>
    </ThemeProvider>
    </BrowserRouter>
    </div>


  );
}

export default App;
