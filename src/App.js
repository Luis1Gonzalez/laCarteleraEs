import './App.css';
import { BrowserRouter,Routes,Route, } from "react-router-dom"
// import Register from './pages/auth/register';
// import Validate from './pages/auth/validate';
// import Login from './pages/auth/login';
import Near from './pages/near';
// import RequireAuth from './core/auth/auth.component';
import User from './pages/user';
import Header from './shared/header';
import Footer from './shared/footer';
import Home from './pages/home';
import {useState} from 'react';
import styled, { ThemeProvider} from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from  "./themes.js";
import { FaPowerOff } from "react-icons/fa";
import Notification from './pages/notification';
import Cookies from './pages/cookies';
import Grpd from './pages/grpd';
import Error from './pages/error';
import Now from './pages/now';
import Premiers from './pages/premiers';
import UserMovieDetail from './pages/userDetail';
import UserDos from './pages/userdos';

const StyledApp = styled.div`
color:${(props) => props.theme.fontColor};
`;

function App() {

  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };


  return (
    

    <div className='wrap'>

    <BrowserRouter>
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles/>
      <StyledApp>
    <Header />

<div className='wrap-switch'>
  
<div onClick = {() => themeToggler()} className ='turn-off'>{<FaPowerOff />}</div>

</div>
    

    <Routes>
      <Route path = '/' element = {<Home></Home>} />
      <Route path='/now' element = {<Now/>}></Route>
      {/* <Route path='/userDos' element= {<RequireAuth><UserDos/></RequireAuth>}></Route> */}
      <Route path='/premiers' element = {<Premiers/>}></Route>      
      {/* <Route path='/validate' element = {<Validate/>}></Route> */}
      {/* <Route path='/user' element = {<RequireAuth><User/></RequireAuth>}></Route> */}
      {/* <Route path='/user/:title' element = {<RequireAuth><UserMovieDetail/></RequireAuth>}></Route> */}
      {/* <Route path='/near' element = {<RequireAuth><Near/></RequireAuth>}></Route>   */}
      <Route path='/notification' element ={<Notification />}></Route>
      <Route path='/cookies' element ={<Cookies />}></Route>
      <Route path='/rgpd' element ={<Grpd />}></Route>
      <Route path='/error' element ={<Error />}></Route>
      <Route path = '/auth'>
        {/* <Route path='register' element = {<Register/>}></Route> */}
        {/* <Route path='login' element = {<Login/>}></Route>              */}
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
