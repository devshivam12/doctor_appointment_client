import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import Layout from "./layout/Layout";
import { useEffect, useRef, useState } from 'react';
import { useGetDoctorQuery, useGetPatientQuery } from './redux/api/api';
import { checkAuth } from './redux/reducers/auth';

function App() {
  const dispatch = useDispatch()
  const role = useSelector((state) => state.auth.role)
  const { isAuthenticate, user } = useSelector((state) => state.auth)

  const [triggerPatientData, setTriggerPatientData] = useState(false)
  const [triggerDoctorData, setTriggerDoctorData] = useState(false)

  const prevRole = useRef()

  useEffect(() => {
    dispatch(checkAuth())
  }, [dispatch])

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
    if (role !== prevRole.current) {
      if (role === 'patient' && patientData) {
        console.log(patientData);
      } else if (role === 'doctor' && doctorData) {
        console.log(doctorData);
      }
      prevRole.current = role;
    }
  }, [role, patientData, doctorData]);

  return (
    <>
      <Layout patientData={patientData} doctorData={doctorData} isAuthenticate={isAuthenticate} user={user} />
    </>
  );
}

export default App;
