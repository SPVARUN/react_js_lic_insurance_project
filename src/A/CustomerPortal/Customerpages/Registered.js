import React from "react";
import useForm from "react-hook-form";
import ErrorMessage from "../../../A/Agent/ErrorMessage";
import '../../../Components/LoginPage/Loginpage.css';

function Registered(props) {
    const {
        register,
        handleSubmit,
        errors,
        setError,
        clearError,
        formState: { isSubmitting }
    } = useForm();
    const onSubmit = data => {
        console.log('No errors, submit callback called!');
    };
    const next = (e) => {
        e.preventDefault();
        props.nextStep();
    }
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    const validateUserName = async value => {
        await sleep(1000);
        if (value !== "username") {
            setError("username", "validate");
        } else {
            clearError("username");
        }
    };

    return (
        <React.Fragment className='LoginForm'>
            <div >

                <form className="Login_form" onSubmit={handleSubmit(onSubmit)}>

                    <h2 className='Loginhead'>Customer LoginPage</h2>



                    <label className='Login_label' >SelectRole <span>*</span></label>
                    <select className='Sele' name="role" ref={register({ required: true })}>
                        <option value="">Select...</option>
                        <option value="Agent">Agent</option>
                        <option value="Customer">Customer</option>
                    </select>
                    <ErrorMessage error={errors.role} />


                    <label className='Login_label'>Email: <span>*</span></label>
                    <input
                        className='Login_input'
                        type="email"
                        name="email"
                        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                    />
                    <ErrorMessage error={errors.email} />


                    <label className='Login_label'>Password: <span>*</span></label>
                    <input className='Login_input' type="password" name="password" ref={register({ required: true })} />
                    <ErrorMessage error={errors.password} />

                    <button onClick={next} disabled={isSubmitting}>Login</button>


                </form>
            </div>
        </React.Fragment>
    );
}

export default Registered;
