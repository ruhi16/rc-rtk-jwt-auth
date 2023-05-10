import { useState, useEffect} from 'react';

// to fetch data from api
import { 
  useGetAllSessionsQuery,
  // useGetAllSchoolsQuery
 } from '../services/authApi';

// to store data at the main store of the project
import { useAppDispatch} from '../app/hooks';
import { setSession } from '../features/sessionSlice';
// import { setSchool } from '../features/schoolSlice';


// to get data from store
import { useAppSelector} from '../app/hooks';
import { selectSession } from '../features/sessionSlice';
import { selectSchool } from '../features/schoolSlice';



function Session() {

  const dispatch = useAppDispatch();
  const {data,  isSuccess, isLoading, isError, error} = useGetAllSessionsQuery<any>(null);

  // const {data: schoolData, isSuccess: isSchoolSuccess, isError: isSchoolError, error: schoolError } = useGetAllSchoolsQuery();

  const currentSessionState = useAppSelector(selectSession);
  const currentSchoolState = useAppSelector(selectSchool);


  useEffect(() => {
    if(isSuccess){ 
      // console.log("Session Data:", data);
      console.log("Session Data:", data.session);
        dispatch(setSession({
            session_name: data.session[0].session_name,
            session_st_date: data.session[0].start_date,
            session_en_date: data.session[0].end_date
          })
        );
        // console.log("Successfully Session data saved at store.");
    }
  }, [isSuccess]);


  if(isLoading){
    return(<><h1>Session Data Loading...</h1></>)
  } 
  if(isError){
    return(<><h1>Session Data Error...</h1></>)
  }
  
  

  return (
    <>
      <div>Session</div>
      <h2>School: { currentSchoolState.school_name }</h2>


      <div>Session</div>
      <section className="">
        <div className="container-fluid">
        <div className="row">
            <div className="col-lg-12 vh-100 bg-warning">
                {/* <h2>Session: {currentSession.session_name}</h2> */}
                <h2>Session: {currentSessionState.session_name}</h2>


                {/* <button type="button" onClick={() => handleLogin()} className="btn btn-primary">Login</button> */}
                
            </div>
            
        </div>
        </div>

        </section>
    </>
    
  )
}

export default Session