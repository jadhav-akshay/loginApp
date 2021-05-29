import React from 'react';
import './App.css';
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

//author Akshay Jadhav 29/05/2021

const Field = React.forwardRef(({label, type}, ref) => {
  return (
    <div>
      <label className="labelStyle" >{label}</label>
      <input ref={ref} type={type} className="labelStyle" />
    </div>
  );
});

const Form = ({onSubmit}) => {
  let emailreg =/[a-zA-Z0-9._%+-]+\@[a-zA-Z0-9-]+\.[a-z]{2,15}/g;
  const usernameRef = React.useRef();
  const passwordRef = React.useRef();
  const handleSubmit = e => {
      e.preventDefault();
      const data = {
          username: usernameRef.current.value,
          password: passwordRef.current.value
      };
      if(!emailreg.test(data.username)) {
        alert("Please enter valid email id");
      } else if (data.password.length<9) {
        alert("Password length should be grether than 9");
      } else {
         onSubmit(data);
      }
  };
  return (
    <form className="formStyle" onSubmit={handleSubmit} >
      <Field ref={usernameRef} label="*Username:" type="text" />
      <Field ref={passwordRef} label="*Password:" type="password" />
      <div>
        <button className="submitStyle" type="submit">Submit</button>
      </div>
    </form>
  );
};

const App = () => {
  const loginData = useSelector((state) => state.loginData);
  let history = useHistory();

  const handleSubmit = data => {
      const json = data;
      console.clear();
      if(loginData.username === json.username && loginData.password === json.password) {
        console.log("login successfull");
        history.push("/employeeList");        
      } else {
        console.log("login failed");        
        alert("Incorrect Username and Password");
      }
  };
  return (
      <div className="appStyle">
        <Form onSubmit={handleSubmit} />
      </div>
  );
};

export default App;