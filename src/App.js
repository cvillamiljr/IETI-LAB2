import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-datepicker/dist/react-datepicker.css';
import {Login} from './components/Login.js';
import {TodoApp} from './components/TodoApp';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

const LoginView = () => (
    <Login/>
);

const TodoAppView = () => (
    <TodoApp/>
);

class App extends Component {

    constructor(props) {
        super(props);
        localStorage.setItem('email',"cesar@mail.com");
        localStorage.setItem('password',"cesar123");
 
     }

    render() {

        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">TODO React App</h1>
                    </header>

                    <br/>
                    <br/>

                    <ul>
                        {localStorage.getItem('isLoggedIn') === "true"?
                            <li><Link to="/todo">Todo</Link></li>:<li><Link to="/">Login</Link></li>}
                    </ul>

                    <div>
                        {localStorage.getItem('isLoggedIn') === "true"?
                            <Route path="/todo" component={TodoAppView}/>:<Route exact path="/" component={LoginView}/>
                        }
                    </div>
                </div>
            </Router>
        );
    }

    
}

export default App;
