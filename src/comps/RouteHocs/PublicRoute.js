import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PublicRoute = ({ component: Component, auth, ...rest }) =>  (
  <Route {...rest} render={ (props) => {
      if (auth.attemptingLogIn ){
        return <h1>Loading...</h1>;
      } else if (auth.isLoggedIn){
        return <Redirect to="/Home" />
      } else {
        return <Component {...props}/>
      }
    }}
  />
)

const mapStateToProps = state => ({ auth: state.auth })

export default connect(
    mapStateToProps
)(PublicRoute)