import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import Layout from "./layout/Layout";
import { useEffect } from 'react';
import { BASE_URL } from './config';
import { userExists, userNotExists } from './redux/reducers/auth';
import axios from 'axios';

function App() {

  const { user, role, loader } = useSelector((state => state.auth))
  const dispatch = useDispatch()
  console.log(user)
  
  useEffect(() => {
    axios.get(`${BASE_URL}/user/profile/me`, { withCredentials: true })
      .then((res) =>{
        console.log(res)
        dispatch(userExists(res.data.data))
      })
      .catch((error) =>{
        if(error.response.status === 401){
          dispatch(userNotExists())
        }
      })
  }, [dispatch])

  
  return (
    <>
      <Layout />
    </>
  );
}

export default App;
