import React from 'react';
import './App.css';
import Comp1 from './Component/Comp1'
import Comp2 from './Component/Comp2'
import User from './assets/man-user.svg'
import Right from './assets/right-arrow.svg'
import Left from './assets/left-arrow.svg'

class App extends React.Component {
  
  constructor(){
    super();
    this.state={
      available : 
      [{src :User , name : 'Sahil'},
      {src :User , name : 'Raj'},
      {src :User , name : 'Kartheek'},
      {src :User , name : 'Sarthak'},
      {src :User , name : 'Ishnat'}] ,

      assigned : []
    }
    console.log(User)
  }

    remove = (term)=> {
      if(term && term=="right" && this.state.available.length){
        let captured_ele = '';
        let available_new=this.state.available;
        captured_ele = available_new.shift()
        let assigned_new = this.state.assigned
        assigned_new.unshift(captured_ele)
        // this.state.assigned.unshift(ele);
        // this.setState(this.state.available,this.state.assigned);
        this.setState({available:available_new,assigned:assigned_new})
      }else if (term && term=="left" && this.state.assigned.length){
        let captured_ele = '';
        let available_new=this.state.available;
        let assigned_new = this.state.assigned;
        captured_ele = assigned_new.shift()
        
        available_new.unshift(captured_ele)
        // this.state.assigned.unshift(ele);
        // this.setState(this.state.available,this.state.assigned);
        this.setState({available:available_new,assigned:assigned_new})
      }
    }
  render(){
    return(
      <div className='Container'>
        <div className = 'Container1'>
        {
          this.state.available.map((data, index) => {
            return(
              <Comp1 data={data} key={`somename-${index}`}/>
            );
          })
        }
        </div>
        <div className='Container2'>
        {
          this.state.assigned.map((data, index) => {
            return(
              <Comp2 data={data} key={`somename-${index}`}/>
            );
          })
        }
        </div>
        <div className='Container_arrow' >
          <div onClick={()=>{this.remove("right")}}>
            <img src={Right}/>
          </div>
          <div>
            <img src={Left} onClick={()=>{this.remove("left")}} />
          </div>
          
        </div>
        
      </div>
      
    );
  }
}
export default App;

