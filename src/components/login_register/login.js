import React, { Component } from 'react';

import FormField from '../../utils/Forms/formField'
import Button from '../../utils/button'

class login extends Component {

    state={
        formError:false,
        formSuccess:'',
        formData:{
            email:{
                element:'input',
                value:'',
                config:{
                    name:'email_input',
                    type:'email',
                    placeholder: 'Email'
                },
                validation:{
                    required:true,
                    email:true
                },
                valid:false,
                touched:false,
                validationMessage:''
            },
            password:{
                element:'input',
                value:'',
                config:{
                    name:'password_input',
                    type:'password',
                    placeholder: 'Password'
                },
                validation:{
                    required:true,
                }, 
                valid:false,
                touched:false,
                validationMessage:''
            }
        }
    }

    submitForm=()=>{}

    updateForm=()=>{}

    render() {
        return (
            <div className='login-card' >
                <div>
                    {/* <img/> */}
                    <h2>Welcome back</h2>
                    <p>Sign in your account to continue</p>
                    <h3>Enter login details</h3>
                </div>
                <form onSubmit={(event)=>this.submitForm(event)} >
                    <FormField
                        id={'email'}
                        formData={this.state.formData.email}
                        change={(element)=>this.updateForm(element)}
                    />

                    <FormField
                        id={'password'}
                        formData={this.state.formData.password}
                        change={(element)=>this.updateForm(element)}
                    />
                    <Button
                        bck= 'blue'
                        color = '#fff'
                        pad = '5px 10px'
                        width = '50%'
                        display = 'block'
                        margin='20px auto'
                    >
                        {`login ->`}
                    </Button>
                </form>
            </div>
        );
    }
}

export default login;