import React from 'react';

import './sign-up.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth , createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends React.Component {
    constructor(){
        super();
        this.state = {
            displayName : '',
            email : '',
            password: '',
            confirmPassword : ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName , email , password , confirmPassword } = this.state;

        if( password !== confirmPassword ){
            alert("Password didn't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword( email , password );
            await createUserProfileDocument( user , {displayName} );

            this.setState({ displayName : '' , email: '' , password: '' , confirmPassword : '' });

        } catch (error) {
            console.log(error);
        }
        
    }

    handleChange = event => {
        const { name , value } = event.target;

        this.setState({ [name] : value });
    }

    render(){
        return(
            <div className="sign-up">
                <h2>I do not have an account</h2>
                <span>Sign up with your email and password.</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        handalChange={this.handleChange}
                        label="Display Name"
                        name="displayName"
                        type="text"
                        value={this.state.displayName}
                        required
                    />

                    <FormInput
                        handalChange={this.handleChange}
                        label="Email"
                        name="email"
                        type="email"
                        value={this.state.email}
                        required
                    />

                    <FormInput
                        handalChange={this.handleChange}
                        label="Password"
                        name="password"
                        type="password"
                        value={this.state.password}
                        required
                    />

                    <FormInput
                        handalChange={this.handleChange}
                        label="Confirm Password"
                        name="confirmPassword"
                        type="password"
                        value={this.state.confirmPassword}
                        required
                    />
                    
                    <CustomButton type="submit">Sign Up</CustomButton>                   
                </form>
            </div>
        )
    }
}

export default SignUp;