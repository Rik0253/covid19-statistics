import React, { Component } from 'react'

export default class Legend extends Component {    
    
    
    render() {
       
        return (
            
                <div class="grid grid-cols-6 p-3">
                    
                        {this.props.legendItems.map((item, index)=>(
                                <div key={index} className="h-12 rounded-md flex items-center justify-center text-2xl font-bold" style={{backgroundColor: item.color, color: item.textColor}}>
                                    {item.title}
                                </div>
                            ))}                       
                    
                   
                </div>                
            
        )
    }
}
