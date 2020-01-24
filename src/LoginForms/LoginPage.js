import React, { useState } from "react";
import '../A/Agent/Agent.css'


const LoginPage = () => {

    const [formData, setFormData] = useState({

        email: "",
        password: ""
    });

    //Adding styles

    const Style = {
        color: 'pink'
    }

    const updateFormData = event =>
        setFormData({
            ...formData, [event.target.name]: event.target.value
        });

    //Destructing complex object into smaller parts

    const { email, password } = formData;

    return (
        <form>

            <div className='App'>
                <h2 style={Style}>Agent SignUp</h2>
                <li className='form-row'>
                    <label className='Agent_label'> Enter Email :</label>
                    <input
                        className='Agent_input'
                        value={email}
                        onChange={e => updateFormData(e)}
                        placeholder="Email Address"
                        type="email"
                        name="email"
                        required
                    />

                </li>

                <li className='form-row'>
                    <label className='Agent_label'> Password:</label>
                    <input
                        className='Agent_input'
                        value={password}
                        onChange={e => updateFormData(e)}
                        placeholder="Password"
                        type="password"
                        name="password"
                        required
                    />
                </li>
                <li className='form-row'>
                    <button className='Agent_button' type="submit">SignUp</button>
                </li>
            </div>
        </form>
    );
};

export default LoginPage;


