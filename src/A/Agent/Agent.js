import React, { useState } from "react";
import './Agent.css';


const Form = () => 
{
  //This is Hook related method for managing state of a component 
  //useState() is a method that will maintains state of userform

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

  //Adding styles

  const Style = {
    color: 'pink'
  }

  const updateFormData = event =>
    setFormData({
                    ...formData,  [event.target.name]: event.target.value
                });

  //Destructing complex object into smaller parts

  const { AgentCode, BranchCode, email, password, mobilenumber, pannumber, adharcard } = formData;

  return (
    <form>

      <div className='App'>
        <h2 style={Style}>Agent SignUp</h2>
        <li className='form-row'>
          <label className='Agent_label'>Agent Code: </label>
          <input
            className='Agent_input'
            value={AgentCode}
            onChange={e => updateFormData(e)}
            placeholder="Agent Code"
            type="text"
            name="AgentCode"
            required
          />
        </li>

        <li className='form-row'>
          <label className='Agent_label'>Branch Code: </label>
          <input
            className='Agent_input'
            value={BranchCode}
            onChange={e => updateFormData(e)}
            placeholder="Last Name"
            type="text"
            name="BranchCode"
            required
          />
        </li>

        <li className='form-row'>
          <label className='Agent_label'> Set Password:</label>
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
          <label className='Agent_label'>PAN Number:</label>
          <input
            className='Agent_input'
            value={pannumber}
            onChange={e => updateFormData(e)}
            placeholder="PAN Number"
            type="number"
            name="pannumber"
            required
          />

        </li>
        <li className='form-row'>
          <label className='Agent_label'>AdharCard:</label>
          <input
            className='Agent_input'
            value={adharcard}
            onChange={e => updateFormData(e)}
            placeholder="AdharCard Number"
            type="number"
            name="adharcard"
            required
          />

        </li>


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
          <label className='Agent_label'>MobileNumber:</label>
          <input
            className='Agent_input'
            value={mobilenumber}
            onChange={e => updateFormData(e)}
            placeholder="Mobile Number"
            type="number"
            name="mobilenumber"
            required
          />

        </li>




        <li className='form-row'>
          <button className = 'Agent_button' type="submit">SignUp</button>
        </li>
      </div>
    </form>
  );
};

export default Form;


