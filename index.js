import React, { Component } from "react";
import { render } from "react-dom";

//---> dynamic count example

// class App extends Component {
//   constructor() {
//     super();
//     this.state = { count: 0 };
//   }

//   changeCount() {
//     this.setState(state => ({ count: state.count + 1 }));
//   }

//   componentDidMount() {
//     this.interval = setInterval(() => this.changeCount(), 1000);
//   }

//   render() {
//     return <div>count: {this.state.count}</div>;
//   }
// }

// render(<App />, document.getElementById("root"));

//---> render method

// render(<h1>Hello World</h1>,document.getElementById('root'));

//--->function component

// function Test(props){
//   return <h1>hello, {props.name}</h1>
// }

// render(<Test name='Bandi' />,document.getElementById('root'));

//--->class component

// class Test extends Component {
//   render() {
//     return (
//       <div>
//         <h1>hello, {this.props.name}</h1>
//         <h1>hello, {this.props.name}</h1>
//       </div>
//     );
//   }
// }

// render(<Test name="Bandi" />, document.getElementById("root"));

//---> clock tick example

// class Clock extends Component{
//   constructor(props){
//     super(props);
//     this.state = {date : new Date()}
//   }

//   tick(){
//     this.setState(state => ({date : new Date()}));
//   }

//   componentDidMount(){
//     this.interval = setInterval(()=>(this.tick(),1000));
//   }

//   // componentWillUnmount(){
//   //   clear(this.interval);
//   // }

//   render(){
//     return (<div>Time : {this.state.date.toLocaleTimeString()}</div>)
//   }
// }

// render(<Clock />,document.getElementById('root'));

// function tick(){
//   const element = (
//     <div>
//       <h1>Current Time</h1>
//       <h1>{new Date().toLocaleTimeString()}</h1>
//     </div>
//   )
//   render(element,document.getElementById('root'));
// }

// setInterval(tick,1000);

// function ButtonClick(props){
//   const ele = (
//     <button onClick = {displayMessage} >Click Me</button>
//   )

//   function displayMessage(){
//     render(<h1>Hey {props.name}, you got this</h1>,document.getElementById('root'))
//   }
//   return ele;
// }

// render(<ButtonClick name='bandi'/>,document.getElementById('root'));


//---------------------------------------------
// function ListRendering(props) {
//   const items = props.days;
//   const ele = items.map(item => <li>{item}</li>);
//   return <ul>{ele}</ul>;
// }

// const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

// render(<ListRendering days={days} />, document.getElementById("root"));


//-----------------------------------------------
// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input type="text" onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

// render(
//   <NameForm />,
//   document.getElementById('root')
// );


//------------------------------------------
