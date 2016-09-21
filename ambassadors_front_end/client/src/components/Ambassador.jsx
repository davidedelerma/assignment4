const React = require('react')
// const Router = require('react-router')
// const { Link } = Router
const Ambassador = React.createClass({
    getInitialState(){
      return {buttonString: 'Add +'}
    },
    onClick(){
      this.setState({buttonString: 'Added'})
      console.log(this.props.id)
      var canAdd = this.props.addToFavourites(this.props.id)
 
    },
    componentDidMount(){
      const url = 'http://localhost:5000/api/teacherambassadors'
      const request = new XMLHttpRequest()
      request.open("GET", url)
      request.setRequestHeader('Content-Type', 'application/json')
      request.withCredentials = true
      request.onload = function() {
          if (request.status === 200) {
              const jsonString = request.responseText
              const data = JSON.parse(jsonString)
              data.teacher_ambassadors.forEach(function(ambassador){
                if (ambassador.ambassador_id === this.props.id){
                  this.setState({buttonString: 'Added'})
                } 
              }.bind(this))
        

          } 
      }.bind(this)
      request.send(null)
    },


    render(){
      return(
      <div className = 'ambassador'>
        <div className = 'ambassador-details'>
          <h3 className='ambassador-name'>{this.props.name}</h3>
          <h3 className='ambassador-specialization'>Specialization: {this.props.subject}</h3>
          <p className='ambassador-email'>Email: {this.props.email}</p>
          <p className='ambassador-city'>City: {this.props.city}</p>
          <button onClick={this.onClick}>{this.state.buttonString}</button>
        </div>
      </div>
      )
    }
  }

) 

const {string,number} = React.PropTypes

Ambassador.propTypes ={
  name: string.isRequired,
  email: string.isRequired,
  city: string.isRequired
}

module.exports = Ambassador