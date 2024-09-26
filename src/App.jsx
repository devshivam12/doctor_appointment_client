import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import Layout from "./layout/Layout";
import { useEffect, useState } from 'react';
import { BASE_URL } from './config';
// import { userExists, userNotExists } from './redux/reducers/auth';
import axios from 'axios';
import { getOrSavedFromStorage } from './libs/feature';
import { FaDiaspora } from 'react-icons/fa';
import { useGetDoctorQuery, useGetPatientQuery } from './redux/api/api';

function App() {

  const role = useSelector((state) => state.auth.role)
  console.log(role)

  const [triggerPatientData, setTriggerPatientData] = useState(false)
  const [triggerDoctorData, setTriggerDoctorData] = useState(false)


  const { data: patientData } = useGetPatientQuery(undefined, { skip: !triggerPatientData })

  const { data: doctorData } = useGetDoctorQuery(undefined, { skip: !triggerDoctorData })

  useEffect(() => {
    if (role === 'patient') {
      setTriggerPatientData(true)
      setTriggerDoctorData(false)
    }
    else if (role === 'doctor') {
      setTriggerDoctorData(true)
      setTriggerPatientData(false)
    }
  }, [role])
  useEffect(() => {
    if (role === 'patient' && patientData) {
      console.log(patientData)
    }
    else if (role === 'doctor' && doctorData) {
      console.log(doctorData)
    }
  }, [role, patientData, doctorData])


  return (
    <>
      <Layout patientData={patientData} doctorData={doctorData} />
    </>
  );
}

export default App;
