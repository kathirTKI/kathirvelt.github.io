//react state        ----------------> using constructor 

/*class Sample extends React.Component
{
  constructor(props){
    super(props)
    this.state={
      name:"kathir",
      age:22,
      color:"brown"
    }
  }
  render()
  {
    return(
    <div>
    <h1>Sample</h1>
    <h2>name:{this.state.name}</h2>
    <h3>age:{this.state.age}</h3>
    </div>
    )
    }
  }
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>) */

//basic program 

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

//basic Rendering   -------------------------->


/*const App=()=>{
  return(
    <div>
      <h1>React app</h1>
      <p> my name is kathir</p>
    </div>
  )
}
const r1=ReactDom.createRoot(document.getElementById('root'))
r1.render(<App/>)*/





// function rendering      --------------------------------->

/*function Sample()
{
  return(
    <div>
      <h1>sample app</h1>
    </div>
  )
}
const r1=ReactDom.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/



//dynamic rendering  -------------------------->

/*const App=()=>{
  const name='kathir'
  return(
    <div>
      <h1>
        dynamic app
      </h1>
      <p>my name is  :{name}</p>
      <p>today date:{new Date().toDateString()}</p>
    </div>
  )
}
const r1=ReactDom.createRoot(document.getElementById('root'))
r1.render(<App/>) */


// React without JSX                        ----------------------------------------->     @@@@@@@@@@@@@@@@@@@@@@@@@@@

/*const myelem1=React.createElement('h1',null,'welcome')
const myelem2=React.createElement('p',null,'this is a paragraph')
const r1=ReactDOM.createRoot(document.getElementById('root'))
const r2=ReactDOM.createRoot(document.getElementById('root1'))
r1.render(myelem1)
r2.render(myelem2) */

//react with JSK                   ------------------------------->

/*const myelem=<h1>welcome</h1>
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(myelem)*/


// react list    --------------------------------------->

/*const Myelem=()=>{
  return(
    <div>
      <h1>My list</h1>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
      <ol>
        <li>item 1</li>
        <li>item 2</li>
      </ol>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Myelem/>) */

// conditional rendering  -------------------------------------------->

//if else statement   -------------------------->
/*const x=100;
let text="";
if(x>10)
{
  text="greater than 10"
}
else{
  text="less than 10"
}
const Myelem=()=>{
  return(
    <div>
      <h1>conditional rendering</h1>
      <p>{text}</p>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Myelem/>)*/


//nested if else     --------------------------------------------->
/*const x = 100;
let text = "";
if (x > 10) {
  if (x > 120) {
    text = "greater than 50"
  }
 else {
  text="graeter than 100 "
 }
}else{
  text = "less than 10"
}

const Myelem = () => {
  return (
    <div>
      <h1>kathir</h1>
      <p>{text}</p>
    </div>
  )
}
const r1 = ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Myelem />) */


// else if ladder    ---------------------------------------->

/*const x=200;

let text="";
if(x>100){
  text="greater than 100"
} else if (x>50){
  text="greater than 50"
} else if(x>10){
  text="graeter than 10"
} else{
  text="less tha 10"
}
const Myelem=()=>{
  return(
    <div>
      <h1>kathir tki</h1>
      <p>{text}</p>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Myelem/>) */


//importing css and css ----------------------------------->  @@@@@@@@@@@@

/* import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const App=()=>{
  return(
    <div>
      <h1>Kathir tki</h1>
      <button type ="button" className="btn btn-primary">click here</button>
      <button type="button"  className="btn btn-danger">click here</button>
      <h2 className="f1">this is heading</h2>   
      <p id="f2">this is a para</p>
       </div>
  )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)  */

//function component        --------------------------------> Q

/*function Sample()
{
  return(
    <div>
      <h1>siuuuuuuuuuuuuuu</h1>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>) */

// class component     ----------------------------------------> Q

/*import './index.css';
class Sample extends React.Component
{
  render()
  {
    return(
      <div>
        <h1>class component</h1>
      </div>
    )
  }
}
const r1 =ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>) */

//function component with props         ------------------------------------------------>

/* function Sample(props)
{
  return(
    <div>
      <h1>function component</h1>
      <h2>{props.name} </h2>
      <h2>{props.age}</h2>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample name="kathir" age="22" />) */

//component in component

/*function Component1()
{
  return(
    <div>
      <h1>component 1</h1>
      <Component3/>
    </div>
  )
}
function Component2()
{
  return(
    <div>
      <h1>component2</h1>
      <Component1/>
    </div>
  )
}
function Component3(){
  return(
    <div>
      <h1>component 3</h1>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Component2/>) */

//constructor using super   -------------------------------->

/*class Sample extends React.Component
{
  constructor()
  {
    super()
    {
      this.state={
        name:"kathir",
        age:25
      }
    }
  }
  render()
  {
    return(
      <div>
        <h1>Sample</h1>
        <h2>name:{this.state.name}</h2>
        <h2>age:{this.state.age}</h2>
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>) */

//constructor using props

/*class Sample extends React.Component ----------------->
{
  constructor(props)
  {
    super(props)
    this.state={f1:'green'}
  }
  render()
  {
    return(
      <div>
        <h1>Sample</h1>
        <h2>color:{this.props.f1}</h2>
        <h3>Another color:{this.state.f1}</h3>
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample f1="red"/>) */

// react state  --------------------------------->

/*class Sample extends React.Component
 {
  constructor(props)
   {
    super(props)
    this.state = {
      name: 'kathir',
      age: 22,
    }
  }
  render() {
    return (
      <div>
        <h1>Sample</h1>
        <h2>name:{this.state.name}</h2>
        <h3>age:{this.state.age}</h3>
      </div>
    )
  }
}
const r1 = ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample />) */

//changing the state object    ---------------------------------------------->


/*class Sample extends React.Component
{
  constructor(props){
    super(props)
    this.state={
      name:'kathir',
      age:'22',
    }
    this.handleClick=this.handleClick.bind(this)
  }
  handleClick(){
    this.setState({
      name:'DON TKI',
      age:25
    })
  }
  render(){
    return(
      <div>
        <h2>name:{this.state.name}</h2>
        <h2>age:{this.state.age}</h2>
        <button onClick={this.handleClick}>click me</button>
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById(ored'root'))
r1.render(<Sample/>) */

//react event    --------------------------------------->

/*function Football(){
  const shoot=()=>{
    alert("Goal scored")
  }
  return(
    <div>
      <h1>Kathir</h1>
      <button onClick={shoot}>shoot</button>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football/>) */

// React event argument passing    ------------------------------------->

/*function Football()
{

  const shoot=(year)=>
    {
    alert("goal scored in"+year)
  }
  return(
    <div>
      <h1>Football</h1>
      <button onClick={()=>shoot(2003)}>shoot</button>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football/>) */


//  conditional rendering   -------------------------------------->

/*function Missedgoal() {
  return <h1>missed goal</h1>
}
function Madegoal() {
  return <h1>made goal</h1>
}
function Football(props) {
  const isGoal = props.isgoal;
  if (isGoal) {
    return <Madegoal/>
  }
  else {
    return <Missedgoal/> 
  }
}
const r1 = ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football isGoal={Math.random() >1} />) */

//React list using map  --------------------------------------->

/*function Car(props)

{
  return<li>I am {props.b1}</li>
}
function Garage()
{
  const Cars=['bmw','audi','ferrari']
  return(

    <div>
      <h1>Garage</h1>
      <ul>
        {Cars.map((car)=><Car b1={car}/>)}
      </ul>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Garage/>) */

//react keys and values          ----------------------------------------->

/*function Car(props)
{
  return<li>{props.id}{props.name}</li>
}
function Garage()
{
  const Cars=[
    {id:1,name:'BMW'},
    {id:2,name:'AUDI'},
    {id:3,name:'FERRARI'}
  ]
  return(
    <div>
      <h1>Garage</h1>
      <ul>
        {Cars.map((car)=><Car id={car.id} name={car.name}/>)}
      </ul>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Garage/>) */

//Get dervied statefromprops

/*class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }
  static getDerviedStateFromProps(props, state) {
    console.log("getdervied")
    return { count: props.count }
  }
  render() {
    return (
      <div>
        <h1>Header</h1>
        <p>Count:{this.state.count}</p>
      </div>
    )
  }
}
const r1 = ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Header count={10} />) */

//React usestate  ---------------------------------------------->

/*function Counter(){
  const[count,setCount]=React.useState(0)
  return(
    <div>
      <p>Count :{count}</p>
      <button onClick={()=> setCount(count+1)}>Increment</button>
      <button onClick={()=> setCount(count-1)}>decrement</button>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Counter/>)*/

// use state

/*function Userprofile(){
  const[user,setUser]=useState({name:"kathir" ,age:22,email:"kathirtki11@gmail.com"})
  const updateEmail=()=>{
    setUser({user,email:"kathirtki11@gmail.com"})
  }

  return(
    <div>
      <p>username:{user.name}</p>
      <p>age:{user.age}</p>
      <p>email :{user.email}</p>
      <button onClick={updateEmail}>Update Email</button>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Userprofile/>)*/


// usestate with arrays          ---------------------------------------->

/*function TodoList()
{
  const [todos,setTodos]=useState(["buymilk","buyeggs","buybread"])
  const addTodo=()=>{
    setTodos([todos,"Buychicken"])
  }
  return(
    <div>
      <ul>
        {todos.map((todo,index)=>(
          <li>{index}{todo}</li>
        ))}
      </ul>
      <button onClick={addTodo}>add todo</button>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<TodoList/>)*/

//react REST API POST using usestate and useeffect

/*function App()
{
  const[user,setUser]=useState([])
  useEffect(()=>
  {
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(response=>response.json())
   .then(data=>setUser(data))
  })
  return(
    <div>
      <h1>User</h1>
      <table>
        <thead>
          <th>id</th>
          <th>name</th>
          <th>Email</th>
          <th>Website</th>
          <th>action</th>
        </thead>
        <tbody>
          {user.map((user,index)=>(
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
              <td>Edit delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)*/

//REACT USERID      ------------------------------------------------>

/*function App(){
  const[user,setUser]=useState([])
  const[id,setId]=useState(1)

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response=>response.json())
    .then(data=>setUser(data))
  })
  return(
    <div>
      <h1>USER</h1>
      <p>{user.name}</p>
      <p>{user.email}      </p>
      <p>{user.website}</p>
      <button onClick={()=>setId(id+1)}>add</button>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)*/


// react using without usecontext    ----------------------------->


/*function Component1(){
  const [user,setUser]=useState('kathir')
  return(
    <div>
      <h1>{user}</h1>
      <button className="kathir1" onClick={()=>alert('hlo')}>changeuser</button>
      <Component2 setuser={user}/>
    </div>
  )
}

function Component2(props)
{
  return(
    <div>
      <h1>{props.setuser}</h1>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Component1/>)*/


//React using with usecontext   ----------------->

function Kathir()
{
  const[user,setUser]=useState('tki11')
  return(
    <div>
      <h1>{user}</h1>
      <button onClick={()=>setUser("kathir1")}>change user</button>
      <Compoent2 user ={user}/>
    </div>
  )
}
function Compoent2(){
  return(
    <div>
      <h1> user   </h1>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Kathir/>)