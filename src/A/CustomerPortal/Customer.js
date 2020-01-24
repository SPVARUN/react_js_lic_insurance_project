import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Registered from './Customerpages/Registered'
import Newuser from "./Customerpages/Newuser";

const routes = [
    {
        path: "/bubblegum",
        main: () => <Newuser/>
    },
    {
        path: "/Registered",
        main: () => <Registered/>
    }
];

const Li_Style = {
    textDecoration: 'none',
    padding: '10px',
    lineHeight: '100px',
    fontSize: '25px',
    display: 'inlineBlock',
    backgroundColor: 'rgb(70, 132, 204)',
    border: '1px solid',
    borderRadius: '2rem'
}

export default function SidebarExample() {
    return (
        <Router>
            <div style={{ display: "flex" }}>
                <div
                    style={{
                        padding: "10px",
                        width: "40%"
                    }}
                >
                    <ul style={{ listStyleType: "none", padding: 100 }}>
                        <li>
                            <Link to="/"></Link>
                        </li>
                        <li>
                            <Link style={Li_Style} to="/bubblegum">NewUser</Link>
                        </li>
                        <li>
                            <Link style={Li_Style} to="/Registered">Registered User</Link>
                        </li>
                    </ul>

                    <Switch>
                        {routes.map((route, index) => (
                            <Route

                                path={route.path}
                                exact={route.exact}

                            />
                        ))}
                    </Switch>
                </div>

                <div style={{ flex: 1, padding: "10px" }}>
                    <Switch>
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                children={<route.main />}
                            />
                        ))}
                    </Switch>
                </div>
            </div>
        </Router>
    );
}
