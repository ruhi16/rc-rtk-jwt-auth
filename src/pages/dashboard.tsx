
import { Link, Outlet, useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';

import { useAppSelector} from '../app/hooks';
import { useAppDispatch } from '../app/hooks';

import { logout, selectAuth } from '../features/authSlice';

import { MDBBtn } from 'mdb-react-ui-kit';



const Dashboard = () => {
  const { name, token } = useAppSelector(selectAuth);
  
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    toast.success("successfully logged out.")
    navigate('/login');
  }


  return (
    <>
      <section className="">
        <div className="container-fluid">
        <div className="row">
            <div className="col-lg-10 vh-100 bg-warning">
                Dashboard
                {/* <MDBBtn >Primary </MDBBtn> */}
                <nav className='primary-nav'>
                  <Link to='session' >Sesion</Link>
                  <Link to='school' >School</Link>
                </nav>
                <Outlet />


                
            </div>
            <div className="col-lg-2 vh-100 bg-primary px-5 py-5">
              <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Welcome Dashboard</h4>
                    <p className="card-text">Get your own Details</p>
                    <br/>
                    <h3>Name: {name}</h3>
                    <br/>

                    <button type="button" onClick={() => handleLogout()} className="btn btn-danger ">Logout</button>
                    <br /><br/>

                    
                </div>
                
              </div>
          </div>
        </div>
        </div>

        </section>
    </>
  )
}

export default Dashboard