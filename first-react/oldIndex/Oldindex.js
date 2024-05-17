import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
 import Animals from './AnimalPic';


// import Goodbye from './classes';
import reportWebVitals from './reportWebVitals';
//  import Boxes from './style';
 import Buttons from "./symbols"
// import Counterbuttons from './counter.js';
// import Controlledinput from './controlledinput';
// import  Multiple from './mutiple';
  import  Todos from './todos';
// import ExpensesPlain from './expensesPlain';
// import  Hello from './hello';
//  import ExpensesPlain from "./ExpensesPlain"
import AnimalsUi from './Animals' ;
const router = createBrowserRouter([
  {
    path: '/', 
    element: <div>Hello</div>
  },
  { 
    path: '/symbols',
    element: <Buttons />
  },
  {
    path: '/todos',
    element: <Todos />
  },
   
  {
    path: "/animals",
    element: <AnimalsUi /> ,
    children:[
      {
        "path":"/animals/dog",
        element:<Animals type= "dog" />
      },
      {
        path: "/animals/cat",
        element: <Animals type="cat" />
    }
    
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
  // <React.StrictMode>
   {/* <Header />
   <Header />
   <Addiction num1={5} num2={10} />
   <Addiction num1={52} num2={-34} />
   <Greetings user = "kamal" />  */}
   {/* <Goodbye />  */}
   {/* <Buttons /> */}
   {/* <Counterbuttons /> */}
   {/* <Controlledinput />  */}
    {/* <Boxes />  */}
    {/* <Multiple /> */}
    {/* <Todos /> */}
    {/* <Hello /> */}
    {/* < ExpensesPlain /> */}
  //  </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

function Header () {
  return(
    <div>
      <h2>title</h2>
      <a href=''>Home</a>
      <a href=''>Store</a>
      <a href=''>Contact</a>
    </div>
  )
}
<></>
function Addiction(props) {
  let title = "math"
  return(
    <div>
      <h3>{title}</h3>
      <p>{props.num1} + {props.num2} = {props.num1} + {props.num2}</p>
      <p>5+5 = {5 + 5} </p>
    </div>
   
  )
}
function Greetings(props){
  return(
    <div>
      <p>Welcome : {props.user}!</p>
    </div>
  )