
import { useNavigate } from 'react-router-dom';
import { useState, useEffect} from 'react';
import { MDBInput } from "mdb-react-ui-kit";
import {toast} from 'react-toastify';

import { useLoginUserMutation } from '../services/authApi';

import { useAppDispatch } from '../app/hooks';

// action creators, that change  
import { setUser } from '../features/authSlice';    



const initialState = {    
    email: "",
    password: ""
}



const Login = () => {
   const [formValue, setFormValue] = useState(initialState);
   const { email, password } = formValue;

   const dispatch = useAppDispatch();

   const navigate = useNavigate();
   const [loginUser, {data, isSuccess, isError, error}] = useLoginUserMutation();


    // to write any text in input text box
    const handleChange = (e: any) => {
        setFormValue({...formValue, [e.target.name]: e.target.value})
    }

    // now it call to rtk mutation to loginUser endpoint method
    const handleLogin = async () => {
        if(email && password){
            await loginUser({email, password})
            toast.success("User sucessfully loggedin.");
        }else{
            toast.error("Please fill all Input Fields");
        }
    };

    useEffect(() => {

        if(isSuccess){
            toast.success("User Login Sucessfully");
            // console.log("Name:", data.user.firstname);
            // console.log("Token:", data.user.access_token);

            dispatch(setUser({name: data.user.firstname, token: data.user.access_token}));
            navigate('/dashboard');
        }

    }, [isSuccess]);



  return (


    <>    
      <section className="">
        <div className="container-fluid">
        <div className="row">
            <div className="col-lg-6 vh-100 bg-warning">
                Hello, isError, isSuccess
                {isError}
                {isSuccess}
                
            </div>
            <div className="col-lg-6 vh-100 bg-primary px-5 py-5">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Login Form</h5>
                    <p className="card-text">To Enter Please Login First.</p>
                    <br/>
                    <MDBInput 
                        className="form-control form-control-lg"
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        label="Enter your email"
                    />
                    <br />

                    <MDBInput 
                        className="form-control form-control-lg"
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        label="Enter password"
                    />
                    <br/>


                    <button type="button" onClick={() => handleLogin()} className="btn btn-primary">Login</button>
                    <br /><br/>
                    <p className="card-text">New user, go to Register Page</p>

                </div>
                
                </div>
            </div>
        </div>
        </div>

        </section>
    </>
    
  )
}

export default Login