import React from 'react';
import './App.css';
import {useFormik} from 'formik'

function App() {
  const formik = useFormik({
    initialValues: {
      name: '',
      emailField: '',
      pswField: ''
    },
    onSubmit: values => {
      console.log('form:', values);
    },
    validate: values => {
      let errors = {};
      if(!values.name) errors.name = 'Field required';
      else errors.name = 'Login Successful';
      if(!values.emailField) errors.emailField = 'Field required';
      if(!values.pswField) errors.pswField = 'Field required';
      else errors.pswField = 'Login Successful';
      return errors;
    }


  });
  return (
  <div >
    <form onSubmit={formik.handleSubmit}>
    <div>Name</div>
    <input name="name" type="text" onChange={formik.handleChange} value={formik.values.name}/>
    {formik.errors.name ? <div style={{color: 'red'}}>{formik.errors.name}</div>: null}
    
    
    
    <div class="above">Email</div><h6 class="adjacent">User name is your email address</h6>
    <input name="emailField" type="text" onChange={formik.handleChange} value={formik.values.emailField}/>
    {formik.errors.emailField ? <div style={{color: 'red'}}>{formik.errors.emailField}</div>: null}
    
    <div>Password</div>
    <input name="pswField" type="text" onChange={formik.handleChange} value={formik.values.pswField}/>
    {formik.errors.pswField ? <div style={{color: 'red'}}>{formik.errors.pswField}</div>: null}
    
    <div><button name='submitBtn' onclick="handle()">Submit</button></div>
    </form>
  </div>
  );
}

export default App;
