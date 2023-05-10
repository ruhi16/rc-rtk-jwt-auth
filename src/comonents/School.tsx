import {useState, useEffect } from 'react';

// to fetch data from api
import {
  useGetAllSchoolsQuery
} from '../services/authApi';

// to store data at the main store of the project
import { useAppDispatch } from '../app/hooks';


// to get data from store
import { useAppSelector} from '../app/hooks';
import { selectSession } from '../features/sessionSlice';

import { selectSchool, setSchool } from '../features/schoolSlice';



function School() {
  const dispatch = useAppDispatch();
  const { data,  isSuccess, isLoading, isError, error } = useGetAllSchoolsQuery<any>();

  useEffect(() => {    
    if(isSuccess){ 
      // console.log("School Data:", data);
      console.log("School Data:", data.schools[0].name);      

      dispatch(setSchool({
          school_name: data.schools[0].name,
          school_dise: data.schools[0].dise,
          school_grade: data.schools[0].grade,
          school_address: data.schools[0].address,
          school_email: data.schools[0].email,
          school_mobile: data.schools[0].mobile,
          school_img_url: data.schools[0].img_url,
        })
      );
      // console.log("Successfully Session data saved at store.");
    }
  }, [isSuccess]);

  
   // get data from store.
   const currentSessionState = useAppSelector(selectSession);  
   const currentSchoolState = useAppSelector(selectSchool);
 
  if(isLoading){
    return(<><h1>School Data Loading...</h1></>)
  } 
  if(isError){
    return(
      <>
        <h1>School Data Error...</h1>
        error.map((e)=(
          <h6>e</h6>
        ))
      </>
    )
  }
  
  
  
  
  return (
    <>
      <div>School</div>
      <div>School Name: {currentSchoolState.school_name}</div>


      <br />
      <div>Session</div>
      <div>Session Name: {currentSessionState.session_name}</div>
      <div>Session Start: {currentSessionState.session_st_date}</div>
      <div>Session End : {currentSessionState.session_en_date}</div>
    </>
  )
}

export default School