import React, { Component } from 'react';

import FormField from '../../utils/Forms/formField'
import Button from '../../utils/button'

class Register extends Component {

    state={
        formError:false,
        formSuccess:'',
        formData:{
            name:{
                element:'input',
                value:'',
                config:{
                    name:'name_input',
                    type:'name',
                    placeholder: 'Your name'
                },
                validation:{
                    required:true,
                },
                valid:false,
                touched:false,
                validationMessage:''
            },
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
            phone:{
                element:'input',
                value:'',
                config:{
                    name:'phone_input',
                    type:'number',
                    placeholder: 'Phone number'
                },
                validation:{
                    required:true,
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
            <div className='register-card' >
                <div>
                    {/* <img/> */}
                    <h2>Welcome </h2>
                    <p>Sign up to continue</p>
                    <h3>Enter details</h3>
                </div>
                <form onSubmit={(event)=>this.submitForm(event)} >
                    <FormField
                        id={'name'}
                        formData={this.state.formData.email}
                        change={(element)=>this.updateForm(element)}
                    />

                    <FormField
                        id={'email'}
                        formData={this.state.formData.password}
                        change={(element)=>this.updateForm(element)}
                    />
                    <FormField
                        id={'phone'}
                        formData={this.state.formData.password}
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
                        <p>Register -> </p>
                    </Button>
                </form>
            </div>
        );
    }
}

export default Register;