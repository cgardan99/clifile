import React from 'react';
import {
    Switch,
    Route
  } from "react-router-dom";
import Interface from './Interface';
import Login from './Login';
import Corporativo from './Corporativo';
import { useSelector } from 'react-redux';

import Corporativos from './Corporativos';
import Users from '../features/users/components/Users';
import Sucursal from './Sucursal';
import Explorador from './Explorador';



function Main() {
    const { user } = useSelector((state) => state.user);
    return (
        <div className="w-full">
            {
                user != null ? 
                <div className="mt-20 ml-0 md:ml-64 p-5">
                    <Switch>
                        <Route path="/users">
                            <Users />
                        </Route>
                        <Route path="/sucursal/:id">
                            <Sucursal />
                        </Route>
                        <Route path="/corporativo/:id">
                            <Corporativo />
                        </Route>
                        <Route path="/corporativos">
                            <Corporativos />
                        </Route>
                        <Route path="/explorador">
                            <Explorador />
                        </Route>
                        <Route path="/">
                            <Interface />
                        </Route>
                    </Switch>
                </div>
                    : 
                <Switch>
                    <Route path="/">
                        <Login />
                    </Route>
                </Switch>
            }
        </div>
        
    );
}

export default Main;