import React, { Component } from 'react'
class Class_lifecycle extends Component {
  constructor(props){
    super(props);
    this.state={color:"red"};
  }
  // getDrivedStateformpropes(props,state){
  //       return{color:props.color}
  // }

  // componentDidMount(){
  //   setTimeout(()=>{
  //     this.setState({color:"blue"})},1000)
  //   }

  // componentDidUpdate(){
  //   document.getElementById("d1").innerHTML="update color:"+  this.state.color;
  // }

  //  getSnapshotBeforeUpdate(preprops,prestate){
  //     document.getElementById("d1").innerHTML="before the update"+prestate.color;
  //  } 
  //  componentDidUpdate(){
  //   document.getElementById("d2").innerHTML="After the update"+this.state.color;
  //  }

  // getDrivedStateformpropes(props,state){
  //         return{color:props.color}
  //   }

  // shouldComponentUpdate(){
  //   return true;   //return false
  // }
    // changecolor=()=>{
    //   this.setState({color:"blue"});
    // }

    
  render() {
    return (
      <>
      <div>
        <h1>Color is : {this.state.color}</h1>
        <div id='d1'></div>
        <div id='d2'></div>
        {/* <button type='button' onClick={this.changecolor}>Click</button> */}
      </div>
      </>
    )
  }
}
export default Class_lifecycle


