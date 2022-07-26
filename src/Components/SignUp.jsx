import { useState, useEffect } from 'react';
import { registerUser } from '../Util/auth';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    if(submitted){
  registerUser(email,pass)
    }
  }, [submitted]);

  const extractDetails = (e) => {
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target[0].value)
    ) {
      setEmail(e.target[0].value);
      setSubmitted(true);
    } else {
        alert(`Please, provide valid email address!`)
    }
    if(e.target[1].value!==e.target[2].value){
        alert(`Passwords dont match!`)
    } else if (e.target[1].value.length < 8){
       alert(`Minimum password length is 8 characters!`)
    } else {
        setPass(e.target[1].value)
    }
  };
  return (
    <form id="log-in" onSubmit={(e) => extractDetails(e)}>
      <div className="container">
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>
        <label htmlFor="email">
          <b>Email</b>
        </label>
        <input type="text" placeholder="Enter Email" name="email" required />
        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        />
        <label htmlFor="psw-repeat">
          <b>Repeat Password</b>
        </label>
        <input
          type="password"
          placeholder="Repeat Password"
          name="psw-repeat"
          required
        />
        <p>
          By creating an account you agree to our{' '}
          <a href="#">Terms & Conditions</a>.
        </p>
        <div className="clearfix">
          <button type="button" className="cancelbtn">
            Cancel
          </button>
          <button type="submit" className="signupbtn">
            Sign Up
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
