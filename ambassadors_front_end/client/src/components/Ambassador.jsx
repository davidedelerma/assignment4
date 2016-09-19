const React = require('react')

const Ambassador = (props) => (
  <div className = 'show'>
    <div className = 'ambassador-details'>
      <h3 className='ambassador-name'>{props.name}</h3>
      <h4 className='ambassador-specialization'>Specialization: {props.subject}</h4>
      <p className='ambassador-email'>Email: {props.email}</p>
      <p className='ambassador-city'>City: {props.city}</p>
      <button onClick={props.addToFavourites}>Add +</button>
    </div>
  </div>
)

const {string,number} = React.PropTypes

Ambassador.propTypes ={
  name: string.isRequired,
  email: string.isRequired,
  city: string.isRequired
}

module.exports = Ambassador