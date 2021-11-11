import React from 'react'
import { Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import ChatsArea from './components/ChatsArea'
import Login from './components/Login'
import './index.css'
const App = () => {
    return (
        <div className='app'>
            <Router>
                <Switch>
                    <Route path='/' exact component={Login}/>
                    <Route path='/messages'component={ChatsArea}/>
                </Switch>
            </Router>
        </div>
    )
}

export default App
