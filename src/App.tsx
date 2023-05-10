
import {useEffect} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/register';
import Dashboard from './pages/Dashboard';
import { useAppDispatch } from './app/hooks';
import { setUser } from './features/authSlice';
import PrivateRoutes from './comonents/PrivateRoutes';
import Welcome from './pages/Welcome';
import UnProtectedRoutes from './comonents/UnProtectedRoutes';

import Navbar from './comonents/Navbar';
import NotFound from './pages/NotFound';
import Session from './comonents/Session';
import School from './comonents/School';

function App() {
  const dispatch = useAppDispatch();
  const user = JSON.parse(localStorage.getItem("myuser") || "{}");


  // will run, whenever out app get mounted
  useEffect(() => {
    dispatch(setUser(user));
  }, []);



  return (
    <BrowserRouter>
      <Navbar />
      <Routes>     

          <Route path='/' element={<UnProtectedRoutes /> } >           
            <Route path='/welcome' element={ <Welcome /> } />  
            <Route path='/login' element={ <Login />} />
            <Route path='/register' element={<Register />} />        
            
          </Route>
        
        <Route path= '/' element={<PrivateRoutes/>} >
          <Route element={<Dashboard />} path='/dashboard' >
            <Route index element={<School/>}/>
            <Route path='session' element={<Session />} />        
            <Route path='school' element={<School />} />        

          </Route>
          
        </Route>



        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
