import React, { Component } from 'react'

 class Unmount extends Component {
        constructor(props){
            super(props);
            this.state={show:true}
        }
        delete =()=>{
            this.setState({show:false})
        }

  render() {
    let header;
    if(this.state.show){
        header=<Child/>;
    };
    return (
      <>
      <div>
        {header}
        <button type='button' onClick={this.delete}>Delete</button>
      </div>
      </>
    )
  }
}

class Child extends Component{
    componentWillUnmount(){
        alert ("unnmount");
    }
    render() {
        return (
          <>
            <h1>Hello..</h1>
          </>
        )
      }  
}
export default Unmount
