const React = require('react')
const LinkedStateMixin = require('react-addons-linked-state-mixin')
const SignIn = React.createClass({
  // mixins?
  mixins: [LinkedStateMixin],
  
  signIn: function(){
    const request = new XMLHttpRequest()
    request.open("POST", this.props.url)
    request.setRequestHeader("Content-Type", 'application/json')
    request.withCredentials = true
    request.onload = () => {
      if (request.status === 201){
        const teacher = JSON.parse(request.responseText)
        this.props.onSignIn(teacher)
      }
    }
    const data={
      teacher: {
        email: this.state.email,
        password: this.state.password
      }
    }
    request.send(JSON.stringify(data))
  },

  getInitialState(){
    return{email:'', password: ''}
  },

  render(){
    return(
      <form className = 'login-form'>
        <input type='text' valueLink={this.linkState('email')} placeholder = "Email....." />
        <input type='password' valueLink={this.linkState('password')} placeholder = "password....." />
        <button onClick={this.signIn}> Sign In </button>
      </form>
      )
  }
})
module.exports =SignIn