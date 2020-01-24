import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Loginpage from './LoginPage/Loginpage';
import RoutingPage from '../Routing/RoutingPage'

class Main extends Component 
{
    state = {
               step: 1,
            }

    //Next step to navigate from one page to another page

    
    nextStep = () => {
                        const { step } = this.state //Increamenting step means page numbers to go next page
                        this.setState({
                                        step: step + 1
                                     })
                     }

    //Previous step to navigate from next page  to back page
    prevStep = () => {
                            const { step } = this.state //Decreamenting step means page numbers to go back to the previous  page
                            this.setState({
                                            step: step - 1
                                          })
                     }


//Render method for displaying pages

    render() 
    {
        const { step } = this.state; // Passing step to check next page or previous page

        switch (step) 
        {
            case 1: return <Loginpage  nextStep={this.nextStep} />
            case 2: return <BrowserRouter>
                               <RoutingPage />
                           </BrowserRouter>
            default: return null

        }
    }
}

export default Main;