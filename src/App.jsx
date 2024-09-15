import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import Layout from "./layout/Layout";
import { useEffect } from 'react';
import { BASE_URL } from './config';
import { userExists, userNotExists } from './redux/reducers/auth';
import axios from 'axios';

function App() {

  // const { user, loader, role } = useSelector((state => state.auth))
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   if (role === 'patient') {
  //     axios.get(`${BASE_URL}/user/profile/me`, { withCredentials: true })
  //       .then((res) => dispatch(userExists(res.data.user)))
  //       .catch((err) => dispatch(userNotExists()))
  //   }
  //   else if (role === 'doctor') {
  //     axios.get(`${BASE_URL}/doctor/profile/me`, { withCredentials: true })
  //       .then((res) => dispatch(userExists(res.data.user)))
  //       .catch((err) => dispatch(userNotExists()))
  //   }
  // }, [dispatch, role])
  return (
    <>
      <Layout />
    </>
  );
}

export default App;
