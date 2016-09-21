const React = require ('react')
const Router = require('react-router')
const { Link, browserHistory } = Router
const Ambassador = require('./Ambassador')
const Cart = require('./Cart')

const Listing = React.createClass({

  getInitialState(){
    return {searchQuery: '', currentTeacher:'', ambassadors:[]}
  },

  setCurrentTeacher(){
    return new Promise(function(resolve,reject){
      const url = 'http://localhost:5000/teachers'
      const request = new XMLHttpRequest()

      request.open("GET", url)
      request.setRequestHeader('Content-Type', 'application/json')
      request.withCredentials = true

      request.onload = function() {
          if (request.status === 200) {
              const jsonString = request.responseText
              const data = JSON.parse(jsonString)
              this.setState({currentTeacher: data})
              resolve(request.response);
          }else{reject(Error(request.statusText))}
      }.bind(this)
      request.send(null)
    }.bind(this))
 
  },

  componentDidMount(){
    const url = 'http://localhost:5000/api/ambassadors'
    const request = new XMLHttpRequest()
    request.open("GET", url)
    request.setRequestHeader('Content-Type', 'application/json')
    request.withCredentials = true

    request.onload = function() {
        if (request.status === 200) {
            const jsonString = request.responseText
            const data = JSON.parse(jsonString)
            this.setState({ambassadors: data})
            this.setCurrentTeacher()
        } else {
          console.log('not logged in')
          browserHistory.goBack()
        }
    }.bind(this)
    request.send(null)
  },

  doSearch(event){
    this.setState({searchQuery: event.target.value})
  },

  addTeacherAmbassador(teacherID,ambassadorID){
    const url = 'http://localhost:5000/api/teacherambassadors'
    const request = new XMLHttpRequest()
    request.open("POST", url )
    request.setRequestHeader("Content-Type", "application/json")
    request.withCredentials = true
    request.onload = function() {
      if(request.status === 201){
        console.log(request.responseText)
      } 
    }
    const data={
      teacher_ambassadors:{
        teacher_id: teacherID,
        ambassador_id: ambassadorID
      }
     
    }
    request.send(JSON.stringify(data))
  },

  addToFavourites(ambassadorID){
    // this.setCurrentTeacher().then(()=> {       
    //     this.addTeacherAmbassador(this.state.currentTeacher.id,ambassadorID)    
    //   }
    // )
    return this.addTeacherAmbassador(this.state.currentTeacher.id, ambassadorID) 

  },

  render(){
    
    return(
        <div className="listing">
          <nav>
            <Link className='title-nav' to="/"> Ambassadors </Link>
            <input className='search-box' type='text' placeholder='search by subject' 
            value={this.state.searchQuery} onChange={this.doSearch}/>
            <Link className='cart' to="/cart"> My Ambassadors </Link>
          </nav>
          <div className='ambassadors-container'>
            {
              this.state.ambassadors.filter((ambassador) => ` ${ambassador.subject}`.toUpperCase().indexOf(this.state.searchQuery.toUpperCase()) >= 0).map((ambassador)=>{
                return(
                <Ambassador {...ambassador} value= {ambassador.id} key={ambassador.id} addToFavourites={this.addToFavourites}/>)
                })
            }
          </div>
        </div>
      )
  }
})
module.exports = Listing