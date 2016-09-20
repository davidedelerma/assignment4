const React = require('react')

const Ambassador = React.createClass({

    onClick(){
      console.log(this.props.id)
      this.props.addToFavourites(this.props.id)
    },
    render(){
      return(
      <div className = 'show'>
        <div className = 'ambassador-details'>
          <h3 className='ambassador-name'>{this.props.name}</h3>
          <h4 className='ambassador-specialization'>Specialization: {this.props.subject}</h4>
          <p className='ambassador-email'>Email: {this.props.email}</p>
          <p className='ambassador-city'>City: {this.props.city}</p>
          <button onClick={this.onClick}>Add +</button>
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