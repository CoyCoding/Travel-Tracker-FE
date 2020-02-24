import React, {useState} from 'react';
import LogInForm from './comps/LogInForm';
import SignUpForm from './comps/SignUpForm';
import './Home.scss'

const Home = (props) => {
  const [signUp, toggleLogForm] = useState(true);

  return(
    <div id="home">
      <div className="home">
        <div className="half">
        </div>
        <div className="half">
          { signUp ? <SignUpForm/> : <LogInForm/> }
          <p> already have an account?
            <span onClick={() => toggleLogForm(!signUp)}>Log in</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home;