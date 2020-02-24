import React, {useState, useEffect} from 'react';
import LogInForm from './comps/LogInForm';
import SignUpForm from './comps/SignUpForm';
import './Home.scss'

const Home = (props) => {
  const [formSelection, setForm] = useState(props.match.path);
  useEffect(()=>{
    setForm(props.match.path);
  }, [props.match.path])
  const formShouldRender = () => {
    console.log(formSelection)
    if(formSelection === '/SignUp'){
      return true;
    }
    return false;
  }

  return(
    <div id="home">
      <div className="home">
        <div className="half">
        </div>
        <div className="half">
          { formShouldRender()
            ? <SignUpForm {...props.history}/>
            : <LogInForm {...props.history}/> }
        </div>
      </div>
    </div>
  )
}

export default Home;