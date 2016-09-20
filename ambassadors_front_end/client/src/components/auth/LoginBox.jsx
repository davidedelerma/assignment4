const React = require('react')
const SignIn = require('./SignIn')
const SignUp = require('./SignUp')
const SignOut = require('./SignOut')

const LoginBox = React.createClass({

  getInitialState(){
    return {currentTeacher: null}
  },
  setTeacher(teacher){
    this.setState({currentTeacher: teacher, favList:[]})
  },

  componentDidMount(){
    const request = new XMLHttpRequest()
    request.open("GET", this.props.url + "teachers.json")
    request.setRequestHeader("Content-Type", "application/json")
    request.withCredentials = true
    request.onload = () => {
      if(request.status === 200){
        const receinvedTeacher = JSON.parse(request.responseText)
        this.setTeacher(receinvedTeacher)
      } else if (request.status === 401){
        this.setState({currentTeacher: false})
      }
    }
    request.send(null)
  },

  render(){
    let mainDiv = <div>
      <h4> Please Sign in </h4>
      <SignIn url={this.props.url + "teachers/sign_in.json"}
        onSignIn = {this.setTeacher} />
      <SignUp url = {this.props.url + "teachers.json"} onSignUp={this.setTeacher} />
    </div>
    if (this.state.currentTeacher){
      mainDiv = <div>
        <h4> Welcome {this.state.currentTeacher.email} </h4>
        <SignOut url={this.props.url + "teachers/sign_out.json"} onSignOut={this.setTeacher} />
      </div>
    }
    return (
      <div>
        {mainDiv}
      </div>
      )
  }
})

module.exports = LoginBox
