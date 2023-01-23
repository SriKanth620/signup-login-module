import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Login extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        email: "",
        password: "",
        erroremail: "",
        errorpassword: "",
      }
    }
    emailHandler =(event)=>{
        this.setState({ 
            email: event.target.value
    })
        let value= event.target.value;
        const mail= /^([a-z\d]+)@([a-z]+)\.([a-z]{2,7})$/;
        let result= mail.test(value)
        if(result === true){
            this.setState({ 
                erroremail:""
        })
        }
        else{
                this.setState({ 
                    erroremail: "Invalid Email!"
            })

        }   
        }
    passwordHandler= (event)=>{
        this.setState({
            password: event.target.value
        })
        let value= event.target.value;
        const pass= /^([\w\d]{6,12})$/;
        let result= pass.test(value)
        if(result === true){
            this.setState({ 
                errorpassword:""
        })
        }
        else if(value.length > 12){
            this.setState({ 
                errorpassword:"Password should be less than 12 character"
        })
        }
        else if(value.length < 6){
            this.setState({ 
                errorpassword:"Password should be graeter than 6 character"
        })
        }
        
        
        
    }
    formHandler =(event)=>{
        // console.log("jsjs");

        event.preventDefault()
        if(this.state.email===""){
            this.setState({ 
                erroremail: "Email required*"
        })
        }
        if(this.state.password===""){
            this.setState({ 
                errorpassword: "Password required*"
        })
        }
    }
   
  render() {
    return (
     
      <div className='container'>
        <h1>Login</h1>
        <form action="" onSubmit={this.formHandler} >
            <label htmlFor="Email" className='label'>Email: </label> <br />
        <input type="text" className={`Email`} value={this.state.email} onChange={this.emailHandler}/> <br />
            <p className='errorText'>{this.state.erroremail}</p>
            <label htmlFor="Password">Password: </label> <br />
            <input type="password"className={`Password}`}   value={this.state.password} onChange={this.passwordHandler}/> <br />
            <p className='errorText'>{this.state.errorpassword}</p>
            <input type="submit" className='Button'/> 
        </form>
        <p>Don't have an account? <br /> <Link to="/" className='Link'>SignUp</Link> </p>
        
      </div>
    )
  }
}

export default Login;