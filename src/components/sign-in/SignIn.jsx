import React, {Component} from 'react';
import './sing_in.scss'
import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'

import { signInWithGoogle } from '../../firebase/FirebaseUtils'

class SignIn extends Component {

  constructor(props) {
    super(props)
    this.state= {
      email: '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault()

    this.setState({ email: '', password: ''})
  }

  handleChange = event => {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput name='email' type='email' value={this.state.email}
                 handleChange={this.handleChange} label='Email'
                 required/>
          <FormInput name='password' type='password' value={this.state.password}
                 handleChange={this.handleChange} label='Password'
                 required/>
           <div className='buttons'>
             <CustomButton type='submit'>Sign in</CustomButton>
             <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
           </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
