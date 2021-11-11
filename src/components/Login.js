import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { addPerson, getAllPersons } from '../axios/axios';
import '../css/Login.css';

const Login = () => {
    const [name, setName] = useState('');
    const [pid, setPid] = useState();
    const history = useHistory();
    
    useEffect(()=>{
        getAllPersons()
            .then(res=>setPid(res.length));
    },[])

    function enter(e){
        e.preventDefault();
        const personToAdd = {pid: pid+1, name};
        addPerson(personToAdd)
            .then(() => {
                localStorage.setItem('name', name);
                history.push('/messages')
            });
    }
    return (
        <form className='loginForm'>
            <input type="text" placeholder='username or nickname please.'onChange={e=>setName(e.currentTarget.value)}/>
            <button onClick={(e) => enter(e)}>Enter Chat</button>
        </form>
    )
}

export default Login
