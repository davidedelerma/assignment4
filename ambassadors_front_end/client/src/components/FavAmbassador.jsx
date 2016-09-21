const React = require('react')

const FavAmbassador = React.createClass({

  onClick(){
    const url = 'http://localhost:5000/api/teacherambassadors/' + this.props.id
    const request = new XMLHttpRequest()
    request.open("DELETE", url)
    request.setRequestHeader('Content-Type', 'application/json')
    request.withCredentials = true
    request.onload = function() {
      if (request.status === 200) {                
        console.log("Amabassador removed! hurrah!")
      } 
    }.bind(this)
    request.send(null)
    this.props.removeAmbassador(this.props.ambassador.id)
  },
  render(){
    return(
      <div className = 'ambassador'>
        <div className = 'ambassador-details'>
          <h3 className='ambassador-name'>{this.props.ambassador.name}</h3>
          <h3 className='ambassador-specialization'>Specialization: {this.props.ambassador.subject}</h3>
          <p className='ambassador-email'>Email: {this.props.ambassador.email}</p>
          <p className='ambassador-city'>City: {this.props.ambassador.city}</p>
          <button onClick={this.onClick}>Delete</button>
        </div>
      </div>      
    )
  }
})

module.exports=FavAmbassador