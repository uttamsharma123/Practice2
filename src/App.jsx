import React from "react";
import Header from "./component/Header";
import Home from "./component/Home";
import CreateUser from "./component/CreateUser";
import AddUser from "./component/AddUser";


import {
    BrowserRouter as Router,
    Switch,
    Route,
 
} from "react-router-dom";
function App() {
    return (
        <Router>
            <div className="container">
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Create-User" component={CreateUser} />
                    <Route path="/Add-User" component={AddUser} />

                </Switch>

            </div>


        </Router>

    )
}


export default App;
