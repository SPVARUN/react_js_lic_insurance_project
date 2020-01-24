import React, { Component } from 'react' ;
import { createStore } from 'redux' ;
import { statement } from '@babel/template';


class Reduxdemo extends Component 
{
    render() 
    {
         //Step 2 : Reducer -> State and Action
        
         const reducer = function (state , action){
            if(action.type === "ATTACk"){
                return action.payload
            }
            if(action.type === "GREENATTACk"){
                return action.payload
            }
            return state;
        }

        //Step 1 : Create Store -> Reducer and State

        const store = createStore (reducer, "peace");

       

        //Step 3 : Subscribe

        store.subscribe(() =>{
            console.log("store is now", store.getState());
        })

        //Step 4 : Dispatch Action

        store.dispatch({type: "ATTACK" , payload: "Iron Man"})
        store.dispatch({type: "GREENATTACK" , payload: "HULK"})

        return(
            <div>
                test

            </div>
        );
    }
}
export default Reduxdemo