import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import Agent from '../A/Agent/Agent';
import SidebarExample from '../A/CustomerPortal/Customer'
import './RoutingPage.css';

//INLINE STYLING
const Style = {
    textDecoration: 'none',
    margin: '40px',
    color: 'black',
    lineHeight: '40px',
    fontFamily: 'Crimson Text Serif',
    fontSize : '25px'

};

//Higher Order Component for adding new features

const HOC = Comp => class extends Component 
{
        componentWillMount() 
        {
            console.log("mount");
        }

        componentWillUnmount() 
        {
            console.log("unmount");
        }
        render() 
        {
            return <Comp/>;
        }
    };


const Agents = () => <Agent />; // Modules for displaying over browser

const HelpLineModule = () => <p>HelpLineModule</p>; // Modules for displaying over browser


const CustomerPortal = () => <SidebarExample/>; // Modules for displaying over browser


const PaymentModule = () => <p> PaymentModule</p>; // Modules for displaying over browser


const ConformModel = () => <p> ConformModel</p>; // Modules for displaying over browser


const Home = () => <div>Welcome!</div>;

//Header acts as a function for putting header navigation links
const Header = () => (
    <header className='Headder'>
        <nav className='Navbar'>
            <i class="fas fa-home"></i>
            <Link style={Style} to="/">Home</Link>
            <Link style={Style} to="/Agents">Agents</Link>
            <Link style={Style} to="/HelpLineModule">HelpLineModule</Link>
            <Link style={Style} to="/CustomerPortal">Customer Portal</Link>
            <Link style={Style} to="/PaymentModule">Payment Module</Link>
            <Link style={Style} to="/ConformModel">ConformModel</Link>
        </nav>
    </header>
);


//Content acts as a function for displaying different pages
const Content = () => (
    <main>
        <Switch> { /*  It will check the condition of user entered details */}
            <Route exact path="/" component={HOC(Home)} />  { /* Just checking HOC, How can we use HOC, */}
            <Route path="/Agents" component={HOC(Agents)} />
            <Route path="/HelpLineModule" component={HOC(HelpLineModule)} />
            <Route path="/CustomerPortal" component={HOC(CustomerPortal)} />
            <Route path="/PaymentModule" component={HOC(PaymentModule)} />
            <Route path="/ConformModel" component={HOC(ConformModel)} />
        </Switch>
    </main>
);



export default function RoutingPage() 
{
    return (
                <div>
                    <Header />
                    <Content /> 
                </div>
          );
}
