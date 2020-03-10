import React, {useState, useEffect} from 'react';
import LogInForm from './comps/LogInForm';
import SignUpForm from './comps/SignUpForm';
import { connect } from 'react-redux';
import { clearErrors } from '../../store/actions/authActions';
import './Home.scss'

const Home = (props) => {
  const [formSelection, setForm] = useState(props.match.path);

  useEffect(() => {
    setForm(props.match.path);
  }, [props.match.path])

  const formShouldRender = () => {
    if(props.error){
      props.clearErrors();
    }
    return formSelection === '/SignUp' ? true : false;
  }

  return(
    <div id="home">
      <div className="home">
        <div className="half">
        </div>
        <div className="half">
          { formShouldRender()
            ? <SignUpForm {...props.history}/>
            : <LogInForm  {...props.history}/> }
        </div>
      </div>
    </div>
  )
}

export default connect(null, {clearErrors})(Home);