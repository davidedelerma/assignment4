const React = require('react')
const Router = require('react-router')
const { Link, browserHistory } = Router
const FavAmbassador = require ('./FavAmbassador')

const Cart = React.createClass({
  getInitialState(){
    return {favAmbassadors:[]}
  },

  removeAmbassador(ambassadorID){
    var newAmbassadors = this.state.favAmbassadors.filter(function( obj ) {
        return obj.ambassador.id !== ambassadorID;
    });
    this.setState({favAmbassadors: newAmbassadors})
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
            this.setState({favAmbassadors: data.teacher_ambassadors})
            console.log(this.state)
        } 
    }.bind(this)
    request.send(null)
  },
  render(){
    return(
      <div className="listing">
        <ul className="topnav" id="myTopnav">
          <li><Link className='title-nav' to="/"> Ambassadors </Link></li>
        </ul>
        <div><h1 className='title-myambassador'> My Ambassadors </h1></div>
        <div className='ambassadors-container'>
          {
            this.state.favAmbassadors.map((join)=>{
              return(
                <FavAmbassador {...join} value= {join.id} key={join.id} removeAmbassador={this.removeAmbassador} />
              )
            })
          }
        </div>
      </div>
    )
  }
  
})

module.exports=Cart