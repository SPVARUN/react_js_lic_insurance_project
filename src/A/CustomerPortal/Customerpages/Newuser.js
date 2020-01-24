import React, { useState } from "react";
import './Newuser.css'
const Newuser = () => {
    const [formData, setFormData] = useState({
        AgentCode: "",
        BranchCode: "",
        lastName: "",
        email: "",
        password: "",
        mobilenumber: "",
        pannumber: " ",
        adharcard: ""
    });
    const Style = {
        color: 'pink'
    }

    const updateFormData = event =>
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });

    const { AgentCode, BranchCode, email, password, mobilenumber, pannumber, adharcard } = formData;

    return (
        <form>

            <ul className='Newuser_wrapper'>
                {/* <h2 style={Style}>Agent SignUp</h2> */}
                <li className='Newuser_formrow'>
                    <label className='Newuser_label'>Customer Name: </label>
                    <input
                        className='Newuser_input'
                        value={AgentCode}
                        onChange={e => updateFormData(e)}
                        placeholder="Customer Name"
                        type="text"
                        name="AgentCode"
                        required
                    />
                </li>

                <li className='Newuser_formrow'>
                    <label className='Newuser_label'>Branch Code: </label>
                    <input
                        className='Newuser_input'
                        value={BranchCode}
                        onChange={e => updateFormData(e)}
                        placeholder="Last Name"
                        type="text"
                        name="BranchCode"
                        required
                    />
                </li>

                <li className='Newuser_formrow'>
                    <label className='Newuser_label'> Set Password:</label>
                    <input
                        className='Newuser_input'
                        value={password}
                        onChange={e => updateFormData(e)}
                        placeholder="Password"
                        type="password"
                        name="password"
                        required
                    />
                </li>

                <li className='Newuser_formrow'>
                    <label className='Newuser_label'>PAN Number:</label>
                    <input
                        className='Newuser_input'
                        value={pannumber}
                        onChange={e => updateFormData(e)}
                        placeholder="PAN Number"
                        type="number"
                        name="pannumber"
                        required
                    />

                </li>
                <li className='Newuser_formrow'>
                    <label className='Newuser_label'>AdharCard:</label>
                    <input
                        className='Newuser_input'
                        value={adharcard}
                        onChange={e => updateFormData(e)}
                        placeholder="AdharCard Number"
                        type="number"
                        name="adharcard"
                        required
                    />

                </li>


                <li className='Newuser_formrow'>
                    <label className='Newuser_label'> Enter Email :</label>
                    <input
                        className='Newuser_input'
                        value={email}
                        onChange={e => updateFormData(e)}
                        placeholder="Email Address"
                        type="email"
                        name="email"
                        required
                    />

                </li>
                <li className='Newuser_formrow'>
                    <label className='Newuser_label'>MobileNumber:</label>
                    <input
                        className='Newuser_input'
                        value={mobilenumber}
                        onChange={e => updateFormData(e)}
                        placeholder="Mobile Number"
                        type="number"
                        name="mobilenumber"
                        required
                    />

                </li>





            </ul>
            <li className='Newuser_formrow'>
                <button className='Newuser_button' type="submit">SignUp</button>
            </li>
        </form>
    );
};

export default Newuser;


