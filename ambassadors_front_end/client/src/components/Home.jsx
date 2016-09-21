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
        <div><h1 className='title'> Ambassadors </h1></div>
        <div><LoginBox url='http://localhost:5000/'/></div>
        <Link className='ambassadors-link' to='/ambassadors' >View Ambassadors</Link>
      </div>
    )
  }

})


module.exports = Home