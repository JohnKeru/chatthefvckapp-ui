import {useEffect, useState } from "react";
import SockJsClient from 'react-stomp'
import { getAllPersons, send, SOCKET_URL } from "../axios/axios";
import $ from 'jquery';
import '../css/ChatArea.css';
const ChatsArea = () => {
    const [persons, setPersons] = useState([]);
    const [name, setName] = useState('');
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [id, setId] = useState(0);

    useEffect(()=>{
        getAllPersons()
            .then(res => {
                setPersons(res);
                //*   res.filter(p => p.name === localStorage.getItem('name') && console.log("matches! "+p.name))
            });
    },[])

    function scrollToEnd(){
        var chatList = document.getElementById("body");
	    chatList.scrollTop = chatList.scrollHeight;
    }

    function sendMessage(e){
        e.preventDefault();
        setId(p => p+=1);
        const messageToSend = {id, message, name: localStorage.getItem('name')};
        scrollToEnd();
        $('#inputmessage').val('');
        send(messageToSend);
    }
    function onConnected(){
        //* if connected do something
    }
    function onDisconnected(){
        //* if disconnected do something
    }
    
    function onMessageReceived(msg){
        setName(msg.name);
        setMessages(p => [...p, msg])
    }
    return (
        <div className='messages'>
            <SockJsClient
                url={SOCKET_URL}
                topics={['/topic/public']}
                onConnect={onConnected}
                onDisconnect={onDisconnected}
                onMessage={msg => onMessageReceived(msg)}
                debug={false}
            />
            
            <ul className='names'>
                <h2>Names</h2>
                <div>
                   {persons.map(p => <li key={p.pid}>{p.name}</li>)} 
                </div>
            </ul>

            <div className='messagesContainer'>
                <div className="header">
                    <h1>chatthefvckapp</h1>
                    <p className={name === localStorage.getItem('name')
                    ? 'nameRight':'nameLeft'}>{name}</p>
                </div>
                
                <div className="body" id='body'>
                    {messages.map(m => 
                        <p key={m.id} className={m.name === localStorage.getItem('name')
                        ? 'user_message': 'message'}>{m && m.message}</p>
                    )}
                    
                </div>
                
                <div className="footer">
                    <form>
                        <input type="text" placeholder="type message" id='inputmessage'
                            onChange={e => setMessage(e.currentTarget.value)}/>
                        <button onClick={e => sendMessage(e)}>Send</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default ChatsArea
