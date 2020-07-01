import React, { Component } from 'react';

import FormField from '../../utils/Forms/formField'

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
                    placehilder: 'Email'
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
                    placehilder: 'Password'
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
            <div>
                <form onSubmit={(event)=>this.submitForm(event)} >
                    <FormField
                        id={'email'}
                        formData={this.state.formData.email}
                        change={(element)=>this.updateForm()}
                    />

                    <FormField
                        id={'password'}
                        formData={this.state.formData.password}
                        change={(element)=>this.updateForm(element)}
                    />

                </form>
            </div>
        );
    }
}

export default login;