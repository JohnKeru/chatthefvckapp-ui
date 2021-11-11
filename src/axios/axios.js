import axios from "axios";
const isDevelopment = true;
const origURL = isDevelopment ? 'https://chatthefvckapp.herokuapp.com/' : 'http://localhost:8080/';

export const SOCKET_URL = origURL+'ws';
const sendMessage = origURL+'send';

export const send = async message =>{
    return axios.post(sendMessage, message); 
}
const origRest = origURL;
const login = origRest+'add';
const persons = origRest+'persons'

export const addPerson = async person =>{
    return await axios.post(login, person)
        .then(res => res.data);
}
export const getAllPersons = async () => {
    return await axios.get(persons)
        .then(res => res.data);
}
export const getPerson = async pid => {
    return await axios.get(persons+pid)
        .then(res => res.data);
}

export const deletePerson = async pid => {
    return await axios.delete(persons+pid)
        .then(res => res.data);
}
/**/