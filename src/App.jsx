import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import Layout from "./layout/Layout";
import { useEffect } from 'react';
import { BASE_URL } from './config';
// import { userExists, userNotExists } from './redux/reducers/auth';
import axios from 'axios';
import { getOrSavedFromStorage } from './libs/feature';
import { FaDiaspora } from 'react-icons/fa';
import { useGetDoctorQuery, useGetPatientQuery } from './redux/api/api';

function App() {

  const role = useSelector((state) => state.auth.role)
  console.log(role)

  const {data: patientData} = useGetPatientQuery()

  const {data: doctorData} = useGetDoctorQuery()

  if(role === 'patient'){
    console.log(patientData)
  }
  else if(role === 'doctor'){
    // const {data, isLoading} = useGetDoctorQuery()
    console.log(doctorData)
  }


  return (
    <>
      <Layout />
    </>
  );
}

export default App;
