import React from 'react'
import './Comp1.css'

class  Comp1 extends React.Component{
    
    render(){
        
        console.log(`this is data being sent ${this.props.data}`)
        return (
        <div className='Cards_Wrapper'>
            {
                this.props && this.props.data && this.props.data.src ?
            <div className='Card'>
                <img src={this.props.data.src} width = "90px"/>
                <p>{this.props.data.name}</p>
            </div>
            :
            null
            }
        </div>
        
        );
    }
}
export default Comp1