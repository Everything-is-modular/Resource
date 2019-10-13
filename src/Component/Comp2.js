import React from 'react'


class  Comp2 extends React.Component{
    
    render(){
        
        return (
        <div className='Card_Wrapper'>
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

export default Comp2