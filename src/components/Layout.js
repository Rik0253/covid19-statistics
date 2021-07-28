import React, { Component } from 'react'

export default class Layout extends Component {
    render() {
        return ( 
            <div className="bg-gradient-to-r from-green-400 to-blue-500">
                
                <p className="lg:text-6xl sm:text-1xl text-center p-2 justify-items-center">
                    {
                        (this.props.data.img)?
                        <img className="object-contain rounded lg:h-8 md:h-2 inline-block" src={this.props.data.img} alt="country" />
                        :
                        ''
                    }  {this.props.data.text}
                    </p>
            </div>           
                           
        )
    }
}
