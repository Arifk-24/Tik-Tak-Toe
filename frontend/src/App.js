import React ,{useEffect, useState} from 'react';
import Authenticate from './component/Authenticate';
import Dashboard from './component/Dashboard'
export default function App() {
    const [isloggedin, setLogin] = useState(false);
    useEffect(()=>
    {
      const islogin= JSON.parse(localStorage.getItem('login'));
      if(islogin)
      {
        setLogin(islogin);
      }
    });
    if(isloggedin === true)
    {
      return <Dashboard/>;
    }
    else
    {
      return <Authenticate setlogin= {setLogin} />
    }
}
