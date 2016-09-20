const React = require ('react')
const LoginBox = require('./auth/LoginBox')
const { Link } = require('react-router')

const Home=React.createClass({
  // getInitialState(){
  //   return {currentTeacher: null}
  // },
  // setCurrentTeacher(teacher){
  //   this.setState({currentTeacher: teacher})
  // },
  render() {
    console.log(this.props.setCurrentTeacher)
    return(
      <div className = "home">
        <h1 className='title'> Ambassadors </h1>
        <LoginBox url='http://localhost:5000/'/>
        <Link className='ambassador-link' to='/ambassadors' >View Ambassadors</Link>
      </div>
    )
  }

})


module.exports = Home