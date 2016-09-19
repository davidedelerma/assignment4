const React = require ('react')
const Router = require('react-router')
const { Link, browserHistory } = Router
const Ambassador = require('./Ambassador')

const Listing = React.createClass({

  getInitialState(){
    return {searchQuery: '', ambassadors:[]}
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

  addToFavourites(event){
    console.log(this.props.currentTeacher)
    //AJAX request to add ambassador to teacher

    // const url = 'http://localhost:5000/api/teacherambassadors'
    // const request = new XMLHttpRequest()
    // request.open("POST", url )
    // request.setRequestHeader("Content-Type", "application/json")
    // request.withCredentials = true
    // request.onload = () => {
    //   if(request.status === 200){
    //     console.log(request.responseText)

    //   } else if (request.status === 401){
    //   }
    // }
    // const data={
    //   teacher_id: this.state.currentTeacher
    // }
    // request.send(null)
  },

  render(){
    return(
        <div className="listing">
          <nav>
            <Link className='title' to="/"> Ambassadors </Link>
            <input className='search-box' type='text' placeholder='search by subject' 
            value={this.state.searchQuery} onChange={this.doSearch}/>
          </nav>
          <div className='ambassadors-container'>
            {
              this.state.ambassadors.filter((ambassador) => ` ${ambassador.subject}`.toUpperCase().indexOf(this.state.searchQuery.toUpperCase()) >= 0).map((ambassador)=>(
                <Ambassador {...ambassador} key={ambassador.ambassador_id} addToFavourites={this.addToFavourites}/>
                ))
            }
          </div>
        </div>
      )
  }
})
module.exports = Listing