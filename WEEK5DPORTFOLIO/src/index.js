import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GreetingElement from './myGreetingApp';
import reportWebVitals from './reportWebVitals';
import GreetingElementwithProp from './Mygreetingprop'; 
import AppColor from './AppbackgroundColor'



ReactDOM.render(

  <React.StrictMode>
   
   <AppColor heading="This is first element" lbl=
"Name :" color="green"/>
 <AppColor heading="This is second element" lbl
="Name :" color="blue"/>
 <AppColor heading="This is third third element
" lbl="Name :" color="Yellow"/>
  
  </React.StrictMode>,
  document.getElementById('root'));
  
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
