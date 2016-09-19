const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router')
const {Router, Route, IndexRoute, hashHistory} = ReactRouter
const Home = require('./components/Home')
const Listing = require('./components/Listing')
const Main = require('./components/Main')

const App = React.createClass({
  render(){
    return(
      <Router history={hashHistory}>
        <Route path='/' component={Main}>
          <IndexRoute component={Home} />
          <Route path='/ambassadors' component={Listing} />
        </Route> 
      </Router>
    )
  }
})

window.onload = function(){
  ReactDOM.render(<App/>, document.getElementById('app'))
  
}
module.exports = App
